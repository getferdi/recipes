const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const inbox = document.querySelector('.topbar-notificationsButton.has-newNotifications');
    const passiveCount = inbox === null ? 0 : 1;
    // set Franz badge
    // updates => active unread count
    // inbox => passive unread count
    Franz.setBadge(0, passiveCount);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
