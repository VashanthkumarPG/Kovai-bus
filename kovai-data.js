/* Kovai Bus — network data + journey planner.
   Route numbers and endpoints are from CCMC's published town-bus list.
   Intermediate stop sequences are corridor-plausible reconstructions. */
(function () {
  const S = (id, name, ta, lat, lng) => ({ id, name, ta, lat, lng });

  const stops = [
    S('gandhipuram', 'Gandhipuram Bus Stand', 'காந்திபுரம்', 11.0168, 76.9666),
    S('townhall', 'Town Hall', 'டவுன் ஹால்', 10.9975, 76.962),
    S('ukkadam', 'Ukkadam Bus Stand', 'உக்கடம்', 10.9925, 76.9575),
    S('railway', 'Coimbatore Junction', 'ரயில் நிலையம்', 10.9977, 76.9678),
    S('gandhipark', 'Gandhi Park', 'காந்தி பார்க்', 11.008, 76.9622),
    S('sivananda', 'Sivananda Colony', 'சிவானந்தா காலனி', 11.0182, 76.96),
    S('lakshmimills', 'Lakshmi Mills', 'லக்ஷ்மி மில்ஸ்', 11.009, 76.976),
    S('puliakulam', 'Puliakulam', 'புளியகுளம்', 10.999, 76.977),
    S('ramanathapuram', 'Ramanathapuram', 'ராமநாதபுரம்', 10.9932, 76.9884),
    S('sowripalayam', 'Sowripalayam', 'சௌரிபாளையம்', 10.9948, 77.0),
    S('uppilipalayam', 'Uppilipalayam', 'உப்பிலிபாளையம்', 10.999, 77.012),
    S('esi', 'ESI Hospital', 'ஈ.எஸ்.ஐ மருத்துவமனை', 11.0002, 77.0202),
    S('singanallur', 'Singanallur Bus Stand', 'சிங்காநல்லூர்', 11.0027, 77.0295),
    S('ondipudur', 'Ondipudur', 'ஒண்டிபுதூர்', 10.9873, 77.049),
    S('irugur', 'Irugur', 'இருகூர்', 10.9932, 77.062),
    S('neelambur', 'Neelambur', 'நீலம்பூர்', 11.033, 77.074),
    S('kannampalayam', 'Kannampalayam', 'கண்ணம்பாளையம்', 11.0, 77.09),
    S('karumathampatti', 'Karumathampatti', 'கருமத்தம்பட்டி', 11.07, 77.13),
    S('somanur', 'Somanur', 'சோமனூர்', 11.07, 77.16),
    S('peelamedu', 'Peelamedu', 'பீளமேடு', 11.0272, 77.005),
    S('hopecollege', 'Hope College', 'ஹோப் காலேஜ்', 11.0245, 77.018),
    S('airport', 'Airport', 'விமான நிலையம்', 11.0296, 77.0434),
    S('chinniampalayam', 'Chinniampalayam', 'சின்னியம்பாளையம்', 11.031, 77.058),
    S('kalapatti', 'Kalapatti', 'களப்பட்டி', 11.062, 77.027),
    S('sitra', 'SITRA', 'சித்ரா', 11.0448, 77.0058),
    S('ganapathy', 'Ganapathy', 'கணபதி', 11.0432, 76.993),
    S('chinnavedampatti', 'Chinnavedampatti', 'சின்ன வேடம்பட்டி', 11.067, 76.993),
    S('saravanampatti', 'Saravanampatti', 'சரவணம்பட்டி', 11.079, 77.0),
    S('keeranatham', 'Keeranatham', 'கீரணத்தம்', 11.1, 77.01),
    S('annur', 'Annur', 'அன்னூர்', 11.234, 77.106),
    S('nggo', 'NGGO Colony', 'என்.ஜி.ஜி.ஓ காலனி', 11.064, 76.972),
    S('saibaba', 'Saibaba Colony', 'சாய்பாபா காலனி', 11.029, 76.9483),
    S('thudiyalur', 'Thudiyalur', 'துடியலூர்', 11.08, 76.944),
    S('pnpalayam', 'Periyanaickenpalayam', 'பெரியநாயக்கன்பாளையம்', 11.115, 76.935),
    S('karamadai', 'Karamadai', 'கரமடை', 11.24, 76.96),
    S('tvsnagar', 'TVS Nagar', 'டி.வி.எஸ் நகர்', 11.05, 76.928),
    S('velandipalayam', 'Velandipalayam', 'வேலாண்டிபாளையம்', 11.025, 76.937),
    S('presscolony', 'Press Colony', 'பிரஸ் காலனி', 11.018, 76.94),
    S('telungupalayam', 'Telungupalayam', 'தெலுங்குபாளையம்', 11.01, 76.95),
    S('vadavalli', 'Vadavalli', 'வடவள்ளி', 11.0245, 76.8983),
    S('maruthamalai', 'Maruthamalai', 'மருதமலை', 11.043, 76.8615),
    S('thondamuthur', 'Thondamuthur', 'தொண்டாமுத்தூர்', 10.99, 76.83),
    S('perur', 'Perur', 'பேரூர்', 10.976, 76.887),
    S('edayarpalayam', 'Edayarpalayam', 'இடையர்பாளையம்', 11.01, 76.92),
    S('kanuvai', 'Kanuvai', 'கனுவாய்', 11.06, 76.9),
    S('thadagam', 'Thadagam', 'தடாகம்', 11.078, 76.88),
    S('anaikatti', 'Anaikatti', 'ஆனைக்கட்டி', 11.14, 76.77),
    S('kuniamuthur', 'Kuniamuthur', 'குனியமுத்தூர்', 10.964, 76.943),
    S('sundarapuram', 'Sundarapuram', 'சுந்தராபுரம்', 10.954, 76.95),
    S('eachanari', 'Eachanari', 'ஈச்சனாரி', 10.925, 76.97),
    S('madukkarai', 'Madukkarai', 'மதுக்கரை', 10.908, 76.96),
    S('podanur', 'Podanur', 'போத்தனூர்', 10.97, 76.96),
    S('selvapuram', 'Selvapuram', 'செல்வபுரம்', 10.982, 76.937),
    S('kovaipudur', 'Kovaipudur', 'கோவைப்புதூர்', 10.927, 76.913),
    S('kurichi', 'Kurichi', 'குறிச்சி', 10.945, 76.972),
    S('chettipalayam', 'Chettipalayam', 'செட்டிபாளையம்', 10.92, 77.0),
    S('kinathukadavu', 'Kinathukadavu', 'கிணத்துக்கடவு', 10.783, 77.013),
    S('vellalore', 'Vellalore', 'வெள்ளலூர்', 10.954, 77.029),
    S('avarampalayam', 'Avarampalayam', 'ஆவாரம்பாளையம்', 11.029, 76.976),
    S('kmch', 'Kovai Medical Center', 'கோவை மருத்துவ மையம்', 11.0475, 76.9885),
    S('nanjundapuram', 'Nanjundapuram', 'நஞ்சுண்டாபுரம்', 10.98, 76.976),
    S('krishnammal', 'Krishnammal College', 'கிருஷ்ணம்மாள் கல்லூரி', 11.0, 76.988),
    S('polytechnic', 'Govt. Polytechnic', 'அரசு பாலிடெக்னிக்', 11.035, 76.993),
    S('flowermarket', 'Flower Market', 'மலர் சந்தை', 10.995, 76.959),
    S('karunya', 'Karunya Institute', 'கருணயா', 10.936, 76.744),
  ];

  const byId = {};
  stops.forEach((s) => { byId[s.id] = s; });

  /* Landmarks that are NOT bus stops — the case the planner exists for. */
  const places = [
    ['Codissia Trade Fair Complex', 'கொடிசியா', 11.0246, 77.0193, 'venue'],
    ['PSG College of Technology', 'பி.எஸ்.ஜி தொழில்நுட்பக் கல்லூரி', 11.0243, 77.0026, 'college'],
    ['PSG Hospitals', 'பி.எஸ்.ஜி மருத்துவமனை', 11.0245, 77.0055, 'hospital'],
    ['Brookefields Mall', 'ப்ரூக்பீல்ட்ஸ்', 10.9973, 76.9614, 'mall'],
    ['Fun Republic Mall', 'ஃபன் ரிபப்ளிக்', 11.0193, 76.97, 'mall'],
    ['Prozone Mall', 'ப்ரோசோன் மால்', 11.0447, 77.0021, 'mall'],
    ['Race Course', 'ரேஸ் கோர்ஸ்', 10.9958, 76.9704, 'park'],
    ['VOC Park & Zoo', 'வ.உ.சி பூங்கா', 10.9995, 76.9646, 'park'],
    ['Coimbatore Medical College Hospital', 'கோவை மருத்துவக் கல்லூரி', 11.018, 76.949, 'hospital'],
    ['Sri Ramakrishna Hospital', 'ஸ்ரீ ராமகிருஷ்ணா மருத்துவமனை', 11.011, 76.952, 'hospital'],
    ['Ganga Hospital', 'கங்கா மருத்துவமனை', 11.008, 76.977, 'hospital'],
    ['Tidel Park Coimbatore', 'டைடல் பார்க்', 11.074, 77.002, 'office'],
    ['Kumaraguru College of Technology', 'குமரகுரு கல்லூரி', 11.077, 76.996, 'college'],
    ['Coimbatore Institute of Technology', 'சி.ஐ.டி', 11.025, 77.002, 'college'],
    ['Bharathiar University', 'பாரதியார் பல்கலைக்கழகம்', 11.0432, 76.8807, 'college'],
    ['Hindusthan College', 'ஹிந்துஸ்தான் கல்லூரி', 11.073, 77.029, 'college'],
    ['Karpagam University', 'கற்பகம் பல்கலைக்கழகம்', 10.933, 76.858, 'college'],
    ['Isha Yoga Center', 'ஈஷா யோகா மையம்', 10.967, 76.736, 'venue'],
    ['Kovai Kondattam', 'கோவை கொண்டாட்டம்', 10.906, 76.902, 'venue'],
    ['Marudhamalai Temple', 'மருதமலை கோயில்', 11.0455, 76.8598, 'temple'],
    ['Perur Pateeswarar Temple', 'பேரூர் கோயில்', 10.9752, 76.8848, 'temple'],
    ['Sulur Air Force Station', 'சூலூர் விமானப்படை', 11.023, 77.13, 'office'],
    ['Kurichi Housing Unit', 'குறிச்சி வீட்டுவசதி', 10.943, 76.976, 'area'],
    ['Amrita Hospital Ettimadai', 'அமிர்தா', 10.902, 76.902, 'hospital'],
  ].map(([name, ta, lat, lng, kind]) => ({ id: 'p_' + name.toLowerCase().replace(/[^a-z]+/g, '_'), name, ta, lat, lng, kind, place: true }));

  /* Searchable index: every stop is also a place you can pick. */
  const searchIndex = stops
    .map((s) => ({ id: s.id, name: s.name, ta: s.ta, lat: s.lat, lng: s.lng, kind: 'stop', isStop: true }))
    .concat(places);

  /* ── Routes: real CCMC numbers on plausible corridors ───────────────── */
  const R = (no, from, to, ids, headway, tracked) => ({ no, from, to, ids, headway, tracked });
  const routes = [
    R('1', 'Maruthamalai', 'Avarampalayam', ['maruthamalai', 'vadavalli', 'edayarpalayam', 'telungupalayam', 'sivananda', 'gandhipuram', 'avarampalayam'], 14, true),
    R('1D', 'Ondipudur', 'Maruthamalai', ['ondipudur', 'singanallur', 'uppilipalayam', 'peelamedu', 'lakshmimills', 'gandhipuram', 'sivananda', 'velandipalayam', 'vadavalli', 'maruthamalai'], 11, true),
    R('1A', 'Ondipudur', 'Vadavalli', ['ondipudur', 'singanallur', 'uppilipalayam', 'lakshmimills', 'gandhipuram', 'sivananda', 'telungupalayam', 'vadavalli'], 16, false),
    R('70', 'Gandhipuram', 'Maruthamalai', ['gandhipuram', 'sivananda', 'velandipalayam', 'vadavalli', 'maruthamalai'], 9, true),
    R('2', 'Perur', 'Govt. Polytechnic', ['perur', 'edayarpalayam', 'presscolony', 'telungupalayam', 'townhall', 'gandhipuram', 'ganapathy', 'polytechnic'], 18, false),
    R('3', 'Ganapathy', 'Madukkarai', ['ganapathy', 'gandhipuram', 'townhall', 'ukkadam', 'kuniamuthur', 'sundarapuram', 'eachanari', 'madukkarai'], 15, true),
    R('4', 'Thudiyalur', 'Podanur', ['thudiyalur', 'nggo', 'saibaba', 'gandhipuram', 'townhall', 'ukkadam', 'podanur'], 13, true),
    R('4F', 'Ondipudur', 'Thudiyalur', ['ondipudur', 'singanallur', 'peelamedu', 'sitra', 'ganapathy', 'nggo', 'thudiyalur'], 17, false),
    R('10', 'Saibaba Colony', 'Chinniampalayam', ['saibaba', 'gandhipuram', 'lakshmimills', 'peelamedu', 'hopecollege', 'chinniampalayam'], 15, true),
    R('12C', 'Eachanari', 'Govt. Polytechnic', ['eachanari', 'sundarapuram', 'kuniamuthur', 'ukkadam', 'townhall', 'gandhipuram', 'ganapathy', 'polytechnic'], 20, false),
    R('16', 'Town Hall', 'Airport', ['townhall', 'gandhipark', 'gandhipuram', 'lakshmimills', 'peelamedu', 'hopecollege', 'airport'], 20, true),
    R('20', 'Airport', 'TVS Nagar', ['airport', 'hopecollege', 'peelamedu', 'lakshmimills', 'gandhipuram', 'saibaba', 'tvsnagar'], 22, false),
    R('22', 'Sowripalayam', 'Kovai Medical Center', ['sowripalayam', 'uppilipalayam', 'peelamedu', 'sitra', 'kmch'], 24, false),
    R('24', 'Ukkadam', 'Kalapatti', ['ukkadam', 'townhall', 'gandhipuram', 'ganapathy', 'sitra', 'kalapatti'], 18, true),
    R('30', 'Ukkadam', 'Kannampalayam', ['ukkadam', 'townhall', 'gandhipuram', 'lakshmimills', 'peelamedu', 'hopecollege', 'irugur', 'neelambur', 'kannampalayam'], 25, false),
    R('34', 'Ramanathapuram', 'Thadagam', ['ramanathapuram', 'puliakulam', 'gandhipuram', 'velandipalayam', 'kanuvai', 'thadagam'], 21, false),
    R('45C', 'Gandhipuram', 'Annur', ['gandhipuram', 'ganapathy', 'sitra', 'saravanampatti', 'keeranatham', 'annur'], 28, true),
    R('55', 'Gandhipuram', 'Vellalore', ['gandhipuram', 'puliakulam', 'sowripalayam', 'uppilipalayam', 'vellalore'], 19, false),
    R('59', 'Gandhipuram', 'Karunya Institute', ['gandhipuram', 'sivananda', 'velandipalayam', 'vadavalli', 'thondamuthur', 'karunya'], 30, false),
    R('63', 'Selvapuram', 'Keeranatham', ['selvapuram', 'ukkadam', 'townhall', 'gandhipuram', 'ganapathy', 'sitra', 'saravanampatti', 'keeranatham'], 16, true),
    R('65', 'Gandhipuram', 'Kannampalayam', ['gandhipuram', 'lakshmimills', 'peelamedu', 'hopecollege', 'irugur', 'kannampalayam'], 26, false),
    R('76', 'Ukkadam', 'Chinnavedampatti', ['ukkadam', 'townhall', 'gandhipuram', 'ganapathy', 'chinnavedampatti'], 17, true),
    R('91', 'Kovaipudur', 'Saibaba Colony', ['kovaipudur', 'sundarapuram', 'kuniamuthur', 'ukkadam', 'townhall', 'gandhipuram', 'saibaba'], 15, true),
    R('94', 'Gandhipuram', 'Periyanaickenpalayam', ['gandhipuram', 'saibaba', 'nggo', 'thudiyalur', 'pnpalayam'], 12, true),
    R('95', 'Gandhipuram', 'Singanallur', ['gandhipuram', 'lakshmimills', 'puliakulam', 'sowripalayam', 'uppilipalayam', 'singanallur'], 10, true),
    R('102A', 'Gandhipuram', 'Karamadai', ['gandhipuram', 'saibaba', 'nggo', 'thudiyalur', 'pnpalayam', 'karamadai'], 30, false),
    R('109', 'Ondipudur', 'Saibaba Colony', ['ondipudur', 'singanallur', 'peelamedu', 'lakshmimills', 'gandhipuram', 'saibaba'], 18, true),
    R('S15', 'Singanallur', 'Maruthamalai', ['singanallur', 'uppilipalayam', 'peelamedu', 'lakshmimills', 'gandhipuram', 'sivananda', 'velandipalayam', 'vadavalli', 'maruthamalai'], 20, true),
    R('S13', 'ESI Hospital', 'Maruthamalai', ['esi', 'uppilipalayam', 'peelamedu', 'gandhipuram', 'sivananda', 'velandipalayam', 'vadavalli', 'maruthamalai'], 24, false),
    R('S25', 'Kovaipudur', 'Singanallur', ['kovaipudur', 'sundarapuram', 'kuniamuthur', 'ukkadam', 'townhall', 'gandhipuram', 'lakshmimills', 'uppilipalayam', 'singanallur'], 22, false),
    R('S29', 'Thudiyalur', 'Singanallur', ['thudiyalur', 'nggo', 'ganapathy', 'sitra', 'peelamedu', 'uppilipalayam', 'singanallur'], 21, true),
    R('8', 'Chettipalayam', 'Singanallur', ['chettipalayam', 'vellalore', 'uppilipalayam', 'singanallur'], 27, false),
    R('11', 'Railway Station', 'Kanuvai', ['railway', 'townhall', 'gandhipuram', 'velandipalayam', 'kanuvai'], 23, false),
    R('27', 'Railway Station', 'Press Colony', ['railway', 'townhall', 'gandhipark', 'gandhipuram', 'sivananda', 'presscolony'], 19, false),
    R('33', 'Railway Station', 'Kinathukadavu', ['railway', 'ukkadam', 'kurichi', 'kuniamuthur', 'sundarapuram', 'eachanari', 'chettipalayam', 'kinathukadavu'], 26, false),
    R('44', 'Town Hall', 'Sowripalayam', ['townhall', 'gandhipark', 'gandhipuram', 'puliakulam', 'ramanathapuram', 'sowripalayam'], 18, false),
    R('90A', 'Ukkadam', 'Somanur', ['ukkadam', 'townhall', 'gandhipuram', 'lakshmimills', 'hopecollege', 'irugur', 'karumathampatti', 'somanur'], 32, false),
    R('19A', 'Saibaba Colony', 'Vellalore', ['saibaba', 'gandhipuram', 'puliakulam', 'nanjundapuram', 'kurichi', 'vellalore'], 25, false),
    R('78A', 'Gandhipuram', 'Anaikatti', ['gandhipuram', 'velandipalayam', 'kanuvai', 'thadagam', 'anaikatti'], 35, false),
    R('9', 'Sundakamuthur', 'Krishnammal College', ['sundarapuram', 'kuniamuthur', 'ukkadam', 'flowermarket', 'townhall', 'krishnammal'], 24, false),
    R('20B', 'SIHS Colony', 'Saibaba Colony', ['polytechnic', 'ganapathy', 'gandhipuram', 'saibaba'], 20, false),
    R('50', 'Flower Market', 'Kannamanaickenur', ['flowermarket', 'ukkadam', 'townhall', 'gandhipark', 'gandhipuram'], 16, false),
    R('92', 'Maruthamalai', 'Cheranpalayam', ['maruthamalai', 'vadavalli', 'velandipalayam', 'saibaba', 'nggo', 'chinnavedampatti'], 29, false),
    R('S8', 'PSG Arts College', 'Perur', ['peelamedu', 'lakshmimills', 'gandhipuram', 'townhall', 'presscolony', 'edayarpalayam', 'perur'], 26, false),
  ];

  routes.forEach((r) => { r.ids = r.ids.filter((id) => byId[id]); });

  const stopRoutes = {};
  routes.forEach((r) => r.ids.forEach((id) => { (stopRoutes[id] = stopRoutes[id] || []).push(r); }));

  /* ── Geometry ───────────────────────────────────────────────────────── */
  const RAD = Math.PI / 180;
  function km(a, b) {
    const dLat = (b.lat - a.lat) * RAD;
    const dLng = (b.lng - a.lng) * RAD;
    const m = Math.cos(((a.lat + b.lat) / 2) * RAD);
    return 6371 * Math.sqrt(dLat * dLat + (dLng * m) * (dLng * m));
  }
  const WALK_MIN_PER_KM = 13.5;
  const RIDE_MIN_PER_KM = 3.0;
  const DWELL = 0.5;
  const walkMin = (d) => Math.max(1, Math.round(d * WALK_MIN_PER_KM));
  const meters = (d) => Math.round(d * 1000 / 10) * 10;

  function fareFor(d) {
    if (d <= 2) return 6;
    if (d <= 5) return 9;
    if (d <= 10) return 13;
    if (d <= 16) return 18;
    if (d <= 26) return 25;
    return 32;
  }

  function nearStops(pt, maxKm, limit) {
    return stops
      .filter((s) => stopRoutes[s.id])
      .map((s) => ({ stop: s, d: km(pt, s) }))
      .filter((x) => x.d <= maxKm)
      .sort((a, b) => a.d - b.d)
      .slice(0, limit);
  }

  function segStats(r, i, j) {
    let d = 0;
    for (let k = i; k < j; k++) d += km(byId[r.ids[k]], byId[r.ids[k + 1]]);
    return { km: d, min: Math.round(d * RIDE_MIN_PER_KM + (j - i) * DWELL) };
  }

  /* deterministic jitter so "live" values are stable per bus per minute */
  function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967295; }

  function liveFor(r, boardStop, minuteSeed) {
    const seed = hash(r.no + boardStop + minuteSeed);
    const occ = ['Seats free', 'Filling up', 'Standing only'][Math.floor(seed * 3)];
    return {
      tracked: r.tracked,
      eta: r.tracked ? 1 + Math.floor(seed * Math.min(r.headway, 12)) : Math.round(r.headway / 2),
      plate: 'TN 38 ' + ['N', 'AB', 'BZ', 'CD'][Math.floor(seed * 4)] + ' ' + (1000 + Math.floor(seed * 8999)),
      occupancy: occ,
      occLevel: ['low', 'mid', 'high'][Math.floor(seed * 3)],
      stopsAway: r.tracked ? 1 + Math.floor(seed * 6) : null,
    };
  }

  function rideLeg(r, i, j, minuteSeed) {
    const st = segStats(r, i, j);
    return {
      type: 'ride', bus: r.no, route: r, headway: r.headway,
      board: byId[r.ids[i]], alight: byId[r.ids[j]],
      via: r.ids.slice(i, j + 1),
      min: st.min, km: st.km, fare: fareFor(st.km),
      nStops: j - i,
      live: liveFor(r, r.ids[i], minuteSeed),
    };
  }

  function walkLeg(from, to, atTransfer) {
    const d = km(from, to);
    return { type: 'walk', from, to, km: d, meters: meters(d), min: walkMin(d), atTransfer: !!atTransfer };
  }

  function finish(legs, origin, dest, minuteSeed) {
    const rides = legs.filter((l) => l.type === 'ride');
    const walk = legs.filter((l) => l.type === 'walk').reduce((a, l) => a + l.min, 0);
    const ride = rides.reduce((a, l) => a + l.min, 0);
    const wait = rides.reduce((a, l, idx) => a + (idx === 0 ? l.live.eta : Math.round(l.headway / 2) + 1), 0);
    return {
      id: rides.map((l) => l.bus).join('-') + '@' + (rides[0] ? rides[0].board.id : '') + '>' + (rides[rides.length - 1] ? rides[rides.length - 1].alight.id : ''),
      legs, origin, dest,
      buses: rides.map((l) => l.bus),
      transfers: rides.length - 1,
      walkMin: walk, rideMin: ride, waitMin: wait,
      walkMeters: legs.filter((l) => l.type === 'walk').reduce((a, l) => a + l.meters, 0),
      totalMin: walk + ride + wait,
      fare: rides.reduce((a, l) => a + l.fare, 0),
      departIn: rides[0] ? rides[0].live.eta : 0,
      tracked: rides.some((l) => l.live.tracked),
      km: rides.reduce((a, l) => a + l.km, 0),
    };
  }

  function plan(origin, dest, minuteSeed, maxWalkKm) {
    const mw = maxWalkKm || 1.7;
    const ocs = nearStops(origin, origin.isStop ? 0.05 : mw, 6);
    const dcs = nearStops(dest, dest.isStop ? 0.05 : mw, 6);
    if (!ocs.length || !dcs.length) return [];
    const dcMap = {}; dcs.forEach((x) => { dcMap[x.stop.id] = x; });
    const out = [];
    const seen = new Set();
    const push = (legs) => {
      const j = finish(legs, origin, dest, minuteSeed);
      if (seen.has(j.id)) return;
      seen.add(j.id); out.push(j);
    };

    // direct
    ocs.forEach((oc) => {
      (stopRoutes[oc.stop.id] || []).forEach((r) => {
        const i = r.ids.indexOf(oc.stop.id);
        for (let j = i + 1; j < r.ids.length; j++) {
          const dc = dcMap[r.ids[j]];
          if (!dc) continue;
          push([walkLeg(origin, oc.stop), rideLeg(r, i, j, minuteSeed), walkLeg(dc.stop, dest)]);
          break;
        }
      });
    });

    // one transfer
    ocs.slice(0, 4).forEach((oc) => {
      (stopRoutes[oc.stop.id] || []).forEach((r1) => {
        const i = r1.ids.indexOf(oc.stop.id);
        for (let m = i + 1; m < r1.ids.length; m++) {
          const midId = r1.ids[m];
          (stopRoutes[midId] || []).forEach((r2) => {
            if (r2 === r1) return;
            const k = r2.ids.indexOf(midId);
            for (let j = k + 1; j < r2.ids.length; j++) {
              const dc = dcMap[r2.ids[j]];
              if (!dc) continue;
              push([walkLeg(origin, oc.stop), rideLeg(r1, i, m, minuteSeed), rideLeg(r2, k, j, minuteSeed), walkLeg(dc.stop, dest)]);
              break;
            }
          });
        }
      });
    });

    // two transfers, only if the network is thin here
    if (out.length < 2) {
      ocs.slice(0, 3).forEach((oc) => {
        (stopRoutes[oc.stop.id] || []).forEach((r1) => {
          const i = r1.ids.indexOf(oc.stop.id);
          for (let m = i + 1; m < r1.ids.length; m++) {
            (stopRoutes[r1.ids[m]] || []).forEach((r2) => {
              if (r2 === r1) return;
              const k = r2.ids.indexOf(r1.ids[m]);
              for (let n = k + 1; n < r2.ids.length; n++) {
                (stopRoutes[r2.ids[n]] || []).forEach((r3) => {
                  if (r3 === r1 || r3 === r2) return;
                  const p = r3.ids.indexOf(r2.ids[n]);
                  for (let j = p + 1; j < r3.ids.length; j++) {
                    const dc = dcMap[r3.ids[j]];
                    if (!dc) continue;
                    push([walkLeg(origin, oc.stop), rideLeg(r1, i, m, minuteSeed), rideLeg(r2, k, n, minuteSeed), rideLeg(r3, p, j, minuteSeed), walkLeg(dc.stop, dest)]);
                    break;
                  }
                });
              }
            });
          }
        });
      });
    }

    out.sort((a, b) => a.totalMin - b.totalMin);
    // keep a diverse shortlist: best per bus-signature, cap 6
    const bySig = new Map();
    out.forEach((j) => { const s = j.buses.join('-'); if (!bySig.has(s)) bySig.set(s, j); });
    return Array.from(bySig.values()).slice(0, 6);
  }

  const sorters = {
    Fastest: (a, b) => a.totalMin - b.totalMin,
    'Fewest transfers': (a, b) => a.transfers - b.transfers || a.totalMin - b.totalMin,
    'Least walking': (a, b) => a.walkMeters - b.walkMeters || a.totalMin - b.totalMin,
    'Leaving soonest': (a, b) => a.departIn - b.departIn || a.totalMin - b.totalMin,
  };

  /* Alternative boarding stops for a journey's first ride */
  function boardingOptions(origin, journey, minuteSeed) {
    const dest = journey.dest;
    const cands = nearStops(origin, 1.9, 4);
    return cands.map((c) => {
      const rs = (stopRoutes[c.stop.id] || []);
      const best = plan({ lat: c.stop.lat, lng: c.stop.lng, name: c.stop.name, isStop: true }, dest, minuteSeed)[0];
      return {
        stop: c.stop, walkMeters: meters(c.d), walkMin: walkMin(c.d),
        routeCount: rs.length, routes: rs.slice(0, 5).map((r) => r.no),
        totalMin: best ? best.totalMin + walkMin(c.d) : null,
        transfers: best ? best.transfers : null,
        buses: best ? best.buses : [],
        shelter: hash(c.stop.id) > 0.45, live: rs.some((r) => r.tracked),
      };
    }).filter((o) => o.totalMin != null);
  }

  /* ── Map projection + schematic roads ───────────────────────────────── */
  function project(pts, w, h, pad) {
    pad = pad == null ? 24 : pad;
    const n = Math.max.apply(null, pts.map((p) => p.lat));
    const s = Math.min.apply(null, pts.map((p) => p.lat));
    const e = Math.max.apply(null, pts.map((p) => p.lng));
    const wl = Math.min.apply(null, pts.map((p) => p.lng));
    const cos = Math.cos(((n + s) / 2) * RAD);
    let dx = (e - wl) * cos, dy = (n - s);
    if (dx < 1e-6) dx = 1e-6; if (dy < 1e-6) dy = 1e-6;
    const scale = Math.min((w - pad * 2) / dx, (h - pad * 2) / dy);
    const ox = (w - dx * scale) / 2, oy = (h - dy * scale) / 2;
    return (p) => [ox + (p.lng - wl) * cos * scale, oy + (n - p.lat) * scale];
  }

  const roads = [
    ['Avinashi Road', ['gandhipuram', 'lakshmimills', 'uppilipalayam', 'peelamedu', 'hopecollege', 'airport', 'neelambur'], 2.4],
    ['Trichy Road', ['townhall', 'ramanathapuram', 'sowripalayam', 'singanallur', 'ondipudur', 'irugur'], 2.4],
    ['Mettupalayam Road', ['gandhipuram', 'saibaba', 'nggo', 'thudiyalur', 'pnpalayam', 'karamadai'], 2.2],
    ['Sathy Road', ['gandhipuram', 'ganapathy', 'sitra', 'chinnavedampatti', 'saravanampatti', 'keeranatham'], 2.2],
    ['Palakkad Road', ['ukkadam', 'kuniamuthur', 'sundarapuram', 'eachanari', 'madukkarai'], 2.2],
    ['Thadagam Road', ['gandhipuram', 'velandipalayam', 'kanuvai', 'thadagam'], 1.8],
    ['Marudhamalai Road', ['gandhipuram', 'sivananda', 'telungupalayam', 'vadavalli', 'maruthamalai'], 1.8],
    ['Perur Road', ['townhall', 'presscolony', 'edayarpalayam', 'perur', 'thondamuthur'], 1.6],
    ['Pollachi Road', ['ukkadam', 'kurichi', 'chettipalayam'], 1.6],
    ['Sanganoor Road', ['gandhipuram', 'avarampalayam', 'polytechnic', 'kmch'], 1.4],
    ['Vellalore Road', ['sowripalayam', 'vellalore', 'kurichi'], 1.4],
  ].map(([name, ids, w]) => ({ name, w, pts: ids.filter((i) => byId[i]).map((i) => byId[i]) }));

  /* ── Full published CCMC list, for the route browser ────────────────── */
  const allRoutes = `1|Maruthamalai|Avarampalayam
1A,1C|Ondipudur|Vadavalli
1D,1E|Ondipudur|Maruthamalai
2,2A|Perur|Polytechnic
2B|Ondipudur|Telungupalayam
2C|Kannapanagar|Perur
2D|Sitra|Kurinji Nagar
3,3A|Ganapathy|Madukkarai
3B,3F|Madukkarai|Saibaba Colony
3C|Ganapathy|Thirumalayampalayam
3D,3K|Ganapathy|Kovaipudur
3E|Gandhipuram|Thirumalayampalayam
3G|Ganapathy|K. Kavundan Chavadi
3H|ACC|Velandipalayam
4,4A|Thudiyalur|Podanur
4B|Ukkadam|Press Colony
4C|Srinivasa Nagar|Saibaba Colony
4F,4G|Ondipudur|Thudiyalur
4H|Railway Station|Press Colony
4K|Thudiyalur|Selvapuram
4M|Thudiyalur|Nanjundapuram
5|Sivananda Colony|Sivananda Colony
6|Gandhi Park|Gandhi Park
6A|Gandhipuram|Perianaickanpalayam
7,7C|Gandhi Park|Gandhi Park
8|Chettipalayam|Singanallur
8A|Podanur|Chinthamanipudur
8F|Madukkarai|Saibaba Colony
9|Sundakamuthur|Krishnammal College
10|Saibaba Colony|Chinniampalayam
10A|Town Hall|Madhapur
10B|Saibaba Colony|Kalapatti
11|Railway Station|Kanuvai
11A|Ukkadam|Anuvavi Subramani Temple
11B|Railway Station|Veerapandipudur
11C|Railway Station|Somaiyanpalayam
11F|Railway Station|Edayarpalayam
12|Gandhipuram|Premier Mills
12A|Gandhipuram|Arisipalayam
12B|Railway Station|Kinathukadavu
12C|Eachanari|Polytechnic
12D|Gandhipuram|Nachipalayam
12E|Ukkadam|Velanthavalam
13A|Ukkadam|Kolathur
13B,13C|Ukkadam|Thudiyalur
14|Railway Station|Nadhegoundanpudur
14A|Town Hall|Semmedu
14B|Railway Station|Semmedu
15|Sivanandha Mills|Kuniamuthur
15A|Kovaipudur|Srinivasa Nagar
16|Town Hall|Airport
16A|Saibaba Colony|Aerodrome
16B|Saibaba Colony|PSG Arts College
17|Lakshmi Mills|Velanthavalam
18|Gandhipuram|Arisipalayam
19|Ukkadam|Nanjundapuram
19A|Saibaba Colony|Vellalore
19B|Ukkadam|Sulur Aerodrome
19D|Gandhipuram|Appanaickenpatti
20|Aerodrome|TVS Nagar
20A|Chinniampalayam|TVS Nagar
20B|SIHS Colony|Saibaba Colony
20C|Poochiyur|Saibaba Colony
21|Gandhipuram|Kembanur
21C|Devarayapuram|Thondamuthur
22|Sowripalayam|Sugarcane Institute
22A|Sugarcane Institute|Kovai Medical Center
23|Vellalur|Varadharajapuram
23A|Gandhipuram|Varadharajapuram
24|Ukkadam|Kalapatti
24A|Ukkadam|Serayampalayam
25|Perur|Saibaba Colony
26|Ukkadam|Veerapandipudur
26A|Thondamuthur|Edayarpalayam
27|Railway Station|Press Colony
27A|Gandhipuram|Idigarai
27B|Ukkadam|Press Colony
28|Gandhipuram|Thondamuthur
29|Gandhipuram|Pattanam
30|Ukkadam|Kannampalayam
30A|Gandhi Park|Sulur
30C|Ukkadam|Sulur Aerodrome
30E|Ukkadam|Sulur
30F|Town Hall|Somanur
30G|Ukkadam|Somanur
31|Madukkarai Market|Government Polytechnic
31A|Ondipudur|Madukkarai Market
32|Gandhipuram|Kovanur
32A|Railway Station|Press Colony
32B|Ukkadam|Periyanaickampalayam
32C|Railway Station|Samy Chettipalayam
32D|Railway Station|Veerapandi
32G|Gandhipuram|Vellamadai
32H|Ukkadam|Kasturipalayam
33,33A,33C|Railway Station|Kinathukadavu
33D|Railway Station|Kallapuram
33E|Gandhipuram|Kinathukadavu
33F|Singanallur|Premier Mills
34|Ramanathapuram|Thadagam
35|Avarampalayam|Karadimadai
36|Gandhi Park|Sitra
37|Ukkadam|Kannampalayam
38|Ukkadam|NGGO Colony
38A|Selvapuram|State Bank Colony
38B|Ukkadam|State Bank Colony
38C|Gandhipuram|Velanthavalam
39|Saibaba Colony|Chinniyampalayam
40|Cherayampalayam|Saibaba Colony
40A|Gandhipuram|Veeripalayam
41|Gandhipuram|Somanur
41A|Gandhipuram|Chellapa Goundanpudur
41C|Ukkadam|Karumathampati
42|Town Hall|Irugur
42A|Town Hall|Neelambur
43|Saibaba Colony|Neelikonampalayam
43A|Railway Station|Neelampalayam
44|Town Hall|Sowripalayam
45|Gandhipuram|Vellamadai
45A|Railway Station|Ganesapuram
45C,45E|Gandhipuram|Annur
45D|Gandhipuram|Kempanaickenpalayam
45F|Gandhipuram|Kurukkampalayam
46|Maruthamalai|Ramanathapuram
47|Gandhipuram|Seeralapalayam
47A|Gandhipuram|Premier Mills
48|Gandhipuram|Velanthavalam
48A|Ukkadam|Velanthavalam
48B|Gandhipuram|Kommandamparai
49|Saibaba Colony|Navakarai
50|Gandhipuram|Kannamanaickenur
51|Gandhipuram|Kanjikonampalayam
52|Ukkadam|Saibaba Colony
53|Gandhipuram|Srinivasa Nagar
53A|Gandhipuram|Thithipalayam
54|Ukkadam|Ondipudur
55,55A|Gandhipuram|Vellalur
55B|Gandhipuram|Edayarpalayam
56|Gandhipuram|Poluvampatti
57|Ukkadam|Vellamadai
58|Thadagam Bus Stand|Narasipuram
59|Gandhipuram|Karunya Institute
59A|Railway Station|Alandurai
59B|Molapalayam|Avarampalayam
60|Gandhipuram|Madhampatti
61|Gandhi Park|Sowripalayam
62|Railway Station|Vaiyampalayam
63|Saravanampatti|Selvapuram
63A|Gandhipuram|Kallipalayam
64|Gandhipuram|Thondamuthur
65|Gandhipuram|Kannampalayam
66|Gandhipuram|Madukkarai Market
66A|Gandhipuram|Masithi Goundampudur
67|Gandhipuram|Kovaipudur
69|Pattanam|Velandipalayam
69B|Gandhipuram|Peedampalli
70|Gandhipuram|Maruthamalai
71|Kolimedu|Machanaickenpalayam
71A|Kurichi Housing Unit|Koil Medu
71C|Gandhipuram|Sundarapuram
72|Railway Station|Vellalur
73,73A|Gandhipuram|Chettipalayam
73B|Gandhipuram|Kurichi Housing Unit
74|Gandhipuram|Edayarpalayam
75|Gandhipuram|Irugur
76|Ukkadam|Chinnavedampatti
77|Town Hall|Edayarpalayam
77A|Ukkadam|Kannampalayam
77B|Ukkadam|Edayarpalayam
78|Gandhipuram|Thadagam
78A,78B|Gandhipuram|Anaikatti
79|Selvapuram|Thudiyalur
80|Edayarpalayam|Ondipudur
81|Gandhipuram|Ponne Goundan Pudur
81A|Gandhipuram|Kaduvetti
82A|Ukkadam|Vagarayam Palayam
82B|Gandhipuram|Semsampatti
84|Avarampalayam|Malumichampatti
84A|Gandhipuram|Malumichampatti
85|Ukkadam|Thadagam
86|Gandhipuram|Chinnavedampatti
87|Gandhipuram|Koil Palayam
88|R Kalyanamandapam|R Kalyanamandapam
89,89A|Railway Station|Press Colony
90|Ukkadam|Government Poultry Farm
90A|Ukkadam|Somanur
91,91A|Kovaipudur|Saibaba Colony
92|Maruthamalai|Cheranpalayam
93|Lawley Road|Kulathur
94|Gandhipuram|Periyanaickampalayam
94A|PSG Arts College|Kalikanaickenpalayam
95|Gandhipuram|Singanallur
96|Gandhipuram|Valayar
97|Ukkadam|Chinna Thadagam
98|Ukkadam|Pachapalayam
98A|Ukkadam|Vagarayam Palayam
99|Gandhipuram|Thondamuthur
100|Ukkadam|Velanthavalam
101|Gandhipuram|Kumittipathy
101A|Saibaba Colony|Kaliapuram
102A|Gandhipuram|Karamadai
103|Puliyakulam|Veerapandipudur
104A|Ukkadam|Pattanampalayam
105|Ukkadam|Kojangipalayam
105C|Gandhipuram|Karattampettai
106|Town Hall|Kinathukadavu
106A|Railway Station|Kinathukadavu
106B|Railway Station|Koil Palayam
107|Kovaipudur|SIHS Colony
108|Ukkadam|Chinnakuili
109|Ondipudur|Saibaba Colony
110A|Kurumbapalayam|Saibaba Colony
110B|Singanallur ESI|Kurumba Palayam
111|Gandhipuram|Gandhipuram
112|Ukkadam|Government ITI
113|Ondipudur|Keeranatham
S1|Ondipudur|Maniakarampalayam
S2|Uppilipalayam|Kandakavundan Chavadi
S3|Chittipalayam|Varadharajapuram
S4|Uppilipalayam|Mathipalayam
S5|Singanallur|Thirumalayampalayam
S6|ESI Hospital|Vellakinaru
S7|Kovaipudur|Ondipudur
S8|PSG Arts College|Perur
S9B|Ondipudur|Sankara Polytechnic
S10|Ondipudur|Udaiyampalayam
S12|Maruthamalai|Masakalipalayam
S13|ESI Hospital|Maruthamalai
S14|Kovaipudur|Avarampalayam
S15|Singanallur|Maruthamalai
S16|Singanallur|Telungupalayam
S17|Gandhipuram|Perur
S18|Singanallur|NGGO Colony
S19|PSG Arts College|Vellalur
S20|Singanallur|Chelakaraichal
S21|Periyanaickenpalayam|Krishnammal College
S22|ESI Hospital|Chettipalayam
S23|Cheran Ma Nagar|Ondipudur
S24|Ondipudur|Kasi Nanje Goundanpudur
S25|Kovaipudur|Singanallur
S26|Nanjundapuram|Maruthamalai
S27|Singanallur|Sultanpettai
S28|ESI Hospital|Chelakaraichal
S29|Thudiyalur|Singanallur
S30|Kovaipudur|Krishnammal College`
    .split('\n').map((l) => { const [no, from, to] = l.split('|'); return { no, from, to }; });

  window.KovaiData = {
    stops, byId, places, searchIndex, routes, stopRoutes, allRoutes, roads,
    km, walkMin, meters, fareFor, nearStops, plan, sorters, boardingOptions,
    project, liveFor, hash, segStats,
  };
})();
