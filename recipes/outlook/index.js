module.exports = Ferdi => class Outlook extends Ferdi {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '').trim();
  }
};
