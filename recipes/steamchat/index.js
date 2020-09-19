"use strict";

module.exports = (Franz) =>
  class SteamChat extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(
        /(Ferdi|Electron)\/\S+ \([^)]+\)/g,
        ""
      );
    }
  };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZWFtY2hhdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJTdGVhbUNoYXQiLCJvdmVycmlkZVVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUJDLFNBQVMsTUFBTUMsU0FBTixTQUF3QkQsS0FBeEIsQ0FBOEI7QUFDdERFLHNCQUFvQjtBQUNsQixXQUFPQyxPQUFPQyxTQUFQLENBQWlCQyxTQUFqQixDQUEyQkMsT0FBM0IsQ0FBbUMsNkJBQW5DLEVBQWtFLEVBQWxFLENBQVA7QUFDRDtBQUhxRCxDQUF4RCIsImZpbGUiOiJzdGVhbWNoYXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEZyYW56ID0+IGNsYXNzIFN0ZWFtQ2hhdCBleHRlbmRzIEZyYW56IHtcbiAgb3ZlcnJpZGVVc2VyQWdlbnQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnJlcGxhY2UoLyhGcmFuenxFbGVjdHJvbikoW15cXHNdK1xccykvZywgJycpO1xuICB9XG59O1xuIl19
