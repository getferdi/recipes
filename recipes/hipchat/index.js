function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step('next', value); }, (err) => { step('throw', err); }); } } return step('next'); }); }; }

module.exports = Ferdi => class HipChat extends Ferdi {
  validateUrl(url) {
    return _asyncToGenerator(function* () {
      try {
        const resp = yield window.fetch(`${url}/api/features`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = yield resp.json();

        return Object.hasOwnProperty.call(data, 'features');
      } catch (err) {
        console.error(err);
      }

      return false;
    })();
  }

  buildUrl(url) {
    return `${url}/chat`;
  }
};
