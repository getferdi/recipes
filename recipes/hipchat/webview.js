module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.hc-mention').length;
    const allMessages = document.querySelectorAll('.aui-badge:not(.hc-mention)').length - directMessages;

    // set Ferdi badge
    Ferdi.setBadge(directMessages, allMessages);
  };

  Ferdi.loop(getMessages);
};
