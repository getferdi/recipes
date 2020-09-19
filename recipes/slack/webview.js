"use strict";

var _electron = require("electron");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTeamIcon = function getTeamIcon(count = 0) {
  let countTeamIconCheck = count;
  let bgUrl = null;
  const teamMenu = document.querySelector('#team-menu-trigger, .p-ia__sidebar_header__team_name');

  if (teamMenu) {
    teamMenu.click();
    const icon = document.querySelector('.c-team_icon');

    if (icon) {
      bgUrl = window.getComputedStyle(icon, null).getPropertyValue('background-image');
      bgUrl = /^url\((['"]?)(.*)\1\)$/.exec(bgUrl);
      bgUrl = bgUrl ? bgUrl[2] : '';
    }

    setTimeout(() => {
      document.querySelector('.ReactModal__Overlay').click();
    }, 10);
  }

  countTeamIconCheck += 1;

  if (bgUrl) {
    _electron.ipcRenderer.sendToHost('avatar', bgUrl);
  } else if (countTeamIconCheck <= 5) {
    setTimeout(() => {
      getTeamIcon(countTeamIconCheck + 1);
    }, 2000);
  }
};

const SELECTOR_CHANNELS_UNREAD = '.p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted)';

module.exports = Franz => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll(`${SELECTOR_CHANNELS_UNREAD} .p-channel_sidebar__badge, .p-channel_sidebar__link--unread:not([data-sidebar-link-id="Punreads"]):not([data-sidebar-link-id="Pdrafts"])`).length;
    const allMessages = document.querySelectorAll(SELECTOR_CHANNELS_UNREAD).length - directMessages;
    Franz.setBadge(directMessages, allMessages);
  };

  Franz.loop(getMessages);
  setTimeout(() => {
    getTeamIcon();
  }, 4000);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};
