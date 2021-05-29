module.exports = Ferdi => class Pleroma extends Ferdi {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(`${url}/api/v1/instance`, {
        Accept: 'application/json',
      });
      const data = await resp.json();
      const version = data.version;
      return typeof (version) === 'string' && version.indexOf('Pleroma') >= 0;
    } catch (err) {
      console.log('Pleroma server validation error', err);
    }
    return false;
  }

  buildUrl(url) {
    return `${url}/main/friends`;
  }
};
