module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.c0120').length;
    const indirectMessages = document.querySelectorAll('.c0121').length;

    Ferdi.setBadge(directMessages, indirectMessages);
  };

  Ferdi.loop(getMessages);
};
