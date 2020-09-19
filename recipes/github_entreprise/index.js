"use strict";

module.exports = Franz => class GitHubEnterprise extends Franz {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(`${url}/api/v3`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
      });
      //doc: https://developer.github.com/enterprise/2.17/v3/#current-version
      return resp.status.toString().startsWith('2');
    } catch (err) {
      console.error(err);
    }

    return false;
  }
};