'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = Franz => class Zulip extends Franz {
    validateUrl(url) {
        return _asyncToGenerator(function* () {
            const baseUrl = new window.URL(url);
            const apiVersion = 'api/v1';
            try {
                const resp = yield window.fetch(`${baseUrl.origin}/${apiVersion}/server_settings`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = yield resp.json();

                return Object.hasOwnProperty.call(data, 'realm_uri');
            } catch (err) {
                console.error(err);
            }

            return false;
        })();
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInp1bGlwL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsIlp1bGlwIiwidmFsaWRhdGVVcmwiLCJ1cmwiLCJiYXNlVXJsIiwid2luZG93IiwiVVJMIiwiYXBpVmVyc2lvbiIsInJlc3AiLCJmZXRjaCIsIm9yaWdpbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCQyxTQUFTLE1BQU1DLEtBQU4sU0FBb0JELEtBQXBCLENBQTBCO0FBQzFDRSxlQUFOLENBQWtCQyxHQUFsQixFQUF1QjtBQUFBO0FBQ25CLGtCQUFNQyxVQUFVLElBQUlDLE9BQU9DLEdBQVgsQ0FBZUgsR0FBZixDQUFoQjtBQUNBLGtCQUFNSSxhQUFhLFFBQW5CO0FBQ0EsZ0JBQUk7QUFDQSxzQkFBTUMsT0FBTyxNQUFNSCxPQUFPSSxLQUFQLENBQWMsR0FBRUwsUUFBUU0sTUFBTyxJQUFHSCxVQUFXLGtCQUE3QyxFQUFnRTtBQUMvRUksNEJBQVEsS0FEdUU7QUFFL0VDLDZCQUFTO0FBQ0wsd0NBQWdCO0FBRFg7QUFGc0UsaUJBQWhFLENBQW5CO0FBTUEsc0JBQU1DLE9BQU8sTUFBTUwsS0FBS00sSUFBTCxFQUFuQjs7QUFFQSx1QkFBT0MsT0FBT0MsY0FBUCxDQUFzQkMsSUFBdEIsQ0FBMkJKLElBQTNCLEVBQWlDLFdBQWpDLENBQVA7QUFDSCxhQVZELENBVUUsT0FBT0ssR0FBUCxFQUFZO0FBQ1ZDLHdCQUFRQyxLQUFSLENBQWNGLEdBQWQ7QUFDSDs7QUFFRCxtQkFBTyxLQUFQO0FBakJtQjtBQWtCdEI7QUFuQitDLENBQXBEIiwiZmlsZSI6Inp1bGlwL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBGcmFueiA9PiBjbGFzcyBadWxpcCBleHRlbmRzIEZyYW56IHtcbiAgICBhc3luYyB2YWxpZGF0ZVVybCh1cmwpIHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IG5ldyB3aW5kb3cuVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IGFwaVZlcnNpb24gPSAnYXBpL3YxJ1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgJHtiYXNlVXJsLm9yaWdpbn0vJHthcGlWZXJzaW9ufS9zZXJ2ZXJfc2V0dGluZ3NgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZGF0YSwgJ3JlYWxtX3VyaScpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59OyJdfQ==