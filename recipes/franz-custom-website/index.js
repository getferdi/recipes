module.exports = Ferdi => class CustomWebsite extends Ferdi {
  async validateUrl(url) {
    return true;
  }
};
