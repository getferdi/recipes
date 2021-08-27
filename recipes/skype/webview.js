const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { remote: { BrowserWindow } } = require('electron');

module.exports = (Ferdi, settings) => {
  const getMessages = function getMessages() {
    let count = 0;
    const container = document.querySelector('[role="tablist"] > [title="Chats"] > div');

    if (container) {
      const children = container.children;

      if (children.length === 3) {
        const elementContainer = children[children.length - 1];

        if (elementContainer) {
          const element = elementContainer.querySelector('[data-text-as-pseudo-element]');
          count = parseInt(element.dataset.textAsPseudoElement, 10);
        }
      }
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
  Ferdi.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="http"]');
    const button = event.target.closest('button[title^="http"]');

    if (link || button) {
      const url = link ? link.getAttribute('href') : button.getAttribute('title');

      if (url.includes('views/imgpsh_fullsize_anim')) {
        event.preventDefault();
        event.stopPropagation();
        // TODO: Can we send an ipc event 'open-browser-window' to open the child window? (see the slack recipe for how to send an ipc message)
        // TODO: Can we change the slack recipe to add a clickHandler for screensharing/video calls? (https://github.com/getferdi/ferdi/issues/1697)
        const win = new BrowserWindow({
          width: 800,
          height: window.innerHeight,
          minWidth: 600,
          webPreferences: {
            partition: `persist:service-${settings.id}`,
            // TODO: Aren't these needed here?
            // contextIsolation: false,
            // enableRemoteModule: true,
          },
        });
        win.loadURL(url);
      }
    }
  }, true);
};
