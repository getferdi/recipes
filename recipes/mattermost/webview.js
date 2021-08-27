module.exports = Ferdi => {
  const DIRECT_MESSAGES_INDIVIDUAL = '#sidebar-left .unread-title .DirectChannel__profile-picture';
  const DIRECT_MESSAGES_GROUP = '#sidebar-left .unread-title .status--group';
  const DIRECT_MESSAGES_LEGACY = '.sidebar--left .has-badge .badge';
  const ALL_MESSAGES = '#sidebar-left .unread-title';
  const ALL_MESSAGES_LEGACY = '#sidebar-left .unread-title';

  const getMessages = function getMessages() {
    const directMessagesSelector = [DIRECT_MESSAGES_LEGACY, DIRECT_MESSAGES_INDIVIDUAL, DIRECT_MESSAGES_GROUP].join(', ');
    const directMessages = document.querySelectorAll(directMessagesSelector).length;

    const allMessagesSelector = [ALL_MESSAGES, ALL_MESSAGES_LEGACY].join(', ');
    const allMessages = document.querySelectorAll(allMessagesSelector).length - directMessages;

    const teamDirectMessages = document.querySelectorAll('.team-wrapper .team-container .badge').length;
    const teamMessages = document.querySelectorAll('.team-wrapper .unread').length - teamDirectMessages;

    Ferdi.setBadge(directMessages + teamDirectMessages, allMessages + teamMessages);
  };

  Ferdi.loop(getMessages);
};
