module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.switch_pane>.unread').length;
    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
