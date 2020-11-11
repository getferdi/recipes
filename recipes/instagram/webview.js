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
  
  // https://github.com/getferdi/recipes/blob/9d715597a600710c20f75412d3dcd8cdb7b3c39e/docs/frontend_api.md#usage-4
  // Helper that activates DarkReader and injects your darkmode.css at the same time
  Franz.handleDarkMode((isEnabled, helpers) => {
    if (isEnabled) {
      helpers.enableDarkMode();
      if (!helpers.isDarkModeStyleInjected()) {
        helpers.injectDarkModeStyle();
      }
    } else {
      helpers.disableDarkMode();
      helpers.removeDarkModeStyle();
    }
  })
};
