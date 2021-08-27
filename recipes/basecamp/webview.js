const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Ferdi) => {
  let updates = 0;
  const modal = document.createElement('div');

  const waitFor = (condition, callback) => {
    if (!condition()) {
      window.setTimeout(waitFor.bind(null, condition, callback), 100);
    } else {
      callback();
    }
  };
  function showModal(text) {
    show(modal);
    modal.querySelector('p').innerHTML = text;
    updates += 1;
  }

  function hideModal() {
    hide(modal);
    modal.querySelector('p').innerHTML = '';
    updates -= 1;
  }

  // Replace window.alert to hide alerts in Ferdi
  const oldAlert = window.alert;
  window.alert = function () {
    // when Google Calendar displays an alert notify the user
    showModal.apply(oldAlert, arguments);
  };

  function show(element) {
    element.style.display = 'inherit';
  }

  function hide(element) {
    element.style.display = 'none';
  }

  modal.id = 'franz-modal';
  modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p></p></div>';
  modal.querySelector('.close').addEventListener('click', hideModal);
  waitFor(() => document.body, () => document.body.appendChild(modal));

  document.addEventListener('keydown', (e) => { if (e.keyCode === 27) { hideModal(); } });

  Ferdi.injectCSS(_path.default.join(__dirname, 'css', 'modal.css'));
};
