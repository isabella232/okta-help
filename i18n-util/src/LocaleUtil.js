const LOCALE_COOKIE_KEY = 'okta_user_lang';

const getLocale = () => {
  const supportedLocales = [
    'en',
    'ja',
  ];
  // check locale passed in query param
  let locale = document.location.hash.split('?locale=')[1];
  if (!locale) {
    // check locale in cookie
    if (document.cookie.indexOf(LOCALE_COOKIE_KEY) !== -1) {
      locale = getCookieValue(LOCALE_COOKIE_KEY);
    } else {
      // check locale in browser
      locale = navigator.language;
    }
  }

  // default to en
  if (!supportedLocales.includes(locale)) {
    console.info('using default locale');
    locale = 'en';
  }
  setLocaleCookie(locale);
  return locale;
};

const getCookieValue = (cookieName) => {
  var b = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
};

const setLocaleCookie = (locale) => {
  if (document.cookie.indexOf(LOCALE_COOKIE_KEY) === -1) {
    document.cookie = `${LOCALE_COOKIE_KEY}=${locale}`;
  }
};

module.exports = {
  getLocale,
  setLocaleCookie
}; 
