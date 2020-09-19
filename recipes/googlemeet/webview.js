"use strict";

const {
  remote
} = require('electron');

const path = require('path');

const webContents = remote.getCurrentWebContents();
const {
  session
} = webContents;

window.onload = () => {
  const title = document.querySelector('.window-title').innerHTML;

  if (title && title.includes('Google Chrome 36+')) {
    window.location.reload();
  }
};

module.exports = Franz => {
  session.flushStorageData();
  session.clearStorageData({
    storages: ['serviceworkers']
  });

  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.CxUIE, .unread');
    let count = 0;

    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].querySelectorAll('*[data-icon="muted"]').length === 0) {
        count += 1;
      }
    }

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
