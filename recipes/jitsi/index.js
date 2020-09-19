"use strict";
module.exports = Franz => class Jitsi extends Franz {
    overrideUserAgent() {
        return window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '').trim();
    }
}