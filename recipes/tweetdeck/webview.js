const { ipcRenderer } = require('electron');

// Tweetdeck redirect fix
ipcRenderer.on('redirect-url', (event, url) => {
  window.location.assign(url);
});

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.msg-unread-count');
    let count = 0;
    if (elements[0]) {
      count = parseInt(elements[0].innerHTML, 10);
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
