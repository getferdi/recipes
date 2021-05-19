module.exports = (Franz) =>
  class Snapdrop extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
          },
          requestFilters: {
            urls: ['*://*/*'],
          }
        }
      ]
    }
  };
