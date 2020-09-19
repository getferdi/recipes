"use strict";

const { desktopCapturer, remote: { BrowserWindow } } = require("electron");
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

module.exports = (Franz, settings) => {
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

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="http"]');
    const button = event.target.closest('button[title^="http"]');

    if (link || button) {
      const url = link ? link.getAttribute('href') : button.getAttribute('title');

      if (url.includes('views/imgpsh_fullsize_anim')) {
        event.preventDefault();
        event.stopPropagation();
        let win = new BrowserWindow({
          width: 800,
          height: window.innerHeight,
          minWidth: 600,
          webPreferences: {
            partition: `persist:service-${settings.id}`
          }
        });
        win.loadURL(url);
      }
    }
  }, true);
};
