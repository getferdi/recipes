const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    const direct = document.querySelector('[class*="guilds-"]').querySelectorAll('[class^="numberBadge-"]').length;

    let indirect = 0;
    const guilds = document.querySelector('[data-ref-id=guildsnav]');
    if (guilds != null) {
      const channelPills = [].slice.call(guilds.querySelectorAll('[class*=item-2hkk8m]'));
      indirect += channelPills.filter(y => y.clientHeight == 8).length;

      const activeWindow = channelPills.find(y => y.clientHeight == 40);
      if (activeWindow != null) {
        const unreadChannels = document.querySelector('[class*=modeUnread]');

        if (unreadChannels != null) indirect++;
      }
    }

    Franz.setBadge(direct, indirect);
  };

  Franz.loop(getMessages);
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};
