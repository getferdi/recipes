"use strict";

module.exports = Franz => class MicrosoftTeams extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '');
  }
};