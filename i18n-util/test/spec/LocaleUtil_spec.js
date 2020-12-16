const { getLocale, setLocaleCookie } = require('../../src/LocaleUtil');

const setup = () => {
  // reset values
  jest.clearAllMocks();
  document.location.hash = '';
  document.cookie = 'okta_user_lang= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  languageGetter = jest.spyOn(window.navigator, 'language', 'get')
};

describe('Locale Priority', () => {
  beforeEach(() => {
    setup();
  });
  test('query param locale is higher than browser and cookie locale', () => {
    document.location.hash = "#somehash?locale=en";
    languageGetter.mockReturnValue('ja');
    setLocaleCookie('ja');
    expect(getLocale()).toBe('en');
  });
  test('cookie locale is higher than browser locale', () => {
    languageGetter.mockReturnValue('ja');
    setLocaleCookie('en');
    expect(getLocale()).toBe('en');
  });
  test('browser locale is picked if query and hash is not set', () => {
    languageGetter.mockReturnValue('ja');
    expect(getLocale()).toBe('ja');
  });
});


describe('LocaleUtil.setLocaleCookie', () => {
  beforeEach(() => {
    setup();
  });
  test('test setLocaleCookie with "en"', () => {
    setLocaleCookie('en');
    expect(getLocale()).toBe('en');
  });
  test('test setLocaleCookie with "en" if "okta_user_lang" set to ja before', () => {
    document.cookie = 'cookie1=test';
    document.cookie = 'okta_user_lang=ja';

    setLocaleCookie('en');
    expect(getLocale()).toBe('ja');
    expect(document.cookie.indexOf('okta_user_lang=en')).toBe(-1);
  });
});

describe('LocaleUtil.getLocale', () => {
  beforeEach(() => {
    setup();
  });
  test('test getLocale from query param', () => {
    document.location.hash = "#somehash?locale=en";
    setLocaleCookie('ja');
    expect(getLocale()).toBe('en');
  });

  test('test getLocale from cookie', () => {
    setLocaleCookie('ja');
    expect(getLocale()).toBe('ja');
  });

  test('test getLocale from browser', () => {
    languageGetter.mockReturnValue('ja');
    expect(getLocale()).toBe('ja');
  });
});



