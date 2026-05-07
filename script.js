/* ========================================
   USER AGENT GENERATOR — CORE LOGIC
   ======================================== */

'use strict';

/* ============================================================
   DATA ARRAYS
   ============================================================ */

const DATA = {

  android: {
    devices: [
      // Samsung Galaxy S Series
      { name: 'SM-S928B', model: 'Samsung Galaxy S24 Ultra', os: '14' },
      { name: 'SM-S918B', model: 'Samsung Galaxy S23 Ultra', os: '13' },
      { name: 'SM-S908B', model: 'Samsung Galaxy S22 Ultra', os: '12' },
      { name: 'SM-S926B', model: 'Samsung Galaxy S24+', os: '14' },
      { name: 'SM-S916B', model: 'Samsung Galaxy S23+', os: '13' },
      { name: 'SM-G998B', model: 'Samsung Galaxy S21 Ultra', os: '12' },
      // Samsung Galaxy A Series
      { name: 'SM-A546B', model: 'Samsung Galaxy A54', os: '13' },
      { name: 'SM-A536B', model: 'Samsung Galaxy A53', os: '12' },
      { name: 'SM-A736B', model: 'Samsung Galaxy A73', os: '12' },
      { name: 'SM-A256B', model: 'Samsung Galaxy A25', os: '14' },
      // Google Pixel
      { name: 'Pixel 9 Pro', model: 'Google Pixel 9 Pro', os: '15' },
      { name: 'Pixel 8 Pro', model: 'Google Pixel 8 Pro', os: '14' },
      { name: 'Pixel 8', model: 'Google Pixel 8', os: '14' },
      { name: 'Pixel 7 Pro', model: 'Google Pixel 7 Pro', os: '13' },
      { name: 'Pixel 7', model: 'Google Pixel 7', os: '13' },
      { name: 'Pixel 6 Pro', model: 'Google Pixel 6 Pro', os: '13' },
      { name: 'Pixel 6', model: 'Google Pixel 6', os: '12' },
      // OnePlus
      { name: 'CPH2581', model: 'OnePlus 12', os: '14' },
      { name: 'CPH2449', model: 'OnePlus 11', os: '13' },
      { name: 'CPH2399', model: 'OnePlus 10 Pro', os: '12' },
      // Xiaomi
      { name: '2311DRK48G', model: 'Xiaomi 14 Pro', os: '14' },
      { name: '23049PCD8G', model: 'Xiaomi 13 Pro', os: '13' },
      { name: '22081212UG', model: 'Xiaomi 12 Pro', os: '12' },
      { name: '22111317I', model: 'Redmi Note 12 Pro', os: '12' },
      { name: '23090RA98G', model: 'Redmi Note 13 Pro', os: '13' },
      // Oppo
      { name: 'CPH2525', model: 'OPPO Find X7 Pro', os: '14' },
      { name: 'CPH2305', model: 'OPPO Find X5 Pro', os: '12' },
      // Motorola
      { name: 'moto g84 5G', model: 'Motorola Moto G84 5G', os: '13' },
      { name: 'motorola edge 40 pro', model: 'Motorola Edge 40 Pro', os: '13' },
      { name: 'motorola razr 40 ultra', model: 'Motorola Razr 40 Ultra', os: '13' },
      // Realme
      { name: 'RMX3900', model: 'Realme GT 5 Pro', os: '14' },
      { name: 'RMX3761', model: 'Realme 11 Pro+', os: '13' },
    ]
  },

  iphone: {
    versions: [
      { name: 'iPhone16,2', label: 'iPhone 16 Pro Max', ios: '18_1', iosFull: '18.1' },
      { name: 'iPhone16,1', label: 'iPhone 16 Pro', ios: '18_0', iosFull: '18.0' },
      { name: 'iPhone15,5', label: 'iPhone 15 Pro Max', ios: '17_6', iosFull: '17.6' },
      { name: 'iPhone15,4', label: 'iPhone 15 Pro', ios: '17_5', iosFull: '17.5' },
      { name: 'iPhone15,3', label: 'iPhone 15 Plus', ios: '17_4', iosFull: '17.4' },
      { name: 'iPhone15,2', label: 'iPhone 15', ios: '17_4', iosFull: '17.4' },
      { name: 'iPhone14,3', label: 'iPhone 14 Pro Max', ios: '17_2', iosFull: '17.2' },
      { name: 'iPhone14,2', label: 'iPhone 14 Pro', ios: '17_1', iosFull: '17.1' },
      { name: 'iPhone14,8', label: 'iPhone 14 Plus', ios: '16_7', iosFull: '16.7' },
      { name: 'iPhone14,5', label: 'iPhone 14', ios: '16_6', iosFull: '16.6' },
      { name: 'iPhone13,4', label: 'iPhone 13 Pro Max', ios: '16_5', iosFull: '16.5' },
      { name: 'iPhone13,3', label: 'iPhone 13 Pro', ios: '16_4', iosFull: '16.4' },
      { name: 'iPhone13,2', label: 'iPhone 13', ios: '16_2', iosFull: '16.2' },
      { name: 'iPhone12,5', label: 'iPhone 11 Pro Max', ios: '15_7', iosFull: '15.7' },
      { name: 'iPhone12,3', label: 'iPhone 11 Pro', ios: '15_6', iosFull: '15.6' },
    ]
  },

  ipad: {
    versions: [
      { name: 'iPad16,6', label: 'iPad Pro 13-inch (M4)', ios: '17_5', iosFull: '17.5' },
      { name: 'iPad16,4', label: 'iPad Pro 11-inch (M4)', ios: '17_5', iosFull: '17.5' },
      { name: 'iPad14,6', label: 'iPad Pro 12.9-inch (M2)', ios: '17_3', iosFull: '17.3' },
      { name: 'iPad14,4', label: 'iPad Pro 11-inch (M2)', ios: '17_2', iosFull: '17.2' },
      { name: 'iPad13,19', label: 'iPad (10th gen)', ios: '16_7', iosFull: '16.7' },
      { name: 'iPad13,16', label: 'iPad Air (M1)', ios: '16_5', iosFull: '16.5' },
      { name: 'iPad14,3', label: 'iPad Pro 11-inch (M2)', ios: '17_0', iosFull: '17.0' },
      { name: 'iPad13,8', label: 'iPad Pro 12.9-inch (5th gen)', ios: '16_3', iosFull: '16.3' },
    ]
  },

  windows: {
    versions: [
      { nt: '10.0', arch: 'Win64; x64', label: 'Windows 10 64-bit' },
      { nt: '10.0', arch: 'Win64; x64', label: 'Windows 11 64-bit' },
      { nt: '10.0', arch: 'WOW64', label: 'Windows 10 32-bit on 64-bit' },
      { nt: '6.3', arch: 'Win64; x64', label: 'Windows 8.1 64-bit' },
      { nt: '6.1', arch: 'Win64; x64', label: 'Windows 7 64-bit' },
    ]
  },

  macos: {
    versions: [
      { version: '10_15_7', safari: '605.1.15', label: 'macOS Catalina' },
      { version: '11_0',    safari: '605.1.15', label: 'macOS Big Sur' },
      { version: '12_6',    safari: '605.1.15', label: 'macOS Monterey' },
      { version: '13_0',    safari: '605.1.15', label: 'macOS Ventura' },
      { version: '13_6',    safari: '605.1.15', label: 'macOS Ventura' },
      { version: '14_0',    safari: '605.1.15', label: 'macOS Sonoma' },
      { version: '14_2_1',  safari: '605.1.15', label: 'macOS Sonoma' },
      { version: '14_5',    safari: '605.1.15', label: 'macOS Sonoma' },
    ]
  },

  chrome: {
    versions: ['135.0.0.0', '134.0.0.0', '133.0.0.0', '132.0.0.0', '131.0.0.0',
               '130.0.0.0', '129.0.6668.103', '128.0.6613.120', '127.0.6533.119',
               '126.0.6478.127', '125.0.6422.142', '124.0.6367.208']
  },

  firefox: {
    versions: ['136.0', '135.0', '134.0', '133.0', '132.0', '131.0', '130.0',
               '129.0', '128.0', '127.0', '126.0', '125.0', '124.0.1', '123.0']
  },

  safari: {
    versions: ['17.4', '17.3', '17.2', '17.1', '17.0', '16.6', '16.5', '16.4', '16.3', '16.1', '15.6']
  },

  opera: {
    versions: ['117.0.0.0', '116.0.0.0', '115.0.0.0', '114.0.0.0', '113.0.0.0',
               '112.0.5197.53', '111.0.5168.55', '110.0.5130.49']
  },

  webkit: {
    versions: ['537.36', '537.36', '537.36', '605.1.15']
  },

  inApp: {
    facebook: {
      iosVersions:     ['460.0.0.45.109', '440.0.0.0.209', '420.1.0.32.96', '390.0.0.3.105'],
      androidVersions: ['464.0.0.0.46', '445.0.0.3.119', '420.0.0.36.112', '380.0.0.19.103'],
    },
    instagram: {
      androidVersions: ['325.0.0.0', '315.0.0.0', '305.0.0.0', '295.0.0.0', '285.0.0.0'],
      iosVersions:     ['324.0.0.0', '310.0.0.0', '299.0.0.0'],
    },
    fblite: {
      versions: ['390.0.0.0', '380.0.0.0', '370.0.0.0', '360.0.0.0', '350.0.0.0'],
    },
    twitter: {
      iosVersions:     ['10.47.0', '10.45.0', '10.43.0', '10.40.0'],
      androidVersions: ['10.47.0', '10.45.0', '10.43.0', '10.40.0'],
    },
    linkedin: {
      iosVersions:     ['9.29.5895', '9.28.5700', '9.27.5400'],
      androidVersions: ['9.29.500', '9.28.490', '9.27.480'],
    },
    snapchat: {
      iosVersions:     ['12.77.0.35', '12.76.0.35', '12.74.0.35'],
      androidVersions: ['12.77.0.44', '12.76.0.44', '12.74.0.44'],
    },
    tiktok: {
      iosVersions:     ['36.1.2', '35.9.4', '35.5.3', '34.9.5'],
      androidVersions: ['36.1.3', '35.9.5', '35.5.4', '34.9.6'],
    },
  }
};

