module.exports = Ferdi => {
  const getMessages = function getMessages() {
    // get unread messages
    const count = document.querySelector('#hangout-landing-chat iframe').contentWindow.document.querySelectorAll('.ee').length;

    // set Ferdi badge
    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
