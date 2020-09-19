"use strict";

const {
  remote
} = require('electron');

const webContents = remote.getCurrentWebContents();
const {
  session
} = webContents;
setTimeout(() => {
  const elem = document.querySelector('#af-error-container');

  if (elem && elem.innerText.toLowerCase().includes('the requested url was not found on this server')) {
    window.location.reload();
  }
}, 1000);
window.addEventListener('beforeunload', async () => {
  try {
    session.flushStorageData();
    session.clearStorageData({
      storages: ['appcache', 'serviceworkers', 'cachestorage', 'websql', 'indexdb']
    });
    const registrations = await window.navigator.serviceWorker.getRegistrations();
    registrations.forEach(r => {
      r.unregister();
      console.log('ServiceWorker unregistered');
    });
  } catch (err) {
    console.err(err);
  }
});

module.exports = (Franz, settings) => {
  function getMessages() {
    const messages = document.querySelectorAll('.text-content.unread').length;
    Franz.setBadge(messages);
  }

  if (settings.isDarkModeEnabled) {
    localStorage.setItem('dark_mode_enabled', 'true');
  } else {
    localStorage.setItem('dark_mode_enabled', 'false');
  }

  Franz.loop(getMessages);
};