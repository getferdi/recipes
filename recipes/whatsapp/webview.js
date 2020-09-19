"use strict";

const {
  remote
} = require('electron');

const path = require('path');

const webContents = remote.getCurrentWebContents();
const {
  session
} = webContents;
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

module.exports = Franz => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll("[class=_31gEB]");
    var count = 0;
	var indirectCount = 0;

    for (var i = 0; i < elements.length; i += 1) {
	  var countValue = parseInt(elements[i].textContent || '0', 10);
	  
      if (elements[i].parentNode.previousElementSibling === null || elements[i].parentNode.previousElementSibling.querySelectorAll("[data-icon=muted]").length === 0) {
        count += countValue;
      } 
	  else {
		indirectCount += countValue;
	  }
    }

    Franz.setBadge(count, indirectCount);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
