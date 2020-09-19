const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadCount = 0;

    Franz.setBadge(unreadCount);
  }

  Franz.loop(getMessages);
};
