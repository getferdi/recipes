var os = require('os')

module.exports = Franz =>
  class Owa extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g,"").trim();
    }
  };
