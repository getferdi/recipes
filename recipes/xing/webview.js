module.exports = Ferdi => {
  function getUnreadConversations() {
    let unreadConversations = 0;
    unreadConversations = parseInt(document.querySelector('#unread-conversations').innerHTML, 10);

    Ferdi.setBadge(unreadConversations);
  }

  Ferdi.loop(getUnreadConversations);
};
