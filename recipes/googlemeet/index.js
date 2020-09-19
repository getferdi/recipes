var os = require('os')

module.exports = Franz =>
  class GoogleMeet extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '').trim(),
          },
          requestFilters: {
            urls: ['*://*/*'],
          },
        },
      ];
    }
  };
