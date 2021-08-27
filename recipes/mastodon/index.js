module.exports = (Ferdi) => {
  class Mastodon extends Ferdi {
    validateServer(URL) {
      const api = `${URL}`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          resolve();
        }).fail(reject);
      });
    }
  }

  return Mastodon;
};
