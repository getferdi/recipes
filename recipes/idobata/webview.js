module.exports = Ferdi => {
  function getMessages() {
    const title = document.querySelector('title').innerHTML.match(/\d+/);
    const count = title !== null ? title[0] : 0;

    Ferdi.setBadge(count);
  }

  Ferdi.loop(getMessages);
};
