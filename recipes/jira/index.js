"use strict";

module.exports = (Franz) =>
  class Jira extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(
        /(Ferdi|Electron)\/\S+ \([^)]+\)/g,
        ""
      );
    }
  };
