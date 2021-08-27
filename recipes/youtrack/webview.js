module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const unread = document.querySelectorAll('.header__bell-wrapper_unread');
    Ferdi.setBadge(unread.length > 0 ? 1 : 0);
  };

  Ferdi.loop(getMessages);
};