/* ============================================================
   COUNTRY → LOCALE MAP
   ============================================================ */

const LOCALE_MAP = {
  all:         null,
  usa:         { locale: 'en-US', label: 'USA',         flag: '🇺🇸' },
  uk:          { locale: 'en-GB', label: 'UK',          flag: '🇬🇧' },
  india:       { locale: 'en-IN', label: 'India',       flag: '🇮🇳' },
  canada:      { locale: 'en-CA', label: 'Canada',      flag: '🇨🇦' },
  australia:   { locale: 'en-AU', label: 'Australia',   flag: '🇦🇺' },
  germany:     { locale: 'de-DE', label: 'Germany',     flag: '🇩🇪' },
  mexico:      { locale: 'es-MX', label: 'Mexico',      flag: '🇲🇽' },
  japan:       { locale: 'ja-JP', label: 'Japan',       flag: '🇯🇵' },
  netherlands: { locale: 'nl-NL', label: 'Netherlands', flag: '🇳🇱' },
  russia:      { locale: 'ru-RU', label: 'Russia',      flag: '🇷🇺' },
  turkey:      { locale: 'tr-TR', label: 'Turkey',      flag: '🇹🇷' },
};

/* ============================================================
   DEVICE / BROWSER ICON MAP
   ============================================================ */

