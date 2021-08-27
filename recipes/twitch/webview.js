module.exports = (Ferdi) => {
  const getMessages = () => {
    const mentions = document.querySelectorAll('.chat-line .mentioned').length;
    Ferdi.setBadge(mentions, 0);
  };

  Ferdi.loop(getMessages);
};
