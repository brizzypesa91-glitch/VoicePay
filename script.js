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
            
            // Tumia format inayokubalika na browser husika (Safari/Chrome/Android)
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

            // Rekodi kwa vipindi vya mswaki wa millisecond 100 ili data isipotee
            activeMediaRecorder.start(100);
            task.state = TASK_STATES.RECORDING;

            mainBtn.innerHTML = `⏹️ Stop Recording`;
            mainBtn.className = 'btn btn-recording';
            visualizerBox.style.display = 'flex';

            setupVisualizer(activeStream, canvas, canvasCtx);

        } catch (err) {
            alert('Tafadhali ruhusu microphone kwenye browser yako ili kurekodi sauti.');
            console.error("Microphone error: ", err);
        }

    } else if (task.state === TASK_STATES.RECORDING) {
        // --- HATUA YA 2: SIMAMISHA KUREKODI & TAYARISHA AUDI0 ---
        if (activeMediaRecorder && activeMediaRecorder.state !== 'inactive') {
            
            activeMediaRecorder.onstop = () => {
                // Zima microphone stream
                if (activeStream) {
                    activeStream.getTracks().forEach(track => track.stop());
                }

                // Zima waves visualizer
                if (animationId) cancelAnimationFrame(animationId);
                visualizerBox.style.display = 'none';

                // Tengeneza blob halisi ya sauti
                const mimeType = activeMediaRecorder.mimeType || 'audio/webm';
                task.audioBlob = new Blob(task.chunks, { type: mimeType });
                
                if (task.audioUrl) URL.revokeObjectURL(task.audioUrl);
                task.audioUrl = URL.createObjectURL(task.audioBlob);
                
                task.state = TASK_STATES.REVIEW;

                // Badilisha muonekano wa Button
                mainBtn.innerHTML = `▶️ Play Audio`;
                mainBtn.className = 'btn btn-review';

                // Wezesha button ya Kutuma (Send)
                const sendBtn = document.getElementById(`sendBtn-${taskId}`);
                sendBtn.classList.add('ready-to-send');
            };

            activeMediaRecorder.stop();
        }

    } else if (task.state === TASK_STATES.REVIEW) {
        // --- HATUA YA 3: CHEZA SAUTI (PLAYBACK) ---
        if (task.audioUrl) {
            audioPlayback.src = task.audioUrl;
            audioPlayback.play().catch(e => {
                console.error("Error playing audio:", e);
                alert("Kuna shida kwenye kucheza sauti. Jaribu kurekodi tena.");
            });

            // Athari ya kuonyesha inacheza
            mainBtn.innerHTML = `🔊 Playing...`;
            audioPlayback.onended = () => {
                mainBtn.innerHTML = `▶️ Replay Audio`;
            };
        }
    }
}

function handleSendAction(taskId, mteja, priceStr) {
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
        
        // Button ya juu: Recorded/Verified Status (Kijani Safi ya Mint)
        mainBtn.innerHTML = `✓ Voice Recorded`;
        mainBtn.className = 'btn btn-recorded-complete';
        
        // Button ya chini: Sent Status (Kijani ya Neon/Emerald)
        sendBtn.innerHTML = `✓ Sent to ${mteja}`;
        sendBtn.className = 'btn btn-sent-complete';

        ongezaSalio(priceStr);
    }, 2000);
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