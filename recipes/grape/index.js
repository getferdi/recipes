'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = Franz => class Grape extends Franz {
  validateUrl(url) {
    return _asyncToGenerator(function* () {
      try {
        const resp = yield window.fetch(url, {
          method: 'GET'
        });
        return resp.status === 200;
      } catch (err) {
        console.error(err);
      }

      return false;
    })();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYXBlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsIkdyYXBlIiwidmFsaWRhdGVVcmwiLCJ1cmwiLCJyZXNwIiwid2luZG93IiwiZmV0Y2giLCJtZXRob2QiLCJzdGF0dXMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQkMsU0FBUyxNQUFNQyxLQUFOLFNBQW9CRCxLQUFwQixDQUEwQjtBQUM1Q0UsYUFBTixDQUFrQkMsR0FBbEIsRUFBdUI7QUFBQTtBQUNyQixVQUFJO0FBQ0YsY0FBTUMsT0FBTyxNQUFNQyxPQUFPQyxLQUFQLENBQWFILEdBQWIsRUFBa0I7QUFDbkNJLGtCQUFRO0FBRDJCLFNBQWxCLENBQW5CO0FBR0EsZUFBT0gsS0FBS0ksTUFBTCxLQUFnQixHQUF2QjtBQUNELE9BTEQsQ0FLRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkMsZ0JBQVFDLEtBQVIsQ0FBY0YsR0FBZDtBQUNEOztBQUVELGFBQU8sS0FBUDtBQVZxQjtBQVd0QjtBQVppRCxDQUFwRCIsImZpbGUiOiJncmFwZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gRnJhbnogPT4gY2xhc3MgR3JhcGUgZXh0ZW5kcyBGcmFueiB7XG4gIGFzeW5jIHZhbGlkYXRlVXJsKHVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzcC5zdGF0dXMgPT09IDIwMDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iXX0=