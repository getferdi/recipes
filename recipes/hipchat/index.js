'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = Franz => class HipChat extends Franz {
  validateUrl(url) {
    return _asyncToGenerator(function* () {
      try {
        const resp = yield window.fetch(`${url}/api/features`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = yield resp.json();

        return Object.hasOwnProperty.call(data, 'features');
      } catch (err) {
        console.error(err);
      }

      return false;
    })();
  }

  buildUrl(url) {
    return `${url}/chat`;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpcGNoYXQvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56IiwiSGlwQ2hhdCIsInZhbGlkYXRlVXJsIiwidXJsIiwicmVzcCIsIndpbmRvdyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiYnVpbGRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQkMsU0FBUyxNQUFNQyxPQUFOLFNBQXNCRCxLQUF0QixDQUE0QjtBQUM5Q0UsYUFBTixDQUFrQkMsR0FBbEIsRUFBdUI7QUFBQTtBQUNyQixVQUFJO0FBQ0YsY0FBTUMsT0FBTyxNQUFNQyxPQUFPQyxLQUFQLENBQWMsR0FBRUgsR0FBSSxlQUFwQixFQUFvQztBQUNyREksa0JBQVEsS0FENkM7QUFFckRDLG1CQUFTO0FBQ1AsNEJBQWdCO0FBRFQ7QUFGNEMsU0FBcEMsQ0FBbkI7QUFNQSxjQUFNQyxPQUFPLE1BQU1MLEtBQUtNLElBQUwsRUFBbkI7O0FBRUEsZUFBT0MsT0FBT0MsY0FBUCxDQUFzQkMsSUFBdEIsQ0FBMkJKLElBQTNCLEVBQWlDLFVBQWpDLENBQVA7QUFDRCxPQVZELENBVUUsT0FBT0ssR0FBUCxFQUFZO0FBQ1pDLGdCQUFRQyxLQUFSLENBQWNGLEdBQWQ7QUFDRDs7QUFFRCxhQUFPLEtBQVA7QUFmcUI7QUFnQnRCOztBQUVERyxXQUFTZCxHQUFULEVBQWM7QUFDWixXQUFRLEdBQUVBLEdBQUksT0FBZDtBQUNEO0FBckJtRCxDQUF0RCIsImZpbGUiOiJoaXBjaGF0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBGcmFueiA9PiBjbGFzcyBIaXBDaGF0IGV4dGVuZHMgRnJhbnoge1xuICBhc3luYyB2YWxpZGF0ZVVybCh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgJHt1cmx9L2FwaS9mZWF0dXJlc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsICdmZWF0dXJlcycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGJ1aWxkVXJsKHVybCkge1xuICAgIHJldHVybiBgJHt1cmx9L2NoYXRgO1xuICB9XG59O1xuIl19