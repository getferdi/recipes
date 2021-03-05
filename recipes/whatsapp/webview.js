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
    var count = 0;
  	var indirectCount = 0;

    var parentChatElem = document.querySelector("#pane-side").children[0].children[0].children[0];
    var chatElems = parentChatElem.children;
    for (var i = 0; i < chatElems.length; i++) {
      var chatElem = chatElems[i];
      var unreadElem = chatElem.children[0].children[0].children[1].children[1].children[1];
      
      var countValue = parseInt(unreadElem.textContent) || 0; // Returns 0 in case of isNaN
      
      if (unreadElem.querySelectorAll("[data-icon=muted]").length === 0) {
        count += countValue;
      } else {
        indirectCount += countValue;
    	}
    }
    
    Franz.setBadge(count, indirectCount);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
