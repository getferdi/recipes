var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('#HeaderUserActions--Messages > a > span');
    let count = 0

    if (elements[0]) {
      count = parseInt(elements[0].innerHTML, 10);
    }

    console.log(count)
    Franz.setBadge(count)
  }

  if (document.querySelectorAll('.promotedlink').length > 0) {
    document.querySelectorAll('.promotedlink').forEach((sponsoredLink) => {
      sponsoredLink.parentElement.parentElement.style.display = 'none'
    })
  }

  Franz.loop(getMessages)

  // Use CSS to hide Google Ads
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'))

  Franz.handleDarkMode((isEnabled, config) => {
    // Open dropdown menu if not already open
    const menu = document.querySelector('#USER_DROPDOWN_ID');
    if (menu.getAttribute('aria-expanded') === 'false') {
      menu.click();
    }

    setTimeout(() => {
      // Check if service is already in right mode
      const btn = document.querySelector('[role=menu] button button');
      const checked = btn.getAttribute('aria-checked') === 'true';
  
      if ((checked && !isEnabled) || (!checked && isEnabled)) {
        // Click the button to switch between modes
        btn.click();
      }
    }, 50);
  });
}
