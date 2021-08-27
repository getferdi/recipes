let modal;
let updates = 0;

const waitFor = (condition, callback) => {
  if (!condition()) {
    window.setTimeout(waitFor.bind(null, condition, callback), 100);
  } else {
    callback();
  }
};

const showModal = text => {
  modal.querySelector('p').innerHTML = text;
  updates += 1;
  window.ferdi.setBadge(updates);
  modal.classList.add('open');
};

const hideModal = () => {
  modal.querySelector('p').innerHTML = '';
  updates -= 1;
  window.ferdi.setBadge(updates);
  modal.classList.remove('open');
};

const createModal = () => {
  const modalDialog = document.createElement('div');
  modalDialog.setAttribute('id', 'franz-modal');
  modalDialog.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p></p></div>';
  modalDialog.querySelector('.close').addEventListener('click', hideModal);

  return modalDialog;
};

window.alert = showModal;

modal = createModal();
waitFor(() => document.body, () => document.body.appendChild(modal));
document.addEventListener('keydown', event => event.keyCode === 27 && hideModal());
