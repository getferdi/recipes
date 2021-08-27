module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.activity-indicator-mentions').length;
    const indirectMessages = document.querySelectorAll('.activity-indicator-chat').length;

    // set Ferdi badge
    Ferdi.setBadge(directMessages, indirectMessages);
  };

  Ferdi.loop(getMessages);
};
