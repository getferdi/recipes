module.exports = (Ferdi) => {
  function getMessages() {
    const bell = document.querySelectorAll('#view65 > span')[0];
    counter = parseInt(bell.innerText);
    Ferdi.setBadge(counter);
  }

  Ferdi.loop(getMessages);
};
