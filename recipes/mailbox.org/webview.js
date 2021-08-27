module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.new-item').length;

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
