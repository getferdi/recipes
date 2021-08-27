const { remote } = require('electron');

const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const webContents = remote.getCurrentWebContents();
const { session } = webContents;

window.addEventListener('beforeunload', async () => {
  try {
    session.flushStorageData();
    session.clearStorageData({
      storages: ['appcache', 'serviceworkers', 'cachestorage', 'websql', 'indexdb'],
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

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let count = 0;
    let indirectCount = 0;

    const parentChatElem = document.querySelector('#pane-side').children[0].children[0].children[0];
    if (!parentChatElem) return;

    const chatElems = parentChatElem.children;
    for (let i = 0; i < chatElems.length; i++) {
      const chatElem = chatElems[i];
      const unreadElem = chatElem.children[0].children[0].children[1].children[1].children[1];

      const countValue = parseInt(unreadElem.textContent) || 0; // Returns 0 in case of isNaN

      if (unreadElem.querySelectorAll('[data-icon=muted]').length === 0) {
        count += countValue;
      } else {
        indirectCount += countValue;
      }
    }

    Ferdi.setBadge(count, indirectCount);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
