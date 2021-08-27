module.exports = (Ferdi) => {
  function getMessages() {
    const numMessages = parseInt(document.querySelector('.left-nav [data-content="Inbox"] .unread__container .unread').innerHTML.trim());
    Ferdi.setBadge(numMessages >= 0 ? numMessages : 0, 0);
  }

  Ferdi.loop(getMessages);
};
