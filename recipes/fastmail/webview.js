const path = require('path');

module.exports = (Franz) => {
  const getMessages = () => {
    const inbox = document.querySelector('.v-MailboxSource--inbox .v-MailboxSource-badge');
    if (!inbox) {
      return;
    }
    const messages = Number(inbox.innerText);
    Franz.setBadge(messages);
  };

  Franz.injectJSUnsafe(path.join(__dirname, 'webview-unsafe.js'));
  Franz.loop(getMessages);
};
