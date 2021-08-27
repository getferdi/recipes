function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

module.exports = Ferdi => class Grape extends Ferdi {
  validateUrl(url) {
    return _asyncToGenerator(function* () {
      try {
        const resp = yield window.fetch(url, {
          method: 'GET',
        });
        return resp.status === 200;
      } catch (err) {
        console.error(err);
      }

      return false;
    })();
  }
};
