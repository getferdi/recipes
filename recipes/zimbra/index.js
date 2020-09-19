"use strict";

module.exports = Franz => class Zimbra extends Franz {
  async validateUrl(url) {
    return true;
  }
};