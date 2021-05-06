var os = require("os");

module.exports = (Franz) =>
  class Gmail extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
          },
          requestFilters: {
            urls: ["*://*/*"],
          },
        },
      ];
    }
  };
