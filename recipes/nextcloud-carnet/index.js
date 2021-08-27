module.exports = Ferdi => class NextcloudCarnet extends Ferdi {
  buildUrl(url) {
    return `${url}/apps/carnet/`;
  }
};