const DEVICE_ICONS = {
  iphone: '📱', ipad: '📲', android: '🤖',
  windows: '🖥️', macos: '🍎'
};
const BROWSER_ICONS = {
  chrome: '🌐', firefox: '🦊', safari: '🧭', opera: '⭕', browser: '📡'
};
const APP_ICONS = {
  facebook: '📘', instagram: '📸', fblite: '💙',
  twitter: '🐦', linkedin: '💼', snapchat: '👻', tiktok: '🎵'
};

/* ============================================================
   UTILITY
   ============================================================ */

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLocale(countryKey) {
  if (countryKey === 'all') {
    const keys = Object.keys(LOCALE_MAP).filter(k => k !== 'all');
    return LOCALE_MAP[randomFromArray(keys)];
  }
  return LOCALE_MAP[countryKey];
}

/* ============================================================
   USER AGENT BUILDERS
   ============================================================ */

function buildAndroidChromeUA(device, chromeVer) {
  return `Mozilla/5.0 (Linux; Android ${device.os}; ${device.name}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Mobile Safari/537.36`;
}

function buildAndroidFirefoxUA(device, ffVer) {
  return `Mozilla/5.0 (Android ${device.os}; Mobile; rv:${ffVer}) Gecko/${ffVer} Firefox/${ffVer}`;
}

