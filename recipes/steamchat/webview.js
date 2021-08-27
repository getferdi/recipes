const { ipcRenderer } = require('electron');

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    // get new msg count
    let count = 0;
    const counters = document.querySelectorAll('[class*=FriendMessageCount]');
    [].filter.call(counters, countValue => {
      if (countValue) {
        count += parseInt(countValue.innerHTML);
      }
    });

    const indirectMessages = document.querySelectorAll('[class*=ChatUnreadMessageIndicator]').length;
    Ferdi.setBadge(count, indirectMessages);

    // force scroll to bottom of chat window
    const chatBoxes = document.querySelectorAll('.chat_dialog');
    if (chatBoxes) {
      const chatBox = [].filter.call(chatBoxes, chat => chat.style.display !== 'none');
      if (chatBox[0]) {
        const chatWindow = chatBox[0].querySelector('.chat_dialog_scroll');
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
    }
  };

  Ferdi.loop(getMessages);

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="http"]');

    if (link && link.getAttribute('target') === '_top') {
      const url = link.getAttribute('href');
      event.preventDefault();
      event.stopPropagation();
      ipcRenderer.sendToHost('new-window', url);
    }
  }, true);
};
