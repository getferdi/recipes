module.exports = Ferdi => {
  const getMessages = () => {
    Ferdi.setBadge(ConversationsList.getUnreadBadgeCount());
  };

  Ferdi.loop(getMessages);
};
