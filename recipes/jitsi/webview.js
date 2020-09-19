"use strict";

const NOTIFICATION_BADGE_CLASS = '.badge-round';

module.exports = Ferdi => {
    const getMessages = () => {
      const badges = [...document.querySelectorAll(NOTIFICATION_BADGE_CLASS)];
      const messages = badges.reduce((currentValue, element) => currentValue + Number(element.innerText), 0);
  
      Ferdi.setBadge(messages);
    }
  
    Ferdi.loop(getMessages);
}