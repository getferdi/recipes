"use strict";

module.exports = Franz => class CustomWebsite extends Franz {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(url, {
        method: 'GET'
      });
      return !resp.status.toString().startsWith('4');
    } catch (err) {
      console.error(err);
    }

    return false;
  }

};