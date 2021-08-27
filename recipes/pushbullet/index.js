module.exports = Ferdi => class PushBullet extends Ferdi {
  constructor(...args) {
    let _temp;

    return _temp = super(...args), this.events = {
      'did-get-redirect-request': '_redirectFix',
    }, _temp;
  }

  _redirectFix(event) {
    if (event.newURL !== undefined && event.oldURL !== undefined && event.isMainFrame) {
      setTimeout(() => this.send('redirect-url', event.newURL), 100);
      event.preventDefault();
    }
  }
};
