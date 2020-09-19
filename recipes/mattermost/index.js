"use strict";

module.exports = Franz => class Mattermost extends Franz {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return resp.status.toString().startsWith('2');
    } catch (err) {
      console.error(err);
    }

    return false;
  }

};