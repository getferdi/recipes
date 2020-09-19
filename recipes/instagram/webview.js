const path = require("path");

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const element = document.querySelector('a[href^="/direct/inbox"]');

    if (element) {
      Franz.setBadge(parseInt(element.innerText, 10));
    }
  };

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
