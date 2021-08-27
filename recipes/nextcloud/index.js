module.exports = Ferdi => class Nextcloud extends Ferdi {
  buildUrl(url) {
    return `${url}/`;
  }
};
