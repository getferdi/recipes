"use strict";

module.exports = Franz => class Gotomeeting extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
  }

};
