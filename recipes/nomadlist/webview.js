module.exports = (Ferdi) => {
  const getMessages = () => {
    Ferdi.setBadge($('.unread').length);
  };

  Ferdi.loop(getMessages);
};
