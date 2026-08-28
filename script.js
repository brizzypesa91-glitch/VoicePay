const TASK_STATES = {
    IDLE: 'IDLE',
    RECORDING: 'RECORDING',
    REVIEW: 'REVIEW',
    SENDING: 'SENDING',
    COMPLETED: 'COMPLETED'
};

let taskData = {};
let activeMediaRecorder = null;
let activeStream = null;
let audioCtx = null;
let analyser = null;
let dataArray = null;
let bufferLength = null;
let animationId = null;

let totalVoicesRecorded = 0;
let jumlaSalio = 0;
let todayEarnings = 0;
let pendingTasks = 7; // Imebadilika kufikia 7 kadi

const audioPlayback = document.getElementById('audioPlayback');

async function handleMainAction(taskId, mteja) {
    const mainBtn = document.getElementById(`mainActionBtn-${taskId}`);
    const playBtn = document.getElementById(`playBtn-${taskId}`);
    const visualizerBox = document.getElementById(`visualizer-box-${taskId}`);
    const canvas = document.getElementById(`visualizer-${taskId}`);
    const canvasCtx = canvas.getContext('2d');

    if (!taskData[taskId]) {
        taskData[taskId] = { state: TASK_STATES.IDLE, chunks: [] };
    }
    
    let task = taskData[taskId];

    if (task.state === TASK_STATES.IDLE || task.state === TASK_STATES.COMPLETED) {
        try {
            activeStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            let options = {};
            if (MediaRecorder.isTypeSupported('audio/webm')) {
                options = { mimeType: 'audio/webm' };
            } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
                options = { mimeType: 'audio/mp4' };
            }

            activeMediaRecorder = new MediaRecorder(activeStream, options);
            task.chunks = [];

            activeMediaRecorder.ondataavailable = event => {
                if (event.data && event.data.size > 0) task.chunks.push(event.data);
            };

            activeMediaRecorder.start(100);
            task.state = TASK_STATES.RECORDING;

            mainBtn.innerHTML = `⏹️ Stop Recording`;
            mainBtn.className = 'btn btn-recording';
            visualizerBox.style.display = 'flex';

            setupVisualizer(activeStream, canvas, canvasCtx);

        } catch (err) {
            alert('Tafadhali ruhusu microphone kwenye browser yako ili kurekodi sauti.');
        }

    } else if (task.state === TASK_STATES.RECORDING) {
        if (activeMediaRecorder && activeMediaRecorder.state !== 'inactive') {
            activeMediaRecorder.onstop = () => {
                if (activeStream) activeStream.getTracks().forEach(track => track.stop());
                if (animationId) cancelAnimationFrame(animationId);
                visualizerBox.style.display = 'none';

                const mimeType = activeMediaRecorder.mimeType || 'audio/webm';
                task.audioBlob = new Blob(task.chunks, { type: mimeType });
                
                if (task.audioUrl) URL.revokeObjectURL(task.audioUrl);
                task.audioUrl = URL.createObjectURL(task.audioBlob);
                
                task.state = TASK_STATES.REVIEW;

                mainBtn.innerHTML = `🎙️ Re-record`;
                mainBtn.className = 'btn btn-red-primary';

                playBtn.classList.add('active');

                const sendBtn = document.getElementById(`sendBtn-${taskId}`);
                sendBtn.classList.add('ready-to-send');
            };

            activeMediaRecorder.stop();
        }
    }
}

function playAudio(taskId) {
    let task = taskData[taskId];
    if (task && task.audioUrl) {
        audioPlayback.src = task.audioUrl;
        audioPlayback.play().catch(e => console.error("Error playing audio:", e));
    }
}

function handleSendAction(taskId, mteja, priceStr, storeName) {
    let task = taskData[taskId];
    if (!task || task.state !== TASK_STATES.REVIEW) {
        alert("Tafadhali kwanza rekodi sauti na uisikilize kabla ya kutuma!");
        return;
    }

    const mainBtn = document.getElementById(`mainActionBtn-${taskId}`);
    const sendBtn = document.getElementById(`sendBtn-${taskId}`);

    task.state = TASK_STATES.SENDING;
    sendBtn.innerHTML = `⏳ Sending Response...`;

    setTimeout(() => {
        task.state = TASK_STATES.COMPLETED;
        
        mainBtn.innerHTML = `✓ Recorded`;
        mainBtn.disabled = true;
        mainBtn.style.opacity = '0.5';
        
        sendBtn.innerHTML = `✓ Sent to ${mteja}`;
        sendBtn.classList.remove('ready-to-send');
        sendBtn.style.background = '#059669';
        sendBtn.style.color = '#ffffff';

        // Update Voices
        totalVoicesRecorded++;
        document.getElementById('stat-voices').innerText = totalVoicesRecorded;

        // Update Pending Tasks
        if (pendingTasks > 0) {
            pendingTasks--;
            document.getElementById('stat-pending').innerText = pendingTasks;
        }

        // Update Balance
        ongezaSalio(priceStr);

        // Show Modal
        showPaymentModal(priceStr, storeName);

    }, 1800);
}

function showPaymentModal(priceStr, storeName) {
    const modal = document.getElementById('paymentModal');
    const modalMsg = document.getElementById('modalMessage');
    const txnCode = document.getElementById('txnCode');

    const randomTxn = 'TXN-' + Math.floor(10000000 + Math.random() * 90000000) + 'DH';

    modalMsg.innerText = `Hongera! Umelipwa ${priceStr} kutoka ${storeName}.`;
    txnCode.innerText = randomTxn;

    modal.style.display = 'flex';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

function setupVisualizer(stream, canvas, canvasCtx) {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = 64;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    drawWaves(canvas, canvasCtx);
}

function drawWaves(canvas, canvasCtx) {
    animationId = requestAnimationFrame(() => drawWaves(canvas, canvasCtx));
    analyser.getByteFrequencyData(dataArray);
    canvasCtx.fillStyle = '#060913';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 1.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 3.5;
        canvasCtx.fillStyle = '#dc2626'; 
        canvasCtx.fillRect(x, canvas.height/2 - barHeight/2, barWidth, barHeight);
        x += barWidth + 2;
    }
}

function ongezaSalio(priceStr) {
    let priceNum = parseInt(priceStr.replace(/[^0-9]/g, ''));
    if(!isNaN(priceNum)) {
        jumlaSalio += priceNum;
        document.getElementById('salio-txt').innerText = `TZS ${jumlaSalio.toLocaleString()}`;
        document.getElementById('stat-earned').innerText = `TZS ${jumlaSalio.toLocaleString()}`;

        todayEarnings += priceNum;
        document.getElementById('today-earning-txt').innerText = `+ TZS ${todayEarnings.toLocaleString()} today`;
    }
}