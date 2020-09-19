"use strict";

module.exports = Franz => class NextcloudCarnet extends Franz {
  buildUrl(url) {
    return `${url}/apps/cospend/`;
  }
};
