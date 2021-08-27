module.exports = Ferdi => {
  function getMessages() {
    const element = document.querySelector('.navigationItem-counter');
    if (!element) {
      return;
    }
    const text = element.innerText;
    const count = Number(text.substring(1, text.length - 1));
    Ferdi.setBadge(count);
  }

  Ferdi.loop(getMessages);
};
