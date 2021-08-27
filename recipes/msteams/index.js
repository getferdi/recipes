module.exports = Ferdi => class MicrosoftTeams extends Ferdi {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '').trim();
  }
};
