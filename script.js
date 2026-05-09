/* ============================================================
   USER AGENT GENERATOR — FULLY REALISTIC ENGINE v3.0
   ============================================================ */
'use strict';

/* ============================================================
   UTILITY
   ============================================================ */
function randomFromArray(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randomInt(min, max)  { return Math.floor(Math.random() * (max - min + 1)) + min; }
function maybe(prob)          { return Math.random() < prob; }

/* ============================================================
   CHROME VERSION BUILDER
   Real Chrome format: MAJOR.0.BUILD.PATCH
   Each major release has its own build number and patch pool
   ============================================================ */
const CHROME_BUILDS = {
  146: { b:7680, patches:[40,70,90,100,120,140,154,160,180,200,210] },
  145: { b:7623, patches:[30,50,65,80,100,110,122] },
  144: { b:7566, patches:[40,55,70,85,100,115] },
  143: { b:7505, patches:[45,60,75,90,105,120] },
  142: { b:7459, patches:[50,65,80,100,115,130] },
  141: { b:7395, patches:[48,60,75,90,105,120] },
  140: { b:7345, patches:[40,55,72,88,105,120] },
  139: { b:7258, patches:[45,62,80,98,115] },
  138: { b:7204, patches:[50,68,85,100,118] },
  137: { b:7151, patches:[48,65,82,100,115] },
  136: { b:7103, patches:[55,72,90,108,125] },
  135: { b:7049, patches:[60,78,95,110,119] },
  134: { b:6998, patches:[55,70,85,100,118] },
  133: { b:6943, patches:[58,76,92,108,120] },
  132: { b:6834, patches:[56,72,88,104,115] },
  131: { b:6778, patches:[52,70,88,104,118] },
  130: { b:6723, patches:[50,68,86,104,115] },
};
const CHROME_MAJORS = Object.keys(CHROME_BUILDS);

function randomChromeVer() {
  const major = randomFromArray(CHROME_MAJORS);
  const { b, patches } = CHROME_BUILDS[major];
  return `${major}.0.${b + randomInt(0,8)}.${randomFromArray(patches)}`;
}

/* ============================================================
   WEBVIEW VERSION — values seen in real Android WebView UAs
   ============================================================ */
const WEBVIEW_VERSIONS = ['4.0','18.0','18.3','18.4','5.0'];

/* ============================================================
   ANDROID DEVICES — 120+ real handsets
   id    = model string in UA          (e.g. SM-A156B)
   name  = human readable name         (e.g. Galaxy A15)  — used in Snapchat suffix
   os    = Android OS version string
   build = optional Build/XXXX value   (null = omit)
   ============================================================ */
const ANDROID_DEVICES = [
  /* ── Google Pixel ── */
  { id:'Pixel 9 Pro XL',   name:'Google Pixel 9 Pro XL',   os:'15', build:'AP4A.250505.003' },
  { id:'Pixel 9 Pro',      name:'Google Pixel 9 Pro',      os:'15', build:'AP4A.250405.002' },
  { id:'Pixel 9',          name:'Google Pixel 9',          os:'15', build:'AP4A.250405.001' },
  { id:'Pixel 8 Pro',      name:'Google Pixel 8 Pro',      os:'14', build:'AP2A.240805.005' },
  { id:'Pixel 8',          name:'Google Pixel 8',          os:'14', build:'AP2A.240805.004' },
  { id:'Pixel 8a',         name:'Google Pixel 8a',         os:'14', build:'AP2A.240805.003' },
  { id:'Pixel 7 Pro',      name:'Google Pixel 7 Pro',      os:'14', build:'AP1A.240505.004' },
  { id:'Pixel 7',          name:'Google Pixel 7',          os:'14', build:'AP1A.240505.003' },
  { id:'Pixel 7a',         name:'Google Pixel 7a',         os:'14', build:'AP1A.240405.002' },
  { id:'Pixel 6 Pro',      name:'Google Pixel 6 Pro',      os:'13', build:'TP1A.221005.002' },
  { id:'Pixel 6',          name:'Google Pixel 6',          os:'13', build:'TP1A.221005.001' },
  { id:'Pixel 6a',         name:'Google Pixel 6a',         os:'13', build:'TQ3A.230705.001' },
  { id:'Pixel 5',          name:'Google Pixel 5',          os:'13', build:'TQ3A.230805.001' },
  /* ── Samsung Galaxy S ── */
  { id:'SM-S938B',   name:'Samsung Galaxy S25 Ultra',  os:'15', build:null },
  { id:'SM-S936B',   name:'Samsung Galaxy S25+',       os:'15', build:null },
  { id:'SM-S931B',   name:'Samsung Galaxy S25',        os:'15', build:null },
  { id:'SM-S928B',   name:'Samsung Galaxy S24 Ultra',  os:'14', build:null },
  { id:'SM-S926B',   name:'Samsung Galaxy S24+',       os:'14', build:null },
  { id:'SM-S921B',   name:'Samsung Galaxy S24',        os:'14', build:null },
  { id:'SM-S918B',   name:'Samsung Galaxy S23 Ultra',  os:'13', build:null },
  { id:'SM-S916B',   name:'Samsung Galaxy S23+',       os:'13', build:null },
  { id:'SM-S911B',   name:'Samsung Galaxy S23',        os:'13', build:null },
  { id:'SM-S908B',   name:'Samsung Galaxy S22 Ultra',  os:'12', build:null },
  { id:'SM-G998B',   name:'Samsung Galaxy S21 Ultra',  os:'12', build:null },
  { id:'SM-G991B',   name:'Samsung Galaxy S21',        os:'12', build:null },
  /* ── Samsung Galaxy A ── */
  { id:'SM-A566B',   name:'Galaxy A56',                os:'15', build:null },
  { id:'SM-A556B',   name:'Galaxy A55',                os:'14', build:null },
  { id:'SM-A546B',   name:'Galaxy A54',                os:'14', build:null },
  { id:'SM-A536B',   name:'Galaxy A53',                os:'13', build:null },
  { id:'SM-A346B',   name:'Galaxy A34',                os:'14', build:null },
  { id:'SM-A336B',   name:'Galaxy A33',                os:'13', build:null },
  { id:'SM-A256B',   name:'Galaxy A25',                os:'14', build:null },
  { id:'SM-A236B',   name:'Galaxy A23',                os:'13', build:null },
  { id:'SM-A156B',   name:'Galaxy A15',                os:'14', build:null },
  { id:'SM-A055F',   name:'Galaxy A05s',               os:'13', build:null },
  { id:'SM-A035F',   name:'Galaxy A03s',               os:'12', build:null },
  { id:'SM-A235F',   name:'Galaxy A23',                os:'12', build:null },
  { id:'SM-A135F',   name:'Galaxy A13',                os:'12', build:null },
  { id:'SM-A725F',   name:'Galaxy A72',                os:'12', build:null },
  { id:'SM-A528B',   name:'Galaxy A52s',               os:'12', build:null },
  { id:'SM-A325F',   name:'Galaxy A32',                os:'11', build:null },
  /* ── Samsung Galaxy M ── */
  { id:'SM-M356B',   name:'Galaxy M35',                os:'14', build:null },
  { id:'SM-M546B',   name:'Galaxy M54',                os:'13', build:null },
  { id:'SM-M336BU',  name:'Galaxy M33',                os:'13', build:null },
  { id:'SM-M127F',   name:'Galaxy M12',                os:'11', build:null },
  /* ── OnePlus ── */
  { id:'CPH2581',    name:'OnePlus 12',         os:'14', build:null },
  { id:'CPH2573',    name:'OnePlus 12R',        os:'14', build:null },
  { id:'CPH2449',    name:'OnePlus 11',         os:'13', build:null },
  { id:'CPH2399',    name:'OnePlus 10 Pro',     os:'13', build:null },
  { id:'CPH2251',    name:'OnePlus 9 Pro',      os:'12', build:null },
  { id:'LE2125',     name:'OnePlus 9 Pro',      os:'12', build:null },
  { id:'CPH2407',    name:'OnePlus Nord 3',     os:'13', build:null },
  /* ── Xiaomi / Redmi / POCO ── */
  { id:'2311DRK48G', name:'Xiaomi 14 Pro',        os:'14', build:null },
  { id:'23049PCD8G', name:'Xiaomi 13 Pro',        os:'13', build:null },
  { id:'2201116SG',  name:'Xiaomi 12 Pro',        os:'12', build:null },
  { id:'22111317I',  name:'Redmi Note 12 Pro',    os:'12', build:null },
  { id:'23090RA98G', name:'Redmi Note 13 Pro',    os:'13', build:null },
  { id:'24053PY09I', name:'Redmi Note 14 Pro',    os:'14', build:null },
  { id:'2306EPN60G', name:'Redmi Note 13',        os:'13', build:null },
  { id:'23076RA4BI', name:'Redmi 12',             os:'13', build:null },
  { id:'23028RN4DI', name:'Redmi Note 12',        os:'13', build:null },
  { id:'22071212AG', name:'POCO F4 GT',           os:'12', build:null },
  { id:'22041216G',  name:'POCO X4 Pro 5G',       os:'12', build:null },
  { id:'23013PC75G', name:'POCO X5 Pro 5G',       os:'13', build:null },
  { id:'24076PAKGI', name:'POCO F6 Pro',           os:'14', build:null },
  /* ── Motorola ── */
  { id:'XT2379-7',             name:'Motorola Edge 50 Fusion', os:'14', build:'AP3A.240838.014' },
  { id:'XT2343-4',             name:'Motorola Edge 30 Ultra',  os:'13', build:null },
  { id:'XT2255-1',             name:'Motorola Edge 30',        os:'12', build:null },
  { id:'XT2175-2',             name:'Motorola Moto G52',       os:'12', build:null },
  { id:'motorola edge 40 pro', name:'Motorola Edge 40 Pro',    os:'13', build:null },
  { id:'motorola g84 5G',      name:'Motorola Moto G84 5G',    os:'13', build:null },
  { id:'motorola razr 40 ultra',name:'Motorola Razr 40 Ultra', os:'13', build:null },
  { id:'XT2421-7',             name:'Motorola Edge 50 Pro',    os:'14', build:null },
  /* ── Oppo ── */
  { id:'CPH2525',    name:'OPPO Find X7 Pro',    os:'14', build:null },
  { id:'CPH2487',    name:'OPPO Reno 11 Pro',    os:'14', build:null },
  { id:'CPH2389',    name:'OPPO Reno 8 Pro',     os:'12', build:null },
  { id:'CPH2305',    name:'OPPO Find X5 Pro',    os:'12', build:null },
  { id:'CPH2269',    name:'OPPO A96',            os:'12', build:null },
  { id:'CPH2551',    name:'OPPO A79 5G',         os:'13', build:null },
  /* ── Vivo ── */
  { id:'V2402',      name:'Vivo X100 Pro',       os:'14', build:null },
  { id:'V2318',      name:'Vivo V30 Pro',        os:'14', build:null },
  { id:'V2231',      name:'Vivo V27 Pro',        os:'13', build:null },
  { id:'V2148',      name:'Vivo V23',            os:'12', build:null },
  { id:'V2206',      name:'Vivo Y75s',           os:'12', build:null },
  { id:'V2401',      name:'Vivo X100',           os:'14', build:null },
  /* ── Realme ── */
  { id:'RMX3900',    name:'Realme GT 5 Pro',     os:'14', build:null },
  { id:'RMX3761',    name:'Realme 11 Pro+',      os:'13', build:null },
  { id:'RMX3630',    name:'Realme C55',          os:'13', build:null },
  { id:'RMX3471',    name:'Realme 10 Pro',       os:'12', build:null },
  { id:'RMX3286',    name:'Realme GT 2 Pro',     os:'12', build:null },
  { id:'RMX3888',    name:'Realme GT 6',         os:'14', build:null },
  /* ── Infinix ── */
  { id:'X6851B',     name:'Infinix Note 40 Pro+',os:'14', build:null },
  { id:'X6739',      name:'Infinix Note 30',     os:'13', build:null },
  { id:'X6710',      name:'Infinix Note 12',     os:'12', build:null },
  { id:'X6515',      name:'Infinix Hot 20s',     os:'12', build:null },
  { id:'X6525',      name:'Infinix Smart 8',     os:'13', build:null },
  { id:'X6836',      name:'Infinix Zero 40',     os:'14', build:null },
  /* ── Tecno ── */
  { id:'BF7',        name:'Tecno Camon 20 Pro',  os:'13', build:null },
  { id:'CK8n',       name:'Tecno Pova 5 Pro',    os:'13', build:null },
  { id:'LE7n',       name:'Tecno Spark 20',      os:'14', build:null },
  { id:'LH8n',       name:'Tecno Phantom V Fold',os:'14', build:null },
  /* ── Huawei ── */
  { id:'ELS-NX9',    name:'Huawei P40 Pro',      os:'10', build:null },
  { id:'VOG-L29',    name:'Huawei P30 Pro',      os:'10', build:null },
  { id:'JAD-LX9',    name:'Huawei Nova 7 Pro',   os:'11', build:null },
  { id:'CRT-LX1',    name:'Huawei Nova 3',       os:'10', build:null },
  /* ── Nokia ── */
  { id:'TA-1440',    name:'Nokia G60 5G',        os:'12', build:null },
  { id:'TA-1418',    name:'Nokia G22',           os:'12', build:null },
  { id:'TA-1382',    name:'Nokia XR21',          os:'12', build:null },
  /* ── Asus ── */
  { id:'ASUS_AI2201',name:'Asus Zenfone 9',      os:'13', build:null },
  { id:'ASUS_AI2302',name:'Asus Zenfone 10',     os:'13', build:null },
  /* ── Sony ── */
  { id:'XQ-BT52',    name:'Sony Xperia 5 IV',   os:'13', build:null },
  { id:'XQ-CT54',    name:'Sony Xperia 1 V',    os:'13', build:null },
  { id:'XQ-EC54',    name:'Sony Xperia 1 VI',   os:'14', build:null },
];

/* ============================================================
   IPHONE VERSIONS
   ============================================================ */
const IPHONE_VERSIONS = [
  { ua:'iPhone; CPU iPhone OS 18_1 like Mac OS X',    safariVer:'18.1', iosNum:'18.1',   label:'iPhone 16 Pro Max' },
  { ua:'iPhone; CPU iPhone OS 18_0 like Mac OS X',    safariVer:'18.0', iosNum:'18.0',   label:'iPhone 16 Pro' },
  { ua:'iPhone; CPU iPhone OS 17_6_1 like Mac OS X',  safariVer:'17.6', iosNum:'17.6.1', label:'iPhone 15 Pro Max' },
  { ua:'iPhone; CPU iPhone OS 17_5_1 like Mac OS X',  safariVer:'17.5', iosNum:'17.5.1', label:'iPhone 15 Pro' },
  { ua:'iPhone; CPU iPhone OS 17_4_1 like Mac OS X',  safariVer:'17.4', iosNum:'17.4.1', label:'iPhone 15' },
  { ua:'iPhone; CPU iPhone OS 17_3_1 like Mac OS X',  safariVer:'17.3', iosNum:'17.3.1', label:'iPhone 14 Pro Max' },
  { ua:'iPhone; CPU iPhone OS 17_2_1 like Mac OS X',  safariVer:'17.2', iosNum:'17.2.1', label:'iPhone 14 Pro' },
  { ua:'iPhone; CPU iPhone OS 17_1_2 like Mac OS X',  safariVer:'17.1', iosNum:'17.1.2', label:'iPhone 14' },
  { ua:'iPhone; CPU iPhone OS 16_7_10 like Mac OS X', safariVer:'16.7', iosNum:'16.7.10',label:'iPhone 13 Pro Max' },
  { ua:'iPhone; CPU iPhone OS 16_7_8 like Mac OS X',  safariVer:'16.7', iosNum:'16.7.8', label:'iPhone 13 Pro' },
  { ua:'iPhone; CPU iPhone OS 16_7_4 like Mac OS X',  safariVer:'16.7', iosNum:'16.7.4', label:'iPhone 13' },
  { ua:'iPhone; CPU iPhone OS 16_7_2 like Mac OS X',  safariVer:'16.6', iosNum:'16.7.2', label:'iPhone 12 Pro Max' },
  { ua:'iPhone; CPU iPhone OS 16_6_1 like Mac OS X',  safariVer:'16.6', iosNum:'16.6.1', label:'iPhone 12 Pro' },
  { ua:'iPhone; CPU iPhone OS 15_8_3 like Mac OS X',  safariVer:'15.6', iosNum:'15.8.3', label:'iPhone 11 Pro Max' },
  { ua:'iPhone; CPU iPhone OS 15_7_9 like Mac OS X',  safariVer:'15.6', iosNum:'15.7.9', label:'iPhone 11' },
  { ua:'iPhone; CPU iPhone OS 15_6_1 like Mac OS X',  safariVer:'15.6', iosNum:'15.6.1', label:'iPhone SE 3rd gen' },
];

/* ============================================================
   IPAD VERSIONS
   ============================================================ */
const IPAD_VERSIONS = [
  { ua:'iPad; CPU OS 17_5 like Mac OS X', safariVer:'17.5', label:'iPad Pro M4' },
  { ua:'iPad; CPU OS 17_4 like Mac OS X', safariVer:'17.4', label:'iPad Pro 12.9 M2' },
  { ua:'iPad; CPU OS 17_3 like Mac OS X', safariVer:'17.3', label:'iPad Air M1' },
  { ua:'iPad; CPU OS 16_7 like Mac OS X', safariVer:'16.7', label:'iPad 10th gen' },
  { ua:'iPad; CPU OS 16_6 like Mac OS X', safariVer:'16.6', label:'iPad mini 6' },
  { ua:'iPad; CPU OS 16_3 like Mac OS X', safariVer:'16.3', label:'iPad Pro 11 M2' },
];

/* ============================================================
   WINDOWS
   ============================================================ */
const WINDOWS_VERSIONS = [
  { nt:'10.0', arch:'Win64; x64', label:'Windows 11 x64' },
  { nt:'10.0', arch:'Win64; x64', label:'Windows 10 x64' },
  { nt:'10.0', arch:'WOW64',      label:'Windows 10 x86' },
  { nt:'6.3',  arch:'Win64; x64', label:'Windows 8.1 x64' },
  { nt:'6.1',  arch:'Win64; x64', label:'Windows 7 x64' },
];

/* ============================================================
   MACOS
   ============================================================ */
const MACOS_VERSIONS = [
  { ver:'10_15_7', safariBase:'605.1.15', label:'macOS Catalina' },
  { ver:'11_7_10', safariBase:'605.1.15', label:'macOS Big Sur' },
  { ver:'12_7_4',  safariBase:'605.1.15', label:'macOS Monterey' },
  { ver:'13_6_7',  safariBase:'605.1.15', label:'macOS Ventura' },
  { ver:'14_4_1',  safariBase:'605.1.15', label:'macOS Sonoma' },
  { ver:'14_5',    safariBase:'605.1.15', label:'macOS Sonoma' },
  { ver:'14_6',    safariBase:'605.1.15', label:'macOS Sonoma' },
];

/* ============================================================
   OTHER BROWSER VERSIONS
   ============================================================ */
const FIREFOX_VERSIONS = [
  '137.0','136.0','135.0','134.0','133.0','132.0','131.0',
  '130.0','129.0','128.0.3','127.0.2','126.0.1','125.0.3',
];
const OPERA_VERSIONS = [
  '117.0.0.0','116.0.0.0','115.0.0.0','114.0.0.0','113.0.0.0',
  '112.0.5197.53','111.0.5168.55','110.0.5130.49','109.0.5097.45',
];
const SAFARI_VERSIONS = [
  '17.4','17.3','17.2','17.1','17.0','16.6','16.5','16.4','16.3','16.1','15.6',
];

/* ============================================================
   IN-APP BROWSER VERSION POOLS — real observed versions
   ============================================================ */
const INAPP = {
  facebook: {
    fb4a:['553.0.0','545.0.0','540.0.0','530.0.0','520.0.0','510.0.0','500.0.0','490.0.0','480.0.0','475.0.0'],
    ema: ['500.0.0.8.103','490.0.0.9.102','480.0.0.7.100','470.0.0.8.101','460.0.0.7.99'],
    ios: ['460.0.0.45.109','450.0.0.36.97','440.0.0.36.89','430.0.0.28.83','420.1.0.32.96'],
  },
  instagram: {
    android:['342.0.0.0','335.0.0.0','325.0.0.0','315.0.0.0','305.0.0.0','295.0.0.0','285.0.0.0'],
    ios:    ['344.0.0.0','334.0.0.0','324.0.0.0','314.0.0.0','304.0.0.0'],
  },
  fblite:['396.0.0','390.0.0','385.0.0','380.0.0','370.0.0','360.0.0','350.0.0'],
  twitter: {
    ios:    ['11.75.1','11.70.0','11.65.2','11.60.1','11.55.0','11.50.3','11.47.0','11.45.0'],
    android:['10.47.0','10.45.3','10.43.1','10.40.2','10.38.0','10.35.0'],
  },
  linkedin:['9.1.529','9.1.500','9.0.490','8.9.480','8.8.470','8.7.460','8.6.450'],
  snapchat:['13.21.0.46','13.20.0.40','13.18.0.38','13.16.0.35','13.14.0.30','13.10.0.25','13.05.0.20'],
  tiktok: {
    android:['38.0.3','37.5.4','36.9.3','36.1.3','35.9.5','35.5.4','34.9.6','34.5.3'],
    ios:    ['38.0.2','37.5.3','36.9.2','36.1.2','35.9.4','35.5.3','34.9.5'],
  },
};

/* ============================================================
   LOCALE POOLS — for in-app UA locale codes
   ============================================================ */
const INAPP_LOCALES = [
  'en_US','en_GB','en_IN','en_CA','en_AU','de_DE','es_MX',
  'fr_FR','pt_BR','ar_SA','hi_IN','nl_NL','ru_RU','tr_TR',
  'ja_JP','ko_KR','zh_CN','id_ID','th_TH','vi_VN','mg_MG',
  'it_IT','es_ES','pl_PL','cs_CZ','sv_SE','nb_NO','fi_FI',
];

/* ============================================================
   COUNTRY MAP
   ============================================================ */
const LOCALE_MAP = {
  all:         null,
  usa:         { locale:'en-US', label:'USA',         flag:'🇺🇸', inapp:'en_US' },
  uk:          { locale:'en-GB', label:'UK',          flag:'🇬🇧', inapp:'en_GB' },
  india:       { locale:'en-IN', label:'India',       flag:'🇮🇳', inapp:'en_IN' },
  canada:      { locale:'en-CA', label:'Canada',      flag:'🇨🇦', inapp:'en_CA' },
  australia:   { locale:'en-AU', label:'Australia',   flag:'🇦🇺', inapp:'en_AU' },
  germany:     { locale:'de-DE', label:'Germany',     flag:'🇩🇪', inapp:'de_DE' },
  mexico:      { locale:'es-MX', label:'Mexico',      flag:'🇲🇽', inapp:'es_MX' },
  japan:       { locale:'ja-JP', label:'Japan',       flag:'🇯🇵', inapp:'ja_JP' },
  netherlands: { locale:'nl-NL', label:'Netherlands', flag:'🇳🇱', inapp:'nl_NL' },
  russia:      { locale:'ru-RU', label:'Russia',      flag:'🇷🇺', inapp:'ru_RU' },
  turkey:      { locale:'tr-TR', label:'Turkey',      flag:'🇹🇷', inapp:'tr_TR' },
};

/* ============================================================
   ICON MAPS
   ============================================================ */
const DEVICE_ICONS  = { iphone:'📱', ipad:'📲', android:'🤖', windows:'🖥️', macos:'🍎' };
const BROWSER_ICONS = { chrome:'🌐', firefox:'🦊', safari:'🧭', opera:'⭕', browser:'📡' };
const APP_ICONS     = { facebook:'📘', instagram:'📸', fblite:'💙', twitter:'🐦', linkedin:'💼', snapchat:'👻', tiktok:'🎵' };

/* ============================================================
   HELPERS
   ============================================================ */
function getRandomLocale(countryKey) {
  if (countryKey === 'all') {
    const keys = Object.keys(LOCALE_MAP).filter(k => k !== 'all');
    return LOCALE_MAP[randomFromArray(keys)];
  }
  return LOCALE_MAP[countryKey];
}

/** Build the Android parenthetical  — 4 variants */
function androidBase(device, wv) {
  const hasBuild = device.build && maybe(0.50);
  const buildStr = hasBuild ? ` Build/${device.build}` : '';
  const wvStr    = wv ? '; wv' : '';
  return `(Linux; Android ${device.os}; ${device.id}${buildStr}${wvStr})`;
}

/** Android WebView base string shared by several in-app browsers */
function androidWVBase(device, wvVer, cv) {
  return `Mozilla/5.0 ${androidBase(device, true)} AppleWebKit/537.36 (KHTML, like Gecko) Version/${wvVer} Chrome/${cv} Mobile Safari/537.36`;
}

/* ============================================================
   PLAIN BROWSER UAs
   ============================================================ */
function buildAndroidChrome(d) {
  const cv = randomChromeVer();
  return `Mozilla/5.0 ${androidBase(d, false)} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36`;
}
function buildAndroidFirefox(d) {
  const fv = randomFromArray(FIREFOX_VERSIONS);
  return `Mozilla/5.0 (Android ${d.os}; Mobile; rv:${fv}) Gecko/${fv} Firefox/${fv}`;
}
function buildAndroidBrowser(d) {
  const wk = `533.${randomInt(1, 18)}`;
  return `Mozilla/5.0 (Linux; U; Android ${d.os}; en-us; ${d.id} Build/${d.build || 'MRA58K'}) AppleWebKit/${wk} (KHTML, like Gecko) Version/4.0 Mobile Safari/${wk}`;
}
function buildAndroidOpera(d) {
  return `Mozilla/5.0 ${androidBase(d, false)} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${randomChromeVer()} Mobile Safari/537.36 OPR/${randomFromArray(OPERA_VERSIONS)}`;
}

function buildIPhoneSafari(ip) {
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${ip.safariVer} Mobile/15E148 Safari/604.1`;
}
function buildIPhoneChrome(ip) {
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${randomChromeVer()} Mobile/15E148 Safari/604.1`;
}
function buildIPhoneFirefox(ip) {
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/${randomFromArray(FIREFOX_VERSIONS)} Mobile/15E148 Safari/605.1.15`;
}
function buildIPadSafari(ip) {
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${ip.safariVer} Mobile/15E148 Safari/604.1`;
}
function buildIPadChrome(ip) {
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${randomChromeVer()} Mobile/15E148 Safari/604.1`;
}

function buildWindowsChrome(w) {
  const cv = randomChromeVer();
  if (maybe(0.2)) {
    const major = cv.split('.')[0];
    return `Mozilla/5.0 (Windows NT ${w.nt}; ${w.arch}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Safari/537.36 Edg/${major}.0.0.${randomInt(1200,2800)}`;
  }
  return `Mozilla/5.0 (Windows NT ${w.nt}; ${w.arch}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Safari/537.36`;
}
function buildWindowsFirefox(w) {
  const fv = randomFromArray(FIREFOX_VERSIONS);
  return `Mozilla/5.0 (Windows NT ${w.nt}; ${w.arch}; rv:${fv}) Gecko/20100101 Firefox/${fv}`;
}
function buildWindowsOpera(w) {
  return `Mozilla/5.0 (Windows NT ${w.nt}; ${w.arch}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${randomChromeVer()} Safari/537.36 OPR/${randomFromArray(OPERA_VERSIONS)}`;
}

function buildMacChrome(m) {
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${m.ver}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${randomChromeVer()} Safari/537.36`;
}
function buildMacSafari(m) {
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${m.ver}) AppleWebKit/${m.safariBase} (KHTML, like Gecko) Version/${randomFromArray(SAFARI_VERSIONS)} Safari/${m.safariBase}`;
}
function buildMacFirefox(m) {
  const fv = randomFromArray(FIREFOX_VERSIONS);
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${m.ver}; rv:${fv}) Gecko/20100101 Firefox/${fv}`;
}
function buildMacOpera(m) {
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${m.ver}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${randomChromeVer()} Safari/537.36 OPR/${randomFromArray(OPERA_VERSIONS)}`;
}

/* ============================================================
   IN-APP BROWSER UA BUILDERS
   All formats match real observed user agents exactly.
   ============================================================ */

/* ── FACEBOOK Android ──
   Format 1 (FB4A):  ...Version/X.Y Chrome/VER Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/VER;IABMV/1;]
   Format 2 (EMA):   ...Version/X.Y Chrome/VER Mobile Safari/537.36[FBAN/EMA;FBLC/LC;FBAV/VER;FBCX/modulariab;]
   Examples:
     (Linux; Android 15; Pixel 9; wv) ... [FB_IAB/FB4A;FBAV/553.0.0;IABMV/1;]
     (Linux; Android 14; XT2379-7 Build/AP3A.240838.014; wv) ...[FBAN/EMA;FBLC/mg_MG;FBAV/500.0.0.8.103;FBCX/modulariab;]
*/
function buildFacebookAndroid(device, locale) {
  const cv      = randomChromeVer();
  const wvVer   = randomFromArray(WEBVIEW_VERSIONS);
  const base    = androidWVBase(device, wvVer, cv);
  const fbLocale= locale ? locale.inapp : randomFromArray(INAPP_LOCALES);

  if (maybe(0.72)) {
    const fbav = randomFromArray(INAPP.facebook.fb4a);
    return `${base} [FB_IAB/FB4A;FBAV/${fbav};IABMV/1;]`;
  } else {
    const fbav = randomFromArray(INAPP.facebook.ema);
    // EMA has no space before bracket
    return `${base}[FBAN/EMA;FBLC/${fbLocale};FBAV/${fbav};FBCX/modulariab;]`;
  }
}

/* ── FACEBOOK iOS ──
   ...) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone;...;FBAV/VER]
*/
function buildFacebookIOS(ip, locale) {
  const fbav    = randomFromArray(INAPP.facebook.ios);
  const fbLocale= locale ? locale.inapp : 'en_US';
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone;FBMD/iPhone;FBSN/iPhone OS;FBSV/${ip.iosNum};FBSS/3;FBCR/;FBID/phone;FBLC/${fbLocale};FBOP/5;FBCBU/1;FBAV/${fbav}]`;
}

/* ── INSTAGRAM Android ──
   ...Chrome/VER Mobile Safari/537.36 Instagram/VER Android (APIVER/OSVER; DPIdpi; RESxRES; BRAND; MODEL; ID; arm64-v8a)
*/
function buildInstagramAndroid(device) {
  const cv    = randomChromeVer();
  const igVer = randomFromArray(INAPP.instagram.android);
  const dpi   = randomFromArray(['320','360','420','480','560','640']);
  const res   = randomFromArray(['1080x2340','1080x2400','1080x2460','1080x2640','720x1560','1440x3120']);
  const brand = device.name.split(' ')[0];
  return `Mozilla/5.0 ${androidBase(device, false)} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 Instagram/${igVer} Android (${randomInt(28,35)}/${device.os}; ${dpi}dpi; ${res}; ${brand}; ${device.name}; ${device.id}; arm64-v8a)`;
}

/* ── INSTAGRAM iOS ──
   ...) Mobile/15E148 Instagram/VER (LABEL;iOS/VER;Scale/X.YY)
*/
function buildInstagramIOS(ip) {
  const igVer = randomFromArray(INAPP.instagram.ios);
  const scale = randomFromArray(['2.00','3.00']);
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram/${igVer} (${ip.label};iOS/${ip.iosNum};Scale/${scale})`;
}

/* ── FB LITE Android ──
   ...Version/X.Y Chrome/VER Mobile Safari/537.36 [FB_IAB/LITE;FBAV/VER;IABMV/1;]
*/
function buildFBLiteAndroid(device, locale) {
  const cv    = randomChromeVer();
  const wvVer = randomFromArray(WEBVIEW_VERSIONS);
  const fbav  = randomFromArray(INAPP.fblite);
  return `${androidWVBase(device, wvVer, cv)} [FB_IAB/LITE;FBAV/${fbav};IABMV/1;]`;
}

/* ── TWITTER / X  iOS ──
   Real: ...) Mobile/15E148 TwitteriPhone/11.75.1 Locale/nl_NL
*/
function buildTwitterIOS(ip, locale) {
  const twVer = randomFromArray(INAPP.twitter.ios);
  const loc   = locale ? locale.inapp : randomFromArray(INAPP_LOCALES);
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TwitteriPhone/${twVer} Locale/${loc}`;
}

/* ── TWITTER / X  Android ──
   Real: ...Chrome/VER Mobile Safari/537.36 TwitterAndroid/VER
*/
function buildTwitterAndroid(device, locale) {
  const cv    = randomChromeVer();
  const twVer = randomFromArray(INAPP.twitter.android);
  return `Mozilla/5.0 ${androidBase(device, false)} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 TwitterAndroid/${twVer}`;
}

/* ── LINKEDIN Android ──
   Real: ...Chrome/VER Mobile Safari/537.36 LinkedInApp/9.1.529 (en_GB)
*/
function buildLinkedInAndroid(device, locale) {
  const cv    = randomChromeVer();
  const liVer = randomFromArray(INAPP.linkedin);
  const loc   = locale ? locale.inapp : randomFromArray(INAPP_LOCALES);
  return `Mozilla/5.0 ${androidBase(device, false)} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 LinkedInApp/${liVer} (${loc})`;
}

/* ── LINKEDIN iOS ── */
function buildLinkedInIOS(ip, locale) {
  const liVer = randomFromArray(INAPP.linkedin);
  const loc   = locale ? locale.inapp : randomFromArray(INAPP_LOCALES);
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LinkedInApp/${liVer} (${loc})`;
}

/* ── SNAPCHAT Android ──
   Real: ...Chrome/VER Mobile Safari/537.36 Snapchat/13.21.0.46 (Galaxy A15; Android 14; gzip)
         ...Chrome/VER Mobile Safari/537.36 Snapchat/13.21.0.46 (Infinix Note 40 Pro+; Android 14; gzip)
*/
function buildSnapchatAndroid(device) {
  const cv    = randomChromeVer();
  const scVer = randomFromArray(INAPP.snapchat);
  return `Mozilla/5.0 ${androidBase(device, false)} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 Snapchat/${scVer} (${device.name}; Android ${device.os}; gzip)`;
}

/* ── SNAPCHAT iOS ──
   ...) Mobile/15E148 Snapchat/VER (iPhone Model; iOS VER; gzip)
*/
function buildSnapchatIOS(ip) {
  const scVer = randomFromArray(INAPP.snapchat);
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Snapchat/${scVer} (${ip.label}; iOS ${ip.iosNum}; gzip)`;
}

/* ── TIKTOK Android ──
   Real: ...Chrome/VER Mobile Safari/537.36 TikTok/VER (Linux; U; Android OS; locale; MODEL; Build/XXXX)
*/
function buildTikTokAndroid(device, locale) {
  const cv     = randomChromeVer();
  const ttVer  = randomFromArray(INAPP.tiktok.android);
  const loc    = locale ? locale.inapp : randomFromArray(INAPP_LOCALES);
  const builds = ['OPM1.171019.026','PPR1.180610.011','QP1A.190711.020','RP1A.200720.012','SP1A.210812.016','TP1A.221005.002'];
  return `Mozilla/5.0 ${androidBase(device, false)} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 TikTok/${ttVer} (Linux; U; Android ${device.os}; ${loc}; ${device.id}; Build/${randomFromArray(builds)})`;
}

/* ── TIKTOK iOS ── */
function buildTikTokIOS(ip, locale) {
  const ttVer = randomFromArray(INAPP.tiktok.ios);
  const loc   = locale ? locale.inapp : randomFromArray(INAPP_LOCALES);
  return `Mozilla/5.0 (${ip.ua}) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TikTok/${ttVer} (${ip.label}; iOS ${ip.iosNum}; ${loc})`;
}

/* ============================================================
   CORE GENERATOR
   ============================================================ */
function generateSingleUA(deviceKey, browserKey, inAppKey, locale) {

  /* ── resolve device ── */
  let dev = deviceKey;
  if (dev === 'all') dev = randomFromArray(['android','iphone','ipad','windows','macos']);

  /* ── in-app forces mobile device ── */
  if (inAppKey !== 'none') {
    const iosOnlyApps = ['twitter'];  // build iOS-specific for these when device=ios
    if (!['android','iphone','ipad'].includes(dev)) {
      dev = maybe(0.6) ? 'android' : 'iphone';
    }
  }

  /* ── resolve browser ── */
  let br = browserKey;
  if (br === 'all') {
    const byDev = {
      android: ['chrome','firefox','browser','opera'],
      iphone:  ['safari','chrome','firefox'],
      ipad:    ['safari','chrome'],
      windows: ['chrome','firefox','opera'],
      macos:   ['chrome','safari','firefox','opera'],
    };
    br = randomFromArray(byDev[dev] || ['chrome']);
  }
  if (br === 'safari'  && ['android','windows'].includes(dev)) br = 'chrome';
  if (br === 'browser' && dev !== 'android')                   br = 'chrome';

  let uaString = '', deviceLabel = '', browserLabel = '';

  /* ══════════════════════════════
     ANDROID
  ══════════════════════════════ */
  if (dev === 'android') {
    const device = randomFromArray(ANDROID_DEVICES);
    deviceLabel  = `Android ${device.os}`;

    if (inAppKey !== 'none') {
      switch (inAppKey) {
        case 'facebook':  uaString = buildFacebookAndroid(device, locale);  browserLabel = 'Facebook';  break;
        case 'instagram': uaString = buildInstagramAndroid(device);          browserLabel = 'Instagram'; break;
        case 'fblite':    uaString = buildFBLiteAndroid(device, locale);     browserLabel = 'FB Lite';   break;
        case 'twitter':   uaString = buildTwitterAndroid(device, locale);    browserLabel = 'Twitter/X'; break;
        case 'linkedin':  uaString = buildLinkedInAndroid(device, locale);   browserLabel = 'LinkedIn';  break;
        case 'snapchat':  uaString = buildSnapchatAndroid(device);           browserLabel = 'Snapchat';  break;
        case 'tiktok':    uaString = buildTikTokAndroid(device, locale);     browserLabel = 'TikTok';    break;
        default:          uaString = buildAndroidChrome(device);             browserLabel = 'Chrome';
      }
    } else {
      switch (br) {
        case 'chrome':  uaString = buildAndroidChrome(device);  browserLabel = 'Chrome';          break;
        case 'firefox': uaString = buildAndroidFirefox(device); browserLabel = 'Firefox';         break;
        case 'browser': uaString = buildAndroidBrowser(device); browserLabel = 'Android Browser'; break;
        case 'opera':   uaString = buildAndroidOpera(device);   browserLabel = 'Opera';           break;
        default:        uaString = buildAndroidChrome(device);  browserLabel = 'Chrome';
      }
    }
    return { uaString, deviceKey:dev, browserKey:br, deviceLabel, browserLabel, inApp:inAppKey, locale };
  }

  /* ══════════════════════════════
     IPHONE
  ══════════════════════════════ */
  if (dev === 'iphone') {
    const ip    = randomFromArray(IPHONE_VERSIONS);
    deviceLabel = 'iPhone';

    if (inAppKey !== 'none') {
      switch (inAppKey) {
        case 'facebook':  uaString = buildFacebookIOS(ip, locale);  browserLabel = 'Facebook';  break;
        case 'instagram': uaString = buildInstagramIOS(ip);          browserLabel = 'Instagram'; break;
        case 'fblite':    uaString = buildFacebookIOS(ip, locale);   browserLabel = 'FB Lite';   break;
        case 'twitter':   uaString = buildTwitterIOS(ip, locale);    browserLabel = 'Twitter/X'; break;
        case 'linkedin':  uaString = buildLinkedInIOS(ip, locale);   browserLabel = 'LinkedIn';  break;
        case 'snapchat':  uaString = buildSnapchatIOS(ip);           browserLabel = 'Snapchat';  break;
        case 'tiktok':    uaString = buildTikTokIOS(ip, locale);     browserLabel = 'TikTok';    break;
        default:          uaString = buildIPhoneSafari(ip);          browserLabel = 'Safari';
      }
    } else {
      switch (br) {
        case 'safari':   uaString = buildIPhoneSafari(ip);  browserLabel = 'Safari';  break;
        case 'chrome':   uaString = buildIPhoneChrome(ip);  browserLabel = 'Chrome';  break;
        case 'firefox':  uaString = buildIPhoneFirefox(ip); browserLabel = 'Firefox'; break;
        default:         uaString = buildIPhoneSafari(ip);  browserLabel = 'Safari';
      }
    }
    return { uaString, deviceKey:dev, browserKey:br, deviceLabel, browserLabel, inApp:inAppKey, locale };
  }

  /* ══════════════════════════════
     IPAD
  ══════════════════════════════ */
  if (dev === 'ipad') {
    const ip    = randomFromArray(IPAD_VERSIONS);
    deviceLabel = 'iPad';

    if (inAppKey !== 'none') {
      const fakeIP = randomFromArray(IPHONE_VERSIONS);
      switch (inAppKey) {
        case 'facebook':  uaString = buildFacebookIOS(fakeIP, locale); browserLabel = 'Facebook';  break;
        case 'instagram': uaString = buildInstagramIOS(fakeIP);         browserLabel = 'Instagram'; break;
        case 'snapchat':  uaString = buildSnapchatIOS(fakeIP);          browserLabel = 'Snapchat';  break;
        case 'tiktok':    uaString = buildTikTokIOS(fakeIP, locale);    browserLabel = 'TikTok';    break;
        default:          uaString = buildIPadSafari(ip);               browserLabel = 'Safari';
      }
    } else {
      switch (br) {
        case 'safari':  uaString = buildIPadSafari(ip); browserLabel = 'Safari'; break;
        case 'chrome':  uaString = buildIPadChrome(ip); browserLabel = 'Chrome'; break;
        default:        uaString = buildIPadSafari(ip); browserLabel = 'Safari';
      }
    }
    return { uaString, deviceKey:dev, browserKey:br, deviceLabel, browserLabel, inApp:inAppKey, locale };
  }

  /* ══════════════════════════════
     WINDOWS
  ══════════════════════════════ */
  if (dev === 'windows') {
    const w = randomFromArray(WINDOWS_VERSIONS);
    deviceLabel = 'Windows';
    switch (br) {
      case 'chrome':  { const s = buildWindowsChrome(w); uaString = s; browserLabel = s.includes('Edg/') ? 'Edge' : 'Chrome'; break; }
      case 'firefox': uaString = buildWindowsFirefox(w); browserLabel = 'Firefox'; break;
      case 'opera':   uaString = buildWindowsOpera(w);   browserLabel = 'Opera';   break;
      default:        uaString = buildWindowsChrome(w);  browserLabel = 'Chrome';
    }
    return { uaString, deviceKey:dev, browserKey:br, deviceLabel, browserLabel, inApp:inAppKey, locale };
  }

  /* ══════════════════════════════
     MACOS
  ══════════════════════════════ */
  if (dev === 'macos') {
    const m = randomFromArray(MACOS_VERSIONS);
    deviceLabel = 'macOS';
    switch (br) {
      case 'chrome':  uaString = buildMacChrome(m);  browserLabel = 'Chrome';  break;
      case 'safari':  uaString = buildMacSafari(m);  browserLabel = 'Safari';  break;
      case 'firefox': uaString = buildMacFirefox(m); browserLabel = 'Firefox'; break;
      case 'opera':   uaString = buildMacOpera(m);   browserLabel = 'Opera';   break;
      default:        uaString = buildMacChrome(m);  browserLabel = 'Chrome';
    }
    return { uaString, deviceKey:dev, browserKey:br, deviceLabel, browserLabel, inApp:inAppKey, locale };
  }

  // Fallback
  const w = randomFromArray(WINDOWS_VERSIONS);
  return { uaString:buildWindowsChrome(w), deviceKey:'windows', browserKey:'chrome', deviceLabel:'Windows', browserLabel:'Chrome', inApp:'none', locale };
}

/* ============================================================
   STATE
   ============================================================ */
let generatedUAs = [];

/* ============================================================
   MAIN — generateUserAgents()
   ============================================================ */
function generateUserAgents() {
  const deviceKey  = document.getElementById('deviceFilter').value;
  const browserKey = document.getElementById('browserFilter').value;
  const inAppKey   = document.getElementById('inAppFilter').value;
  const countryKey = document.getElementById('countryFilter').value;
  const qty        = Math.min(20, Math.max(1, parseInt(document.getElementById('quantityInput').value) || 5));

  const btn = document.getElementById('generateBtn');
  btn.classList.add('loading');
  btn.innerHTML = '<span class="btn-icon">⚡</span> GENERATING...';

  setTimeout(() => {
    generatedUAs = [];
    const seen   = new Set();
    let attempts = 0;

    while (generatedUAs.length < qty && attempts < qty * 40) {
      attempts++;
      const locale = getRandomLocale(countryKey);
      const ua     = generateSingleUA(deviceKey, browserKey, inAppKey, locale);
      if (!seen.has(ua.uaString)) {
        seen.add(ua.uaString);
        ua.locale = locale;
        generatedUAs.push(ua);
      }
    }

    renderResults(generatedUAs);
    updateStats(deviceKey, browserKey, countryKey, generatedUAs.length);

    btn.classList.remove('loading');
    btn.innerHTML = '<span class="btn-icon">⚡</span>Generate User Agents';
    document.getElementById('copyAllBtn').disabled  = false;
    document.getElementById('downloadBtn').disabled = false;
    document.getElementById('clearBtn').disabled    = false;

    showToast('Generated Successfully!', 'success');
  }, 180);
}

/* ============================================================
   RENDER
   ============================================================ */
function highlightUA(uaStr) {
  return uaStr
    .replace(/(Mozilla\/[\d.]+)/g,
      '<span class="hl-version">$1</span>')
    .replace(/\(([^)]+)\)/g,
      (_, inner) => `(<span class="hl-device">${inner}</span>)`)
    .replace(/\[([^\]]+)\]/g,
      (_, inner) => `[<span class="hl-app">${inner}</span>]`)
    .replace(/(Chrome|CriOS|Firefox|FxiOS|Safari|OPR|Edg|Version)(\/)([\d.]+)/g,
      '<span class="hl-browser">$1</span>$2<span class="hl-version">$3</span>')
    .replace(/\b(Instagram|TikTok|Snapchat|TwitteriPhone|TwitterAndroid|LinkedInApp|FB_IAB|FBAN|FBLC|FBAV)\b/g,
      '<span class="hl-app">$1</span>');
}

function renderResults(uas) {
  const box     = document.getElementById('outputBox');
  const section = document.getElementById('outputSection');
  const count   = document.getElementById('outputCount');

  section.style.display = 'block';
  count.textContent = `[ ${uas.length} USER AGENT${uas.length !== 1 ? 'S' : ''} GENERATED ]`;
  box.innerHTML = '';

  uas.forEach((ua, idx) => {
    const card = document.createElement('div');
    card.className = 'ua-card';
    card.style.animationDelay = `${idx * 50}ms`;

    const deviceIcon  = DEVICE_ICONS[ua.deviceKey]  || '💻';
    const browserIcon = BROWSER_ICONS[ua.browserKey] || '🌐';
    const localeObj   = ua.locale;
    const inAppIcon   = ua.inApp !== 'none' ? (APP_ICONS[ua.inApp] || '📱') : null;

    const metaHtml = `
      <div class="ua-meta-tags">
        <span class="meta-tag device">${deviceIcon} ${ua.deviceLabel}</span>
        <span class="meta-tag browser">${browserIcon} ${ua.browserLabel}</span>
        ${localeObj ? `<span class="meta-tag country">${localeObj.flag} ${localeObj.label}</span>` : ''}
        ${inAppIcon ? `<span class="meta-tag inapp">${inAppIcon} ${ua.inApp.charAt(0).toUpperCase()+ua.inApp.slice(1)}</span>` : ''}
      </div>`;

    card.innerHTML = `
      <div class="ua-card-header">
        ${metaHtml}
        <span class="ua-index">#${String(idx+1).padStart(2,'0')}</span>
      </div>
      <div class="ua-string-label">// USER_AGENT_STRING</div>
      <div class="ua-string" id="ua-str-${idx}">${highlightUA(ua.uaString)}</div>
      <div class="ua-card-footer">
        <button class="btn-copy-single" id="copy-btn-${idx}" onclick="copySingleUA(${idx})">⎘ COPY</button>
      </div>`;

    box.appendChild(card);
  });

  section.scrollIntoView({ behavior:'smooth', block:'start' });
}

/* ============================================================
   STATS
   ============================================================ */
function updateStats(deviceKey, browserKey, countryKey, count) {
  document.getElementById('statsBar').style.display   = 'flex';
  document.getElementById('statCount').textContent    = count;
  document.getElementById('statDevice').textContent   = deviceKey  === 'all' ? 'Mixed'  : deviceKey.toUpperCase();
  document.getElementById('statBrowser').textContent  = browserKey === 'all' ? 'Mixed'  : browserKey.toUpperCase();
  document.getElementById('statCountry').textContent  = countryKey === 'all' ? 'Global' : (LOCALE_MAP[countryKey]?.locale || '—');
}

/* ============================================================
   COPY / DOWNLOAD / CLEAR
   ============================================================ */
function copySingleUA(idx) {
  const ua  = generatedUAs[idx];
  const btn = document.getElementById(`copy-btn-${idx}`);
  if (!ua || !btn) return;
  navigator.clipboard.writeText(ua.uaString).then(() => {
    btn.textContent = '✔ COPIED';
    btn.classList.add('copied');
    showToast('Copied!');
    setTimeout(() => { btn.textContent = '⎘ COPY'; btn.classList.remove('copied'); }, 2000);
  }).catch(() => fallbackCopy(ua.uaString));
}

function copyAllUA() {
  if (!generatedUAs.length) return;
  const text = generatedUAs.map(u => u.uaString).join('\n');
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${generatedUAs.length} user agents!`, 'success');
  }).catch(() => fallbackCopy(text));
}

function downloadTXT() {
  if (!generatedUAs.length) return;
  const lines = generatedUAs.map((ua, i) =>
    `# ${i+1} | ${ua.deviceLabel} | ${ua.browserLabel} | ${ua.locale ? ua.locale.locale : 'Global'}${ua.inApp !== 'none' ? ' | '+ua.inApp : ''}\n${ua.uaString}`
  ).join('\n\n');
  const header = `# User Agent Generator Export\n# Generated: ${new Date().toISOString()}\n# Count: ${generatedUAs.length}\n${'─'.repeat(80)}\n\n`;
  const blob = new Blob([header + lines], { type:'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `user-agents-${Date.now()}.txt`; a.click();
  URL.revokeObjectURL(url);
  showToast('Downloaded!', 'success');
}

function clearResults() {
  generatedUAs = [];
  document.getElementById('outputBox').innerHTML         = '';
  document.getElementById('outputSection').style.display = 'none';
  document.getElementById('statsBar').style.display      = 'none';
  document.getElementById('copyAllBtn').disabled         = true;
  document.getElementById('downloadBtn').disabled        = true;
  document.getElementById('clearBtn').disabled           = true;
  showToast('Cleared!');
}

function fallbackCopy(text) {
  const el = document.createElement('textarea');
  el.value = text;
  el.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  showToast('Copied!');
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;
function showToast(msg, type='') {
  const toast = document.getElementById('toast');
  toast.textContent = `[ ${msg} ]`;
  toast.className   = 'toast show' + (type ? ' '+type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, 2200);
}

/* ============================================================
   QUANTITY CONTROLS
   ============================================================ */
document.getElementById('qtyMinus').addEventListener('click', () => {
  const inp = document.getElementById('quantityInput');
  inp.value = Math.max(1, (parseInt(inp.value) || 5) - 1);
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  const inp = document.getElementById('quantityInput');
  inp.value = Math.min(20, (parseInt(inp.value) || 5) + 1);
});
document.getElementById('quantityInput').addEventListener('input', function () {
  let v = parseInt(this.value);
  if (isNaN(v)) return;
  if (v < 1)  this.value = 1;
  if (v > 20) this.value = 20;
});

/* ── Enter key = Generate ── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
    generateUserAgents();
  }
});
