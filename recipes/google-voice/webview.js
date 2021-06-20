"use strict";

module.exports = Franz => {
  function parseQuery(query) {
    const el = document.querySelector(query);
    return el && parseInt(el.innerHTML) || 0;
  }

  function getMessages() {
    const el = document.querySelector('.msgCount');
    let count;

    if (el) {
      count = parseInt(el.innerHTML.replace(/[\(\) ]/gi, '')) || 0;
    } else {
      const count_messages = parseQuery('gv-nav-tab[tooltip="Messages"] div[aria-label="Unread count"]');
      const count_calls = parseQuery('gv-nav-tab[tooltip="Calls"] div[aria-label="Unread count"]');
      const count_voicemails = parseQuery('gv-nav-tab[tooltip="Voicemail"] div[aria-label="Unread count"]');
      count = count_messages + count_calls + count_voicemails;
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
};