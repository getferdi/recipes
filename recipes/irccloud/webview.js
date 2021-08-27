module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directMessages = document.getElementsByClassName('buffer conversation active unread activeBadge').length;
    const indirectMessages = document.getElementsByClassName('buffer channel active unread').length;

    Ferdi.setBadge(directMessages, indirectMessages);
  };

  Ferdi.loop(getMessages);
};
