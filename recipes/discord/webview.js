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
navigator.mediaDevices.getDisplayMedia = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const sources = await desktopCapturer.getSources({ types: ['screen', 'window'] })

      const selectionElem = document.createElement('div')
      selectionElem.classList = 'desktop-capturer-selection'
      selectionElem.innerHTML = `
        <style>
        .close {
            color: #fff;
            font: 50px/100% arial, sans-serif;
            position: absolute;
            right: 5px;
            text-decoration: none;
            text-shadow: 0 1px 0 #fff;
            top: 5px;
            padding: 0;
            border: none;
            background: none;
          }
        .close:after {
            content: '✖'; /* UTF-8 symbol */
          }
        .desktop-capturer-selection {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(30,30,30,.75);
          color: #fff;
          z-index: 10000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .desktop-capturer-selection__scroller {
          width: 100%;
          max-height: 100vh;
          overflow-y: auto;
        }
        .desktop-capturer-selection__list {
          max-width: calc(100% - 100px);
          margin: 50px;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          overflow: hidden;
          justify-content: center;
        }
        .desktop-capturer-selection__item {
          display: flex;
          margin: 4px;
        }
        .desktop-capturer-selection__btn {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 145px;
          margin: 0;
          border: 0;
          border-radius: 3px;
          padding: 4px;
          background: #252626;
          text-align: left;
          transition: background-color .15s, box-shadow .15s;
        }
        .desktop-capturer-selection__btn:hover,
        .desktop-capturer-selection__btn:focus {
          background: rgba(98,100,167,.8);
        }
        .desktop-capturer-selection__thumbnail {
          width: 100%;
          height: 81px;
          object-fit: cover;
        }
        .desktop-capturer-selection__name {
          margin: 6px 0 6px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        </style>

        <div class="desktop-capturer-selection__scroller">
          <button class="close"></button>

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

              const stream = await navigator.mediaDevices.getUserMedia({
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

        document.querySelectorAll('.close')
        .forEach(button => {
          button.addEventListener('click', async () => {
            reject("Closed")
            selectionElem.remove();
            console.log("CLOSE");
            })
          }
        )
    } catch (err) {
      console.error('Error displaying desktop capture sources:', err)
      reject(err)
    }
	
  });
};
