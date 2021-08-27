module.exports = (Ferdi) => {
  const getMessages = () => {
    const unreadPrivateMessages = parseInt($('.messages .unread-meeps').text());
    const unreadGroupMessages = parseInt($('.today .unread-meeps').text());

    Ferdi.setBadge(unreadPrivateMessages + unreadGroupMessages);
  };

  Ferdi.loop(getMessages);
};
