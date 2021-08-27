module.exports = Ferdi => class Gotomeeting extends Ferdi {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '');
  }
};
