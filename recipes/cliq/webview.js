"use strict";

module.exports = Franz => {
  const getMessages = () => {
    Franz.setBadge(ConversationsList.getUnreadBadgeCount());
  };

  Franz.loop(getMessages);
};