"use strict";

module.exports = (Franz) =>
  class Messenger extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g,"").trim(),
          },
          requestFilters: {
            urls: ['*://*/*'],
          }
        }
      ]
    }
  };
