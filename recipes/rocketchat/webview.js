"use strict";

const {
  ipcRenderer
} = require('electron');

const getTeamIcon = function getTeamIcon() {
  console.log('getTeamIcon');
  const manifestElement = document.querySelector('link[rel="manifest"]');

  if (manifestElement == null) {
    return;
  }

  const manifestUrl = manifestElement.getAttribute('href');
  console.log(manifestUrl);

  if (manifestUrl == null) {
    return;
  }

  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState != 4 || this.status != 200) {
      return;
    }

    const response = JSON.parse(this.responseText);

    if (response.icons.length >= 1) {
      ipcRenderer.sendToHost('avatar', `${window.location.protocol}//${window.location.host}${response.icons[0].src}`);
    }
  };

  xmlhttp.open('GET', manifestUrl, true);
  xmlhttp.send();
};

module.exports = Franz => {
  const getMessages = function getMessages() {
    const directMessages = Math.round(document.querySelectorAll('.unread.unread-mention, .badge--unread').length / 2);
    const indirectMessages = Math.round(document.querySelectorAll('.unread:not(.unread-mention), .sidebar-item--unread').length / 2);
    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
  setTimeout(() => {
    getTeamIcon();
  }, 4000);
};