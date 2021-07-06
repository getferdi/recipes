'use strict';

const { ipcRenderer } = require('electron');

const getTeamIcon = function getTeamIcon() {
  const manifestElement = document.querySelector('link[rel="manifest"]');

  if (manifestElement == null) {
    return;
  }

  const manifestUrl = manifestElement.getAttribute('href');

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
      ipcRenderer.sendToHost(
        'avatar',
        `${window.location.protocol}//${window.location.host}${response.icons[0].src}`
      );
    }
  };

  xmlhttp.open('GET', manifestUrl, true);
  xmlhttp.send();
};

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.rcx-badge');

    let directMessagesCount = 0;

    for (const directMessage of directMessages) {
      directMessagesCount += parseInt(directMessage.textContent, 10);
    }

    const indirectMessagesCount = Math.round(
      document.querySelectorAll('.rcx-sidebar-item--highlighted').length
    );

    Ferdi.setBadge(directMessagesCount, indirectMessagesCount);
  };

  Ferdi.loop(getMessages);

  setTimeout(() => {
    getTeamIcon();
  }, 4000);
};
