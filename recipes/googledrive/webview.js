module.exports = (Franz, options) => {
   window.chrome = {
      runtime: {
        connect: () => {
          return {
            onMessage: {
              addListener: () => {console.warn('chrome.runtime is not implemented')},
              removeListener: () => {console.warn('chrome.runtime is not implemented')},
            },
            postMessage: () => {console.warn('chrome.runtime is not implemented')},
            disconnect: () => {console.warn('chrome.runtime is not implemented')},
          }
        }
      }
    }
}