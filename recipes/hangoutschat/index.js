var os = require('os')

// just pass through Franz
module.exports = Franz =>
  class HangoutsChat extends Franz {
    // Method to add headers to requests from Hangouts Chat's webview
    modifyRequestHeaders() {
      return [{
        headers: { 'origin': 'https://chat.google.com' },
        requestFilters: {
          urls: ['*://*/*']
        }
      }]
    }

    overrideUserAgent() {
      if (os.platform() == 'linux')
        return "Mozilla/5.0 (X11; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0"
      else
        return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0";
    }
  };
