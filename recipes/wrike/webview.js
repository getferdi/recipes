module.exports = (Ferdi) => {
  function getMessages() {
    let directCount = 0;
    const element = document.querySelector('.ws-navigation-button__indicator.ws-navigation-button-indicator');

    if (element && element.innerText) {
      directCount = parseInt(element.innerText);
    }

    Ferdi.setBadge(directCount);
  }

  Ferdi.loop(getMessages);
};
