// SUPPLIERS DATA WOTE 40 KAMILI WENYE JUMBE NDEFU ZA DUKA DIRECT
const suppliersData = [
  { id: 1, name: "@max_store", customer: "Halima", type: "Alibaba Supplier", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,500", rawAmount: 2500, timer: "02:45", msg: "Habari Halima, mzigo wako wa vifaa vya michezo na viatu ulioagiza kutoka Alibaba umewasilishwa salama katika duka letu kuu. Tafadhali fika mara moja ukiwa na namba yako ya risiti ili uweze kuchukua mzigo wako." },
  { id: 2, name: "@aggy electronics", customer: "Juma", type: "Temu Supplier", img: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,800", rawAmount: 1800, timer: "02:31", msg: "Habari Juma, Smartwatch yako uliyoagiza kutoka Temu imefika dukani kwetu na ipo tayari. Tafadhali thibitisha kama ukija utachukulia dukani au tukuletee mahali ulipo kupitia huduma yetu ya usafirishaji." },
  { id: 3, name: "@breeze fashion", customer: "Amina", type: "Amazon Supplier", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,200", rawAmount: 3200, timer: "01:50", msg: "Habari Amina, nguo na poda za urembo ulizoagiza kupitia Amazon zimeshawasili. Unaweza kufika dukani kwetu muda wowote kuanzia sasa kuchukua vifurushi vyako au utupie maelekezo ya pale unapotaka usafirishaji uelekezwe." },
  { id: 4, name: "@smart_tech_tz", customer: "Baraka", type: "AliExpress Supplier", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,500", rawAmount: 4500, timer: "03:10", msg: "Habari Baraka, kompyuta mpya pamoja na vifaa vyake kutoka Dubai vimeingia kikamilifu. Tunakuomba ufike ofisini kwetu na kitambulisho chako ili ukague na kupokea kifaa chako mapema leo." },
  { id: 5, name: "@dubai_cosmetics", customer: "Neema", type: "Dubai Wholesaler", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,200", rawAmount: 2200, timer: "02:15", msg: "Habari Neema, seti za vipodozi ulizotagiza za jumla kutoka Dubai zipo tayari. Tafadhali wasiliana nasi utupe maelekezo kama unazihitaji ziletwe sokoni kwako au unakuja kuzipokea hapa ofisini." },
  { id: 6, name: "@us_supplements", customer: "Sofia", type: "USA Pharmacy", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,000", rawAmount: 3000, timer: "01:55", msg: "Habari Sofia, mzigo wako wa virutubisho na dawa ulioagiza kutoka Marekani umeshawasili na kukaguliwa kikamilifu. Tafadhali fika dukani kwetu mapema au ututunzie anwani yako ili tukuletee mzigo wako bila kuchelewa." },
  { id: 7, name: "@swisstrade", customer: "Edward", type: "Swiss Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,900", rawAmount: 4900, timer: "04:00", msg: "Habari Edward, saa yako ya mkononi ya mfano wa Swiss original imewasili. Tumeshaiweka kwenye kifungashio salama na unaweza kufika kuichukua au kutupa maelekezo ya namba ya basi ya kukutumia." },
  { id: 8, name: "@londongadgets", customer: "Grace", type: "UK Supplier", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,800", rawAmount: 3800, timer: "02:50", msg: "Habari Grace, vifaa vyako vya muziki na headphones kutoka UK vipo tayari kwa ajili yako. Tafadhali thibitisha namba yako ya simu na mahali ulipo ili usafirishaji ufanyike mara moja." },
  { id: 9, name: "@turkey_styles", customer: "Kassim", type: "Istanbul Trader", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,900", rawAmount: 2900, timer: "02:20", msg: "Habari Kassim, suti na nguo zako za kiume ulizoagiza kutoka Turkey zimeshafika ghala letu la Msimbazi. Karibu ujipatie mzigo wako saa yoyote ya kazi kuanzia sasa." },
  { id: 10, name: "@korea_beauty", customer: "Zulfa", type: "Seoul Cosmetics", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,200", rawAmount: 4200, timer: "03:00", msg: "Habari Zulfa, sabuni na mafuta ya ngozi kutoka Korea ya Kusini yameshawasili ofisini kwetu. Tafadhali thibitisha mahali unapoishi ili tukuletee kifurushi chako ukiwa nyumbani." },
  { id: 11, name: "@nairobi_express", customer: "Rashidi", type: "Kenya Supplier", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,500", rawAmount: 1500, timer: "01:30", msg: "Habari Rashidi, mzigo wako kutoka Nairobi umewasili mpakani Namanga na ukaguzi umekamilika. Tafadhali wasiliana nasi uthibitishe gari la kukufikishia mzigo wako Dar es Salaam." },
  { id: 12, name: "@guangzhou_cargo", customer: "Bakari", type: "Cargo Agent", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,800", rawAmount: 4800, timer: "03:30", msg: "Habari Bakari, kontena yenye mashine zako kutoka China imeshawasili Bandari ya Dar es Salaam. Karibu kwenye ofisi zetu za clearing ulete nyaraka za kupokelea mzigo wako." },
  { id: 13, name: "@tokyo_cameras", customer: "Faraja", type: "Japan Supplier", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,500", rawAmount: 3500, timer: "02:10", msg: "Habari Faraja, kamera zako za studio na lenses ulesoagiza kutoka Japan ziko salama ofisini. Tafadhali fika uchukue risiti yako pamoja na vifaa vyako mapema." },
  { id: 14, name: "@italy_shoes", customer: "Dennis", type: "Rome Shoes", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,700", rawAmount: 2700, timer: "02:05", msg: "Habari Dennis, viatu vyako vya ngozi ya asili kutoka Rome zimeshawasili sokoni. Tunakukaribisha dukani kwetu ili ujaribu saizi na uchukue oda yako." },
  { id: 15, name: "@kampala_mart", customer: "Brenda", type: "Uganda Trader", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,200", rawAmount: 1200, timer: "01:20", msg: "Habari Brenda, mzigo wa nguo za vitenge kutoka Kampala Uganda upo njiani na utawasili leo jioni stendi kuu. Tafadhali jiandae kuupokea." },
  { id: 16, name: "@auto_spare_tz", customer: "Hassan", type: "German Spares", img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,900", rawAmount: 3900, timer: "02:40", msg: "Habari Hassan, spares ulizoagiza kwa ajili ya matengenezo ya gari kutoka Ujerumani zimeshawasili. Karibu gereji kwetu uchukue au tukuletee hadi saiti." },
  { id: 17, name: "@kids_world", customer: "Mariam", type: "Toys Supplier", img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,100", rawAmount: 2100, timer: "01:45", msg: "Habari Mariam, michezo na vifaa vya watoto ulivyoagiza kwa ajili ya duka lako vimefika salama. Karibu ututembelee ukae tayari kupokea mzigo wako." },
  { id: 18, name: "@sports_gear", customer: "Victor", type: "Nike Agent", img: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,800", rawAmount: 2800, timer: "02:25", msg: "Habari Victor, jezi za michezo na viatu vya mazoezi ulivyoagiza vimekamilisha ukaguzi wetu. Karibu ufike dukani uondoke na vifurushi vyako." },
  { id: 19, name: "@solar_power_tz", customer: "Joseph", type: "Solar Supplier", img: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,000", rawAmount: 4000, timer: "02:15", msg: "Habari Joseph, mtambo wako wa umeme wa jua (Solar panels) umeingia ghala kuu leo. Tafadhali tupigie au ufike ofisini kupanga usafirishaji na ufungaji." },
  { id: 20, name: "@perfume_palace", customer: "Catherine", type: "France Perfumes", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,100", rawAmount: 3100, timer: "02:00", msg: "Habari Catherine, marashi na perfume mpya uliyoagiza kutoka Ufaransa vipo tayari. Karibu ujipatie chupa zako katika duka letu la Kariakoo." },
  { id: 21, name: "@zanzibar_spices", customer: "Ali", type: "Zanzibar Exporter", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,600", rawAmount: 1600, timer: "01:40", msg: "Habari Ali, viungo safi vya chakula kutoka Zanzibar vimeshawasili bandarini. Tafadhali wasiliana na udereva wetu uletewe mzigo wako sokoni." },
  { id: 22, name: "@mwanza_fish_mart", customer: "Magreth", type: "Lake Supplier", img: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,400", rawAmount: 2400, timer: "02:10", msg: "Habari Magreth, mzigo mpya wa samaki wa Sato ulioagiza kutoka Mwanza umewasili stendi katika majokofu yetu. Karibu uchukue oda yako." },
  { id: 23, name: "@arusha_gemstones", customer: "Godfrey", type: "Minerals Agent", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,700", rawAmount: 4700, timer: "03:15", msg: "Habari Godfrey, vito vya thamani ulivyoagiza kutoka Arusha vimekamilika kukaguliwa. Unaweza kufika ofisi zetu za ulinzi kupokea namba ya kisanduku." },
  { id: 24, name: "@dodoma_wines", customer: "Rehema", type: "Local Vineyard", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,300", rawAmount: 2300, timer: "01:50", msg: "Habari Rehema, katoni za wine kutoka mashamba ya Dodoma ziko tayari kwa ajili ya duka lako. Tafadhali thibitisha gari la mizigo linalokuletea." },
  { id: 25, name: "@morogoro_farms", customer: "John", type: "Agri Trader", img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,900", rawAmount: 1900, timer: "02:00", msg: "Habari John, matunda na mazao mapya kutoka Morogoro yameshafika sokoni kwetu leo asubuhi. Karibu uchukue mzigo wako mapema yakiwa mapya." },
  { id: 26, name: "@mbeya_rice_center", customer: "Nuru", type: "Rice Wholesaler", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,600", rawAmount: 2600, timer: "02:20", msg: "Habari Nuru, viroba vya mchele safi wa Kyela Mbeya vimeshawasili ghala kuu la usambazaji. Fika uchukue risiti na uchukue oda yako." },
  { id: 27, name: "@tanga_orange_mart", customer: "Hamisi", type: "Tanga Fruits", img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,100", rawAmount: 1100, timer: "01:15", msg: "Habari Hamisi, chenza na machungwa matamu kutoka Tanga yamefika sokoni kikamilifu. Wasiliana nasi ili uletewe oda yako ya jumla." },
  { id: 28, name: "@kigoma_palm_oil", customer: "Fatuma", type: "Palm Oil Agent", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,300", rawAmount: 3300, timer: "02:30", msg: "Habari Fatuma, dumu za mawese safi kutoka Kigoma zipo tayari ofisini. Karibu uchukue mzigo wako mara moja kabla ghala halijafungwa." },
  { id: 29, name: "@tabora_honey", customer: "Saidi", type: "Natural Honey", img: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,000", rawAmount: 2000, timer: "01:45", msg: "Habari Saidi, asali ya nyuki wadogo kutoka Tabora imeshapimwa kwenye madumu madogo na ipo tayari. Karibu uchukue oda yako ya wiki." },
  { id: 30, name: "@iringa_timber", customer: "Peter", type: "Lumber Trader", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,100", rawAmount: 4100, timer: "03:00", msg: "Habari Peter, mbao bora za ujenzi kutoka Iringa zimeshaingia kwenye yard yetu. Karibu ukague na uruhusu usafirishaji kuelekea saiti kwako." },
  { id: 31, name: "@moshi_coffee_hub", customer: "Agatha", type: "Kilimanjaro Coffee", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,600", rawAmount: 3600, timer: "02:40", msg: "Habari Agatha, kahawa iliyosagwa kutoka mlimani Kilimanjaro Moshi imeshapakiwa vyema na iko tayari. Karibu ufike uchukue vifurushi vyako." },
  { id: 32, name: "@lindi_cashew", customer: "Charles", type: "Cashew Exporter", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,750", rawAmount: 2750, timer: "02:10", msg: "Habari Charles, korosho zilizobangulewa kutoka Lindi zipo kwenye mifuko na tayari kusafirishwa. Wasiliana nasi utupe anwani ya mwisho." },
  { id: 33, name: "@mtwara_port_goods", customer: "Veronica", type: "Southern Freight", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,950", rawAmount: 3950, timer: "02:55", msg: "Habari Veronica, mzigo uliotoka Mtwara kupitia meli umewasili bandarini. Fika ofisini na kitambulisho chako kuchukua nyaraka za ukombozi." },
  { id: 34, name: "@shinyanga_meat", customer: "Suleiman", type: "Livestock Supplier", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,300", rawAmount: 4300, timer: "03:10", msg: "Habari Suleiman, oda yako ya nyama iliyogandishwa vyema kutoka Shinyanga imewasili kwenye gari la baridi. Karibu upokee mzigo wako." },
  { id: 35, name: "@singida_sunflower", customer: "Zainabu", type: "Oil Millers", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,700", rawAmount: 1700, timer: "01:35", msg: "Habari Zainabu, mafuta safi ya alizeti kutoka Singida yameshawasili kwenye madumu. Wasiliana nasi uletewe nyumbani au dukani kwako." },
  { id: 36, name: "@sumbawanga_maize", customer: "Kelvin", type: "Grain Depot", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&auto=format&fit=crop&q=80", payout: "TZS 2,850", rawAmount: 2850, timer: "02:25", msg: "Habari Kelvin, viroba vya mahindi kavu kutoka Sumbawanga vimeingizwa kwenye ghala letu la nafaka. Karibu ufike kukagua oda yako." },
  { id: 37, name: "@songea_tobacco", customer: "Emanuel", type: "Ruvuma Exporters", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,400", rawAmount: 3400, timer: "02:45", msg: "Habari Emanuel, mzigo wa tumbaku kutoka Songea umekamilisha taratibu za vipimo. Wasiliana nasi uchukue hati ya kusafirishia." },
  { id: 38, name: "@musoma_dairy", customer: "Anna", type: "Mara Milk Depot", img: "https://images.unsplash.com/photo-1528750997573-59b89d66f4f7?w=100&auto=format&fit=crop&q=80", payout: "TZS 1,450", rawAmount: 1450, timer: "01:25", msg: "Habari Anna, maziwa fresh kutoka Musoma Mara yameshapatikana kwenye madumu ya baridi. Fika mapema yakiwa bado mapya." },
  { id: 39, name: "@mara_gold_gears", customer: "Jackson", type: "Mining Equipment", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=100&auto=format&fit=crop&q=80", payout: "TZS 4,600", rawAmount: 4600, timer: "03:20", msg: "Habari Jackson, vifaa na mitambo ya migodini kutoka Geita na Mara vipo tayari ghala la mizigo. Karibu uje na lori la kusafirishia." },
  { id: 40, name: "@bukoba_vanilla", customer: "Diana", type: "Kagera Vanilla", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80", payout: "TZS 3,700", rawAmount: 3700, timer: "02:50", msg: "Habari Diana, vanilla safi kutoka Bukoba Kagera imeshawasili na kupakiwa kikamilifu. Wasiliana nasi tukuletee kifurushi chako." }
];

const audioStore = {};
let currentBalance = 0;
let currentTodayEarned = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderSuppliers();
});

function renderSuppliers() {
  const container = document.getElementById('suppliersContainer');
  if (!container) return;

  suppliersData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'supplier-card';
    card.id = `card-${item.id}`;
    card.innerHTML = `
      <div class="supplier-top">
        <div class="supplier-info">
          <img src="${item.img}" alt="${item.name}" class="avatar-img" />
          <div>
            <div class="supplier-name">${item.name} <span class="blue-tick">✓</span></div>
            <div class="supplier-type">${item.type}</div>
          </div>
        </div>
        <div class="payout-badge">${item.payout}</div>
      </div>

      <div class="message-box">${item.msg}</div>

      <div class="action-section">
        <div class="rec-label">
          🎤 Record your voice response and send to <strong>${item.customer}</strong>
          <span class="timer" id="timer-${item.id}">${item.timer}</span>
        </div>
        
        <div class="action-row">
          <button class="btn-record" id="btn-rec-${item.id}" onclick="handleRecordClick(${item.id})">
            🎤 Record Voice
          </button>
          <button class="btn-play" id="btn-play-${item.id}" onclick="playAudio(${item.id})" title="Sikiliza Sauti">
            ▶
          </button>
        </div>

        <button class="btn-send" id="btn-send-${item.id}" onclick="sendResponse(${item.id}, '${item.customer}', ${item.rawAmount}, '${item.payout}')">
          ✈ Send Response to ${item.customer}
        </button>
      </div>

      <div class="supplier-footer">
        <span>Payment: <strong>${item.payout}</strong></span>
        <span>• Est. time: less than 2 min</span>
        <span class="verified-text">• Supplier Verified ✓</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// RECORDING LOGIC WITH WORKING AUDIO BLOB PLAYBACK
async function handleRecordClick(id) {
  const btnRec = document.getElementById(`btn-rec-${id}`);
  const timerSpan = document.getElementById(`timer-${id}`);
  
  if (!audioStore[id]) {
    audioStore[id] = { recording: false, mediaRecorder: null, chunks: [], audioObj: null, seconds: 0, timerInterval: null };
  }

  const state = audioStore[id];

  if (!state.recording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      state.mediaRecorder = new MediaRecorder(stream);
      state.chunks = [];

      state.mediaRecorder.ondataavailable = e => {
        if (e.data && e.data.size > 0) {
          state.chunks.push(e.data);
        }
      };

      state.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(state.chunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Hapa tunatengeneza Audio Player halisi kutoka kwenye sauti iliyorekodiwa
        state.audioObj = new Audio(audioUrl);

        const btnSend = document.getElementById(`btn-send-${id}`);
        btnSend.classList.add('ready');

        // Geuza rangi ya Play button kuonyesha kwamba ipo tayari kuchezwa
        const btnPlay = document.getElementById(`btn-play-${id}`);
        if (btnPlay) {
          btnPlay.style.borderColor = '#22c55e';
          btnPlay.style.color = '#22c55e';
        }
      };

      state.mediaRecorder.start();
      state.recording = true;

      btnRec.classList.add('recording');
      btnRec.innerHTML = `⏹ Stop Recording`;

      state.seconds = 0;
      state.timerInterval = setInterval(() => {
        state.seconds++;
        const mins = String(Math.floor(state.seconds / 60)).padStart(2, '0');
        const secs = String(state.seconds % 60).padStart(2, '0');
        timerSpan.textContent = `🔴 ${mins}:${secs}`;
      }, 1000);

    } catch (err) {
      alert("Tafadhali ruhusu Kinasa Sauti (Microphone) kwenye kivinjari chako ili kurekodi!");
    }
  } else {
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.stop();
      state.mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
    state.recording = false;
    clearInterval(state.timerInterval);

    btnRec.classList.remove('recording');
    btnRec.innerHTML = `✓ Sauti Imerekodiwa`;
    btnRec.style.backgroundColor = '#10b981';
  }
}

// PLAYBACK LOGIC - PLAYS ACTUAL RECORDED VOICE
function playAudio(id) {
  const state = audioStore[id];
  if (state && state.audioObj) {
    // Rejesha audio kuanzia mwanzo ikiwa ilishapigwa awali
    state.audioObj.currentTime = 0;
    state.audioObj.play().catch(err => {
      console.error("Audio playback error:", err);
      alert("Kuna shida kurejesha sauti, tafadhali jaribu kurekodi tena.");
    });
  } else {
    alert("Hujarekodi sauti bado! Bonyeza 'Record Voice' kwanza, ukimaliza kurekodi ndipo ubonyeze Play kuisikia sauti yako.");
  }
}

// SEND RESPONSE & DISABLE RECORDING AFTER COMPLETION
function sendResponse(id, customerName, amount, payoutText) {
  const btnSend = document.getElementById(`btn-send-${id}`);
  const btnRec = document.getElementById(`btn-rec-${id}`);
  const btnPlay = document.getElementById(`btn-play-${id}`);
  
  if (!btnSend.classList.contains('ready')) {
    alert(`Tafadhali rekodi sauti yako kwanza kabla ya kumtumia ${customerName}!`);
    return;
  }

  btnSend.disabled = true;
  btnSend.innerHTML = `<span class="spinner"></span> Inatuma kwa ${customerName}...`;

  setTimeout(() => {
    btnSend.style.backgroundColor = '#22c55e';
    btnSend.style.color = '#ffffff';
    btnSend.innerHTML = `✓ Confirmed Order (Imetumwa)`;

    btnRec.disabled = true;
    btnRec.classList.add('disabled-btn');
    btnRec.innerHTML = `🔒 Order Completed`;

    btnPlay.disabled = true;
    btnPlay.classList.add('disabled-btn');

    currentBalance += amount;
    currentTodayEarned += amount;
    document.getElementById('totalBalance').textContent = `TZS ${currentBalance.toLocaleString()}`;
    document.getElementById('todayEarned').textContent = `+ TZS ${currentTodayEarned.toLocaleString()} LEO`;

    showSuccessModal(payoutText);

  }, 2500);
}

// WHATSAPP OPTIONS MODAL LOGIC
function openWhatsappModal() {
  document.getElementById('whatsappOptionsModal').style.display = 'flex';
}

function closeWhatsappModal() {
  document.getElementById('whatsappOptionsModal').style.display = 'none';
}

// SUCCESS MODAL LOGIC
function showSuccessModal(amountText) {
  document.getElementById('modalRewardAmount').textContent = `+ ${amountText}`;
  document.getElementById('successPaymentModal').style.display = 'flex';
}

function closeSuccessModal() {
  document.getElementById('successPaymentModal').style.display = 'none';
}

// WITHDRAW MODAL LOGIC
function openWithdrawModal() {
  document.getElementById('withdrawModal').style.display = 'flex';
  document.getElementById('withdrawForm').style.display = 'block';
  document.getElementById('rtoErrorMessage').style.display = 'none';
}

function closeWithdrawModal() {
  document.getElementById('withdrawModal').style.display = 'none';
}

function processWithdrawal() {
  const phone = document.getElementById('phoneNumber').value;
  if (!phone) {
    alert("Tafadhali ingiza namba ya simu!");
    return;
  }

  const spinner = document.getElementById('withdrawSpinner');
  const text = document.getElementById('withdrawText');
  const btn = document.getElementById('btnSubmitWithdraw');

  spinner.style.display = 'inline-block';
  text.textContent = "Inahakiki...";
  btn.disabled = false;

  setTimeout(() => {
    spinner.style.display = 'none';
    text.textContent = "Thibitisha Kutoa Pesa";
    btn.disabled = false;
    
    document.getElementById('withdrawForm').style.display = 'none';
    document.getElementById('rtoErrorMessage').style.display = 'block';
  }, 2500);
}
// PWA INSTALL EXPERIENCE
let deferredInstallPrompt = null;
let installNoticeTimer = null;
let installNoticeVisible = false;
let installHideTimer = null;

function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function showInstallNotice() {
  const notice = document.getElementById('installNotice');
  if (!notice || isAppInstalled() || installNoticeVisible) return;

  clearTimeout(installHideTimer);
  notice.classList.remove('show');
  // Force a clean animation restart.
  void notice.offsetWidth;
  notice.classList.add('show');
  installNoticeVisible = true;

  // Hard fallback: never allow the notice to remain visible.
  installHideTimer = setTimeout(() => {
    notice.classList.remove('show');
    installNoticeVisible = false;
  }, 4200);
}

function hideInstallNotice() {
  const notice = document.getElementById('installNotice');
  if (!notice) return;
  clearTimeout(installHideTimer);
  notice.classList.remove('show');
  installNoticeVisible = false;
}

function showInstallToast(message) {
  const toast = document.getElementById('installToast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

async function installCustomerOrderApp() {
  if (isAppInstalled()) return;

  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    try {
      const result = await deferredInstallPrompt.userChoice;
      if (result.outcome === 'accepted') hideInstallNotice();
    } catch (_) {}
    deferredInstallPrompt = null;
    return;
  }

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (isIOS) {
    showInstallToast('Kwa iPhone/iPad, tumia Share → Add to Home Screen.');
    return;
  }

  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    showInstallToast('Install inahitaji website ifunguke kupitia HTTPS.');
    return;
  }

  showInstallToast('Fungua kupitia Chrome/Edge ili Install itokee.');
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  hideInstallNotice();
  if (installNoticeTimer) clearInterval(installNoticeTimer);
});

document.addEventListener('DOMContentLoaded', () => {
  const noticeBtn = document.getElementById('installNoticeBtn');

  noticeBtn?.addEventListener('click', installCustomerOrderApp);

  if (!isAppInstalled()) {
    // Show after a short delay, then repeat every 10 seconds.
    setTimeout(() => showInstallNotice(), 2500);
    installNoticeTimer = setInterval(() => {
      if (!installNoticeVisible && !isAppInstalled()) showInstallNotice();
    }, 10000);
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js?v=20260902-5').catch(() => {});
  }
});
