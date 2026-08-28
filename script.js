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

const audioPlayback = document.getElementById('audioPlayback');

async function handleMainAction(taskId, mteja) {
    const mainBtn = document.getElementById(`mainActionBtn-${taskId}`);
    const visualizerBox = document.getElementById(`visualizer-box-${taskId}`);
    const canvas = document.getElementById(`visualizer-${taskId}`);
    const canvasCtx = canvas.getContext('2d');

    if (!taskData[taskId]) {
        taskData[taskId] = { state: TASK_STATES.IDLE, chunks: [] };
    }
    
    let task = taskData[taskId];

    if (task.state === TASK_STATES.IDLE || task.state === TASK_STATES.COMPLETED) {
        // --- HATUA YA 1: ANZA KUREKODI ---
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
                if (event.data && event.data.size > 0) {
                    task.chunks.push(event.data);
                }
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
        // --- HATUA YA 2: STOP REKODI & PREPARE AUDIO ---
        if (activeMediaRecorder && activeMediaRecorder.state !== 'inactive') {
            
            activeMediaRecorder.onstop = () => {
                if (activeStream) {
                    activeStream.getTracks().forEach(track => track.stop());
                }

                if (animationId) cancelAnimationFrame(animationId);
                visualizerBox.style.display = 'none';

                const mimeType = activeMediaRecorder.mimeType || 'audio/webm';
                task.audioBlob = new Blob(task.chunks, { type: mimeType });
                
                if (task.audioUrl) URL.revokeObjectURL(task.audioUrl);
                task.audioUrl = URL.createObjectURL(task.audioBlob);
                
                task.state = TASK_STATES.REVIEW;

                mainBtn.innerHTML = `▶️ Play Audio`;
                mainBtn.className = 'btn btn-review';

                const sendBtn = document.getElementById(`sendBtn-${taskId}`);
                sendBtn.classList.add('ready-to-send');
            };

            activeMediaRecorder.stop();
        }

    } else if (task.state === TASK_STATES.REVIEW) {
        // --- HATUA YA 3: PLAYBACK ---
        if (task.audioUrl) {
            audioPlayback.src = task.audioUrl;
            audioPlayback.play().catch(e => console.error("Error playing audio:", e));

            mainBtn.innerHTML = `🔊 Playing...`;
            audioPlayback.onended = () => {
                mainBtn.innerHTML = `▶️ Replay Audio`;
            };
        }
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
    sendBtn.innerHTML = `<span class="spinner"></span> Sending...`;
    sendBtn.classList.remove('ready-to-send');
    sendBtn.classList.add('sending-state');

    setTimeout(() => {
        task.state = TASK_STATES.COMPLETED;
        
        mainBtn.innerHTML = `✓ Voice Recorded`;
        mainBtn.className = 'btn btn-recorded-complete';
        
        sendBtn.innerHTML = `✓ Sent to ${mteja}`;
        sendBtn.className = 'btn btn-sent-complete';

        // 1. Ongeza Salio
        ongezaSalio(priceStr);

        // 2. Onyesha Popup ya Malipo (Payment Notification)
        showPaymentModal(priceStr, storeName);

    }, 2000);
}

// Function ya Onyesha Popup ya Malipo
function showPaymentModal(priceStr, storeName) {
    const modal = document.getElementById('paymentModal');
    const modalMsg = document.getElementById('modalMessage');
    const txnCode = document.getElementById('txnCode');

    // Tengeneza kodi ya muamala ya uongo mfano: TXN-83920194DH
    const randomTxn = 'TXN-' + Math.floor(10000000 + Math.random() * 90000000) + 'DH';

    modalMsg.innerText = `Hongera! Umelipwa ${priceStr} kutoka ${storeName}.`;
    txnCode.innerText = randomTxn;

    modal.style.display = 'flex';
}

// Function ya Funga Popup
function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'none';
}

function setupVisualizer(stream, canvas, canvasCtx) {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
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
    canvasCtx.fillStyle = '#030712';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 1.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 3.5;
        canvasCtx.fillStyle = '#38bdf8'; 
        canvasCtx.fillRect(x, canvas.height/2 - barHeight/2, barWidth, barHeight);
        x += barWidth + 2;
    }
}

let jumlaSalio = 0;
function ongezaSalio(priceStr) {
    let priceNum = parseInt(priceStr.replace(/[^0-9]/g, ''));
    if(!isNaN(priceNum)) {
        jumlaSalio += priceNum;
        document.getElementById('salio-txt').innerText = `TZS ${jumlaSalio.toLocaleString()}`;
    }
}