"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const { title } = document;
    const regex = /\d+/;

    if (regex.test(title)) {
      Franz.setBadge(
        Number(regex.exec(title)[0])
      );
    } else {
      Franz.setBadge(0);
    }
  };

  Franz.loop(getMessages);
};