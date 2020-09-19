"use strict";

module.exports = Franz => class Nextcloud extends Franz {
  buildUrl(url) {
    return `${url}/apps/spreed/`;
  }

};