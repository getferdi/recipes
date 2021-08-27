module.exports = Ferdi => class Zimbra extends Ferdi {
  async validateUrl(url) {
    return true;
  }
};
