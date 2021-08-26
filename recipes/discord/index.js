module.exports = (Franz) =>
  class Discord extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(
        /(Ferdi|Electron)\/\S+ \([^)]+\)/g,
        ""
      );
    }
  };
