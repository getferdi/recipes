"use strict";

module.exports = Franz => class CustomWebsite extends Franz {
  async validateUrl(url) {
    return true;
  }
};
