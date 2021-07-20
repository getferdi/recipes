"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    const direct = document.querySelector('[class*="guilds-"]').querySelectorAll('[class^="numberBadge-"]').length;
	
	var indirect = 0;
	var guilds = document.querySelector("[data-ref-id=guildsnav]");
	if(guilds != null) {
		var channelPills = [].slice.call(guilds.querySelectorAll("[class*=item-2hkk8m]"));
		indirect += channelPills.filter(y => y.clientHeight == 8).length;
	
		var activeWindow = channelPills.find(y => y.clientHeight == 40);
		if(activeWindow != null) {
			var unreadChannels = document.querySelector("[class*=modeUnread]");
			
			if(unreadChannels != null)
				indirect++;
		}
	}
	
    Franz.setBadge(direct, indirect);
  };

  Franz.loop(getMessages);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};

// Polyfill to enable Screen Sharing
// See https://github.com/electron/electron/issues/16513#issuecomment-602070250
const { desktopCapturer } = require('electron')
window.navigator.mediaDevices.getDisplayMedia = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const sources = await desktopCapturer.getSources({ types: ['screen', 'window'] })

      const selectionElem = document.createElement('div')
      selectionElem.classList = 'desktop-capturer-selection'
      selectionElem.innerHTML = `
        <div class="desktop-capturer-selection__scroller">
          <ul class="desktop-capturer-selection__list">
            ${sources.map(({id, name, thumbnail, display_id, appIcon}) => `
              <li class="desktop-capturer-selection__item">
                <button class="desktop-capturer-selection__btn" data-id="${id}" title="${name}">
                  <img class="desktop-capturer-selection__thumbnail" src="${thumbnail.toDataURL()}" />
                  <span class="desktop-capturer-selection__name">${name}</span>
                </button>
              </li>
            `).join('')}
          </ul>
        </div>
      `
      document.body.appendChild(selectionElem)

      document.querySelectorAll('.desktop-capturer-selection__btn')
        .forEach(button => {
          button.addEventListener('click', async () => {
            try {
              const id = button.getAttribute('data-id')
              const source = sources.find(source => source.id === id)
              if(!source) {
                throw new Error(`Source with id ${id} does not exist`)
              }
              
              const stream = await window.navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                  mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: source.id
                  }
                }
              })
              resolve(stream)

              selectionElem.remove()
            } catch (err) {
              console.error('Error selecting desktop capture source:', err)
              reject(err)
            }
          })
        })
    } catch (err) {
      console.error('Error displaying desktop capture sources:', err)
      reject(err)
    }
  })
}
