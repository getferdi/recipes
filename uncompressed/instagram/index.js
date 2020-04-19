module.exports = Franz => class Instagram extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(
      /(Ferdi|Electron)\/\S+ \([^)]+\)/g,
      ""
    );
  }
};