function buildAndroidBrowserUA(device) {
  const wkVer = `533.${randomInt(1, 12)}`;
  return `Mozilla/5.0 (Linux; U; Android ${device.os}; en-us; ${device.name} Build/KOT49H) AppleWebKit/${wkVer} (KHTML, like Gecko) Version/4.0 Mobile Safari/${wkVer}`;
}

function buildAndroidOperaUA(device, chromeVer, operaVer) {
  return `Mozilla/5.0 (Linux; Android ${device.os}; ${device.name}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Mobile Safari/537.36 OPR/${operaVer}`;
}

function buildIPhoneSafariUA(iphone) {
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${iphone.iosFull.split('.').slice(0,2).join('.')}.0 Mobile/15E148 Safari/604.1`;
}

function buildIPhoneChromeUA(iphone, chromeVer) {
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${chromeVer} Mobile/15E148 Safari/604.1`;
}

function buildIPhoneFirefoxUA(iphone, ffVer) {
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/${ffVer} Mobile/15E148 Safari/605.1.15`;
}

function buildIPadSafariUA(ipad) {
  return `Mozilla/5.0 (iPad; CPU OS ${ipad.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${ipad.iosFull.split('.').slice(0,2).join('.')}.0 Mobile/15E148 Safari/604.1`;
}

function buildIPadChromeUA(ipad, chromeVer) {
  return `Mozilla/5.0 (iPad; CPU OS ${ipad.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${chromeVer} Mobile/15E148 Safari/604.1`;
}

function buildWindowsChromeUA(win, chromeVer) {
  return `Mozilla/5.0 (Windows NT ${win.nt}; ${win.arch}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Safari/537.36`;
}

function buildWindowsFirefoxUA(win, ffVer) {
  return `Mozilla/5.0 (Windows NT ${win.nt}; ${win.arch}; rv:${ffVer}) Gecko/20100101 Firefox/${ffVer}`;
}

function buildWindowsOperaUA(win, chromeVer, operaVer) {
  return `Mozilla/5.0 (Windows NT ${win.nt}; ${win.arch}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Safari/537.36 OPR/${operaVer}`;
}

function buildWindowsEdgeUA(win, chromeVer) {
  const edgeVer = chromeVer.replace(/\.\d+$/, `.${randomInt(1000, 2000)}`);
  return `Mozilla/5.0 (Windows NT ${win.nt}; ${win.arch}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Safari/537.36 Edg/${edgeVer}`;
}

function buildMacChromeUA(mac, chromeVer) {
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${mac.version}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Safari/537.36`;
}

function buildMacSafariUA(mac) {
  const safVer = randomFromArray(DATA.safari.versions);
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${mac.version}) AppleWebKit/${mac.safari} (KHTML, like Gecko) Version/${safVer} Safari/${mac.safari}`;
}

function buildMacFirefoxUA(mac, ffVer) {
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${mac.version}; rv:${ffVer}) Gecko/20100101 Firefox/${ffVer}`;
}

function buildMacOperaUA(mac, chromeVer, operaVer) {
  return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${mac.version}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Safari/537.36 OPR/${operaVer}`;
}

/* ---- IN-APP BROWSER SUFFIXES ---- */

function applyFacebookAndroid(base, device) {
  const fbVer = randomFromArray(DATA.inApp.facebook.androidVersions);
  return `${base} [FBAN/FB4A;FBAV/${fbVer};FBDV/${device.name};FBMD/android;FBSN/Android;FBSV/${device.os};FBSS/3;FBID/phone;FBLC/en_US;FBOP/1]`;
}

function applyFacebookIOS(base, iphone) {
  const fbVer = randomFromArray(DATA.inApp.facebook.iosVersions);
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/${iphone.name};FBMD/iPhone;FBSN/iPhone OS;FBSV/${iphone.iosFull};FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/;FBAV/${fbVer}]`;
}

function applyInstagramAndroid(base, device) {
  const igVer = randomFromArray(DATA.inApp.instagram.androidVersions);
  return `${base} Instagram ${igVer} Android (${randomInt(28, 35)}/${device.os}; 420dpi; 1080x2400; ${device.model.split(' ')[0]}; ${device.model}; ${device.name}; arm64-v8a)`;
}

function applyInstagramIOS(base, iphone) {
  const igVer = randomFromArray(DATA.inApp.instagram.iosVersions);
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram/${igVer} (iPhone${iphone.name.replace('iPhone', '')};iOS/${iphone.iosFull};Scale/3.00)`;
}

function applyFBLiteAndroid(base, device) {
  const ver = randomFromArray(DATA.inApp.fblite.versions);
  return `${base} [FBAN/FB4A;FBAV/${ver};FBDV/${device.name};FBMD/android;FBSN/Android;FBSV/${device.os};FBLite/1]`;
}

function applyTwitterAndroid(base, device) {
  const ver = randomFromArray(DATA.inApp.twitter.androidVersions);
  return `${base} TwitterAndroid/${ver}`;
}

function applyTwitterIOS(base, iphone) {
  const ver = randomFromArray(DATA.inApp.twitter.iosVersions);
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Twitter/${ver}`;
}

function applyLinkedInAndroid(base, device) {
  const ver = randomFromArray(DATA.inApp.linkedin.androidVersions);
  return `${base} LinkedInApp/${ver}`;
}

function applyLinkedInIOS(base, iphone) {
  const ver = randomFromArray(DATA.inApp.linkedin.iosVersions);
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LinkedInApp/${ver}`;
}

function applySnapchatAndroid(base, device) {
  const ver = randomFromArray(DATA.inApp.snapchat.androidVersions);
  return `${base} [SC;Android;${device.os};${ver}]`;
}

function applySnapchatIOS(base, iphone) {
  const ver = randomFromArray(DATA.inApp.snapchat.iosVersions);
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Snapchat/${ver} (${iphone.label}; iOS ${iphone.iosFull}; gzip)`;
}

function applyTikTokAndroid(base, device) {
  const ver = randomFromArray(DATA.inApp.tiktok.androidVersions);
  return `${base} TikTok/${ver} (Linux; U; Android ${device.os}; en_US; ${device.name}; Build/OPM1)`;
}

function applyTikTokIOS(base, iphone) {
  const ver = randomFromArray(DATA.inApp.tiktok.iosVersions);
  return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iphone.ios} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TikTok/${ver}`;
}

/* ============================================================
   CORE GENERATOR
   ============================================================ */

function generateSingleUA(deviceKey, browserKey, inAppKey) {

  const chromeVer  = randomFromArray(DATA.chrome.versions);
  const ffVer      = randomFromArray(DATA.firefox.versions);
  const operaVer   = randomFromArray(DATA.opera.versions);

  let uaString    = '';
  let deviceLabel = '';
  let browserLabel= '';

  // ---- Resolve effective device ----
  let effectiveDevice = deviceKey;
  if (deviceKey === 'all') {
    const allDevices = ['iphone', 'ipad', 'android', 'windows', 'macos'];
    effectiveDevice = randomFromArray(allDevices);
  }

  // ---- Resolve effective browser ----
  let effectiveBrowser = browserKey;
  if (browserKey === 'all') {
    const browsersByDevice = {
      iphone:  ['safari', 'chrome', 'firefox'],
      ipad:    ['safari', 'chrome', 'firefox'],
      android: ['chrome', 'firefox', 'browser', 'opera'],
      windows: ['chrome', 'firefox', 'opera'],
      macos:   ['chrome', 'safari', 'firefox', 'opera'],
    };
    effectiveBrowser = randomFromArray(browsersByDevice[effectiveDevice] || ['chrome']);
  }

  // ---- Force compatible combos ----
  // Safari only on Apple, Android Browser only on Android
  if (effectiveBrowser === 'safari' && ['android', 'windows'].includes(effectiveDevice)) {
    effectiveBrowser = 'chrome';
  }
  if (effectiveBrowser === 'browser' && ['iphone', 'ipad', 'windows', 'macos'].includes(effectiveDevice)) {
    effectiveBrowser = 'chrome';
  }

  // ---- Build base UA ----
  if (effectiveDevice === 'android') {
    const device = randomFromArray(DATA.android.devices);
    deviceLabel  = 'Android';

    switch (effectiveBrowser) {
      case 'chrome':   uaString = buildAndroidChromeUA(device, chromeVer);  browserLabel = 'Chrome'; break;
      case 'firefox':  uaString = buildAndroidFirefoxUA(device, ffVer);     browserLabel = 'Firefox'; break;
      case 'browser':  uaString = buildAndroidBrowserUA(device);            browserLabel = 'Android Browser'; break;
      case 'opera':    uaString = buildAndroidOperaUA(device, chromeVer, operaVer); browserLabel = 'Opera'; break;
      default:         uaString = buildAndroidChromeUA(device, chromeVer);  browserLabel = 'Chrome';
    }

    // Apply in-app
    if (inAppKey !== 'none') {
      switch (inAppKey) {
        case 'facebook':  uaString = applyFacebookAndroid(uaString, device); break;
        case 'instagram': uaString = applyInstagramAndroid(uaString, device); break;
        case 'fblite':    uaString = applyFBLiteAndroid(uaString, device); break;
        case 'twitter':   uaString = applyTwitterAndroid(uaString, device); break;
        case 'linkedin':  uaString = applyLinkedInAndroid(uaString, device); break;
        case 'snapchat':  uaString = applySnapchatAndroid(uaString, device); break;
        case 'tiktok':    uaString = applyTikTokAndroid(uaString, device); break;
      }
    }

    return { uaString, deviceKey: effectiveDevice, browserKey: effectiveBrowser, deviceLabel, browserLabel, inApp: inAppKey };
  }

  if (effectiveDevice === 'iphone') {
    const iphone = randomFromArray(DATA.iphone.versions);
    deviceLabel  = 'iPhone';

    if (inAppKey !== 'none') {
      switch (inAppKey) {
        case 'facebook':  uaString = applyFacebookIOS(null, iphone); browserLabel = 'Facebook'; break;
        case 'instagram': uaString = applyInstagramIOS(null, iphone); browserLabel = 'Instagram'; break;
        case 'twitter':   uaString = applyTwitterIOS(null, iphone); browserLabel = 'Twitter/X'; break;
        case 'linkedin':  uaString = applyLinkedInIOS(null, iphone); browserLabel = 'LinkedIn'; break;
        case 'snapchat':  uaString = applySnapchatIOS(null, iphone); browserLabel = 'Snapchat'; break;
        case 'tiktok':    uaString = applyTikTokIOS(null, iphone); browserLabel = 'TikTok'; break;
        case 'fblite':
          const baseUA = buildIPhoneSafariUA(iphone);
          uaString = applyFBLiteAndroid(baseUA, { name: iphone.name, os: iphone.iosFull, model: iphone.label });
          browserLabel = 'FB Lite';
          break;
        default: uaString = buildIPhoneSafariUA(iphone); browserLabel = 'Safari';
      }
    } else {
      switch (effectiveBrowser) {
        case 'safari':   uaString = buildIPhoneSafariUA(iphone);          browserLabel = 'Safari'; break;
        case 'chrome':   uaString = buildIPhoneChromeUA(iphone, chromeVer); browserLabel = 'Chrome'; break;
        case 'firefox':  uaString = buildIPhoneFirefoxUA(iphone, ffVer);  browserLabel = 'Firefox'; break;
        default:         uaString = buildIPhoneSafariUA(iphone);          browserLabel = 'Safari';
      }
    }

    return { uaString, deviceKey: effectiveDevice, browserKey: effectiveBrowser, deviceLabel, browserLabel, inApp: inAppKey };
  }

  if (effectiveDevice === 'ipad') {
    const ipad   = randomFromArray(DATA.ipad.versions);
    deviceLabel  = 'iPad';

    switch (effectiveBrowser) {
      case 'safari':   uaString = buildIPadSafariUA(ipad);          browserLabel = 'Safari'; break;
      case 'chrome':   uaString = buildIPadChromeUA(ipad, chromeVer); browserLabel = 'Chrome'; break;
      default:         uaString = buildIPadSafariUA(ipad);          browserLabel = 'Safari';
    }

    if (inAppKey !== 'none') {
      const appleDevice = { name: ipad.name, os: ipad.iosFull, model: ipad.label };
      switch (inAppKey) {
        case 'facebook':  uaString = applyFacebookAndroid(uaString, appleDevice); break;
        case 'instagram': uaString = applyInstagramAndroid(uaString, appleDevice); break;
        case 'twitter':   uaString = applyTwitterAndroid(uaString, appleDevice); break;
        case 'tiktok':    uaString = applyTikTokAndroid(uaString, appleDevice); break;
      }
    }

    return { uaString, deviceKey: effectiveDevice, browserKey: effectiveBrowser, deviceLabel, browserLabel, inApp: inAppKey };
  }

  if (effectiveDevice === 'windows') {
    const win   = randomFromArray(DATA.windows.versions);
    deviceLabel = 'Windows';

    switch (effectiveBrowser) {
      case 'chrome':   uaString = buildWindowsChromeUA(win, chromeVer);          browserLabel = 'Chrome'; break;
      case 'firefox':  uaString = buildWindowsFirefoxUA(win, ffVer);             browserLabel = 'Firefox'; break;
      case 'opera':    uaString = buildWindowsOperaUA(win, chromeVer, operaVer); browserLabel = 'Opera'; break;
      case 'safari':   uaString = buildWindowsChromeUA(win, chromeVer);          browserLabel = 'Chrome'; break;
      default:         uaString = buildWindowsChromeUA(win, chromeVer);          browserLabel = 'Chrome';
    }

    return { uaString, deviceKey: effectiveDevice, browserKey: effectiveBrowser, deviceLabel, browserLabel, inApp: inAppKey };
  }

  if (effectiveDevice === 'macos') {
    const mac   = randomFromArray(DATA.macos.versions);
    deviceLabel = 'macOS';

    switch (effectiveBrowser) {
      case 'chrome':   uaString = buildMacChromeUA(mac, chromeVer);          browserLabel = 'Chrome'; break;
      case 'safari':   uaString = buildMacSafariUA(mac);                      browserLabel = 'Safari'; break;
      case 'firefox':  uaString = buildMacFirefoxUA(mac, ffVer);              browserLabel = 'Firefox'; break;
      case 'opera':    uaString = buildMacOperaUA(mac, chromeVer, operaVer);  browserLabel = 'Opera'; break;
      default:         uaString = buildMacChromeUA(mac, chromeVer);          browserLabel = 'Chrome';
    }

    return { uaString, deviceKey: effectiveDevice, browserKey: effectiveBrowser, deviceLabel, browserLabel, inApp: inAppKey };
  }

  // Fallback
  return { uaString: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Safari/537.36`, deviceKey: 'windows', browserKey: 'chrome', deviceLabel: 'Windows', browserLabel: 'Chrome', inApp: 'none' };
}

/* ============================================================
   STATE
   ============================================================ */

let generatedUAs = [];

/* ============================================================
   MAIN GENERATE FUNCTION
   ============================================================ */

function generateUserAgents() {
  const deviceKey  = document.getElementById('deviceFilter').value;
  const browserKey = document.getElementById('browserFilter').value;
  const inAppKey   = document.getElementById('inAppFilter').value;
  const countryKey = document.getElementById('countryFilter').value;
  const qty        = Math.min(20, Math.max(1, parseInt(document.getElementById('quantityInput').value) || 5));

  const btn = document.getElementById('generateBtn');
  btn.classList.add('loading');
  btn.textContent = '⚡ GENERATING...';

  setTimeout(() => {
    generatedUAs = [];
    const seen = new Set();
    let attempts = 0;

    while (generatedUAs.length < qty && attempts < qty * 10) {
      attempts++;
      const locale = getRandomLocale(countryKey);
      const ua     = generateSingleUA(deviceKey, browserKey, inAppKey);
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
    card.style.animationDelay = `${idx * 55}ms`;

    const deviceIcon  = DEVICE_ICONS[ua.deviceKey]  || '💻';
    const browserIcon = BROWSER_ICONS[ua.browserKey] || '🌐';
    const inAppIcon   = ua.inApp !== 'none' ? (APP_ICONS[ua.inApp] || '📱') : null;
    const localeObj   = ua.locale;

    const metaHtml = `
      <div class="ua-meta-tags">
        <span class="meta-tag device">${deviceIcon} ${ua.deviceLabel}</span>
        <span class="meta-tag browser">${browserIcon} ${ua.browserLabel}</span>
        ${localeObj ? `<span class="meta-tag country">${localeObj.flag} ${localeObj.label}</span>` : ''}
        ${inAppIcon && ua.inApp !== 'none' ? `<span class="meta-tag inapp">${inAppIcon} ${ua.inApp.charAt(0).toUpperCase() + ua.inApp.slice(1)}</span>` : ''}
      </div>
    `;

    const highlighted = highlightUA(ua.uaString);

    card.innerHTML = `
      <div class="ua-card-header">
        ${metaHtml}
        <span class="ua-index">#${String(idx + 1).padStart(2, '0')}</span>
      </div>
      <div class="ua-string-label">// USER_AGENT_STRING</div>
      <div class="ua-string" id="ua-str-${idx}">${highlighted}</div>
      <div class="ua-card-footer">
        <button class="btn-copy-single" id="copy-btn-${idx}" onclick="copySingleUA(${idx})">
          ⎘ COPY
        </button>
      </div>
    `;

    box.appendChild(card);
  });

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Simple syntax-like highlighting */
function highlightUA(uaStr) {
  return uaStr
    .replace(/(Mozilla\/[\d.]+)/g,               '<span class="hl-version">$1</span>')
    .replace(/\((.*?)\)/g,                        (_, inner) => `(<span class="hl-device">${inner}</span>)`)
    .replace(/(Chrome|Firefox|Safari|CriOS|FxiOS|Version|OPR)(\/)([^\s;)]+)/g,
              '<span class="hl-browser">$1</span>$2<span class="hl-version">$3</span>')
    .replace(/(Instagram|FBAN|TikTok|Twitter|LinkedIn|Snapchat)\b/g,
              '<span class="hl-app">$1</span>');
}

/* ============================================================
   STATS
   ============================================================ */

function updateStats(deviceKey, browserKey, countryKey, count) {
  const bar = document.getElementById('statsBar');
  bar.style.display = 'flex';

  document.getElementById('statCount').textContent   = count;
  document.getElementById('statDevice').textContent  = deviceKey === 'all'     ? 'Mixed'  : deviceKey.toUpperCase();
  document.getElementById('statBrowser').textContent = browserKey === 'all'    ? 'Mixed'  : browserKey.toUpperCase();
  document.getElementById('statCountry').textContent = countryKey === 'all'    ? 'Global' : (LOCALE_MAP[countryKey]?.locale || '—');
}

/* ============================================================
   COPY / DOWNLOAD / CLEAR
   ============================================================ */

function copySingleUA(idx) {
  const ua  = generatedUAs[idx];
  const btn = document.getElementById(`copy-btn-${idx}`);
  if (!ua) return;

  navigator.clipboard.writeText(ua.uaString).then(() => {
    btn.textContent = '✔ COPIED';
    btn.classList.add('copied');
    showToast('Copied!');
    setTimeout(() => {
      btn.textContent = '⎘ COPY';
      btn.classList.remove('copied');
    }, 2000);
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
    `# ${i + 1} | ${ua.deviceLabel} | ${ua.browserLabel} | ${ua.locale ? ua.locale.locale : 'Global'}\n${ua.uaString}`
  ).join('\n\n');

  const header = `# User Agent Generator Export\n# Generated: ${new Date().toISOString()}\n# Count: ${generatedUAs.length}\n${'─'.repeat(80)}\n\n`;
  const blob   = new Blob([header + lines], { type: 'text/plain' });
  const url    = URL.createObjectURL(blob);
  const a      = document.createElement('a');
  a.href       = url;
  a.download   = `user-agents-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Downloaded!', 'success');
}

function clearResults() {
  generatedUAs = [];
  document.getElementById('outputBox').innerHTML      = '';
  document.getElementById('outputSection').style.display = 'none';
  document.getElementById('statsBar').style.display  = 'none';
  document.getElementById('copyAllBtn').disabled     = true;
  document.getElementById('downloadBtn').disabled    = true;
  document.getElementById('clearBtn').disabled       = true;
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

function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = `[ ${msg} ]`;
  toast.className   = 'toast show' + (type ? ' ' + type : '');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.className = 'toast';
  }, 2200);
}

/* ============================================================
   QUANTITY BUTTONS
   ============================================================ */

document.getElementById('qtyMinus').addEventListener('click', () => {
  const input = document.getElementById('quantityInput');
  const val   = parseInt(input.value) || 5;
  input.value = Math.max(1, val - 1);
});

document.getElementById('qtyPlus').addEventListener('click', () => {
  const input = document.getElementById('quantityInput');
  const val   = parseInt(input.value) || 5;
  input.value = Math.min(20, val + 1);
});

document.getElementById('quantityInput').addEventListener('input', function () {
  let v = parseInt(this.value);
  if (isNaN(v)) return;
  if (v < 1)  this.value = 1;
  if (v > 20) this.value = 20;
});

/* ============================================================
   KEYBOARD SHORTCUT (Enter = Generate)
   ============================================================ */

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
    generateUserAgents();
  }
});
