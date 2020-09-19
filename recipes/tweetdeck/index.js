'use strict';

module.exports = Franz => {
  return class Tweetdeck extends Franz {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.events = {
        'did-get-redirect-request': '_redirectFix'
      }, _temp;
    }

    _redirectFix(event) {
      if (event.newURL !== undefined && event.oldURL !== undefined && event.isMainFrame) {
        if (event.isMainFrame) {
          setTimeout(() => this.send('redirect-url', event.newURL), 100);
          event.preventDefault();
        }
      }
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3ZWV0ZGVjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJUd2VldGRlY2siLCJldmVudHMiLCJfcmVkaXJlY3RGaXgiLCJldmVudCIsIm5ld1VSTCIsInVuZGVmaW5lZCIsIm9sZFVSTCIsImlzTWFpbkZyYW1lIiwic2V0VGltZW91dCIsInNlbmQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQkM7QUFBQSxTQUFTLE1BQU1DLFNBQU4sU0FBd0JELEtBQXhCLENBQThCO0FBQUE7QUFBQTs7QUFBQSwwQ0FDdERFLE1BRHNELEdBQzdDO0FBQ1Asb0NBQTRCO0FBRHJCLE9BRDZDO0FBQUE7O0FBS3REQyxpQkFBYUMsS0FBYixFQUFvQjtBQUNsQixVQUFJQSxNQUFNQyxNQUFOLEtBQWlCQyxTQUFqQixJQUE4QkYsTUFBTUcsTUFBTixLQUFpQkQsU0FBL0MsSUFBNERGLE1BQU1JLFdBQXRFLEVBQW1GO0FBQ2pGLFlBQUlKLE1BQU1JLFdBQVYsRUFBdUI7QUFDckJDLHFCQUFXLE1BQU0sS0FBS0MsSUFBTCxDQUFVLGNBQVYsRUFBMEJOLE1BQU1DLE1BQWhDLENBQWpCLEVBQTBELEdBQTFEO0FBQ0FELGdCQUFNTyxjQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBWnFELEdBQXZDO0FBQUEsQ0FBakIiLCJmaWxlIjoidHdlZXRkZWNrL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBGcmFueiA9PiBjbGFzcyBUd2VldGRlY2sgZXh0ZW5kcyBGcmFueiB7XG4gIGV2ZW50cyA9IHtcbiAgICAnZGlkLWdldC1yZWRpcmVjdC1yZXF1ZXN0JzogJ19yZWRpcmVjdEZpeCcsXG4gIH1cblxuICBfcmVkaXJlY3RGaXgoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQubmV3VVJMICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub2xkVVJMICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuaXNNYWluRnJhbWUpIHtcbiAgICAgIGlmIChldmVudC5pc01haW5GcmFtZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VuZCgncmVkaXJlY3QtdXJsJywgZXZlbnQubmV3VVJMKSwgMTAwKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iXX0=