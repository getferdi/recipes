"use strict";

const path = require('path');

module.exports = Ferdi => {
  Ferdi.injectCSS(path.join(__dirname, 'service.css'));
  if(document.location.href.match("after")){
    	document.location.href="https://app.gotomeeting.com/home.html";
    }
};
