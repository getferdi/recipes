var os = require('os')

module.exports = Franz =>
  class googledrive extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '').trim(),
            'origin': 'https://drive.google.com'
          },
          requestFilters: {
            urls: ['*://*/*'],
          },
        },
      ];
    }
  };
