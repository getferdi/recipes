"use strict";

const { desktopCapturer } = require('electron');
const path = require('path');

window.navigator.mediaDevices.getDisplayMedia = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const sources = await desktopCapturer.getSources({ types: ['screen', 'window'] });

      const selectionElem = document.createElement('div');
      selectionElem.classList = 'desktop-capturer-selection';
      selectionElem.innerHTML = `
        <div class="desktop-capturer-selection__scroller">
          <ul class="desktop-capturer-selection__list">
            ${sources.map(({ id, name, thumbnail, display_id, appIcon }) => `
              <li class="desktop-capturer-selection__item">
                <button class="desktop-capturer-selection__btn" data-id="${id}" title="${name}">
                  <img class="desktop-capturer-selection__thumbnail" src="${thumbnail.toDataURL()}" />
                  <span class="desktop-capturer-selection__name">${name}</span>
                </button>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
      document.body.appendChild(selectionElem);

      document.querySelectorAll('.desktop-capturer-selection__btn')
        .forEach(button => {
          button.addEventListener('click', async () => {
            try {
              const id = button.getAttribute('data-id');
              const source = sources.find(source => source.id === id);
              if (!source) {
                throw new Error(`Source with id ${id} does not exist`);
              }

              const stream = await window.navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                  mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: source.id
                  }
                }
              });
              resolve(stream);

              selectionElem.remove();
            } catch (err) {
              reject(err);
            }
          });
        });
    } catch (err) {
      reject(err);
    }
  })
}

window.electronSafeIpc = {
  send: () => null,
  on: () => null
};
window.desktop = undefined;

module.exports = Franz => {
  const getMessages = () => {
    let messages = 0;
    const badge = document.querySelector('.activity-badge.dot-activity-badge .activity-badge');

    if (badge) {
      const value = parseInt(badge.innerHTML, 10);

      if (!isNaN(value)) {
        messages = value;
      }
    }
	const indirectMessages = document.querySelectorAll("[class*=channel-anchor][class*=ts-unread-channel]").length;

    Franz.setBadge(messages, indirectMessages);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
