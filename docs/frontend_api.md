# Frontend API

Provides a set of helper functions to integrate the service into [Ferdi](https://getferdi.com).

## Ferdi Class Methods
* [setBadge](#user-content-setbadge)
* [injectCSS](#user-content-injectcss)
* [loop](#user-content-loop)
* [onNotify](#user-content-onnotify)
* [handleDarkMode](#user-content-handleDarkMode)

### setBadge(directMessages, [indirectMessages])
Sets the unread message badge

#### Arguments
1. `int` directMessages
  * sets the count of direct messages eg. Slack direct mentions, or a message to @channel
2. `int` indirectMessages (optional)
  * Set a badge that defines there are new messages but they do not involve me directly to me eg. in a channel

#### Usage

```js
Ferdi.setBadge(4, 2);

// or

Ferdi.setBadge(3);
```

### injectCSS(pathToCssFile)
Injects the contents of one or more CSS files into the current webview

#### Arguments
1. `string` cssFile
  * CSS files that should be injected. This must be an absolute path to the file

#### Usage

```js
const path = require('path');

// inject a single css file
Ferdi.injectCSS(path.join(__dirname, 'style.css'));

// inject multiple css files
const globalStyles = path.join(__dirname, 'global.css');
const focusModeStyles = path.join(__dirname, 'focusmode.css');

Ferdi.injectCSS(globalStyles, focusModeStyles);
```

### injectJSUnsafe(pathToJsFile)
Injects the contents of one or more JavaScript files into the current webview without context isolation

Ferdi uses context isolation to prevent services from accessing Node.js APIs in the webview.
If you want to expose objects to the service (eg. via the `window` object) or interact with the Javascript loaded by the service you must do so from a script injected with this method.
Trying to overwrite properties of the `window` object or other objects or trying to interact with the Javascript loaded by the service from `webview.js` will fail due to context isolation.

The code is executed as if part of the body of a Javascript function, ie. you should modify the `window` object explicitly to expose objects in the global scope.

#### Arguments
1. `string` jsFile
  * JavaScript files that should be injected. This must be an absolute path to the file

#### Usage

```js
const path = require('path');

// inject a single css file
Ferdi.injectJSUnsafe(path.join(__dirname, 'webview-unsafe.js'));

// inject multiple css files
const globalScripts = path.join(__dirname, 'global.js);
const focusModeScripts = path.join(__dirname, 'focusmode.js);

Ferdi.injectCSS(globalScripts, focusModeScripts);
```

### loop(action)
Runs an action every X milliseconds (Ferdi default is currently 1s)

#### Arguments
1. `function` action

#### Usage

```js
// slack integration
const path = require('path');

module.exports = (Ferdi) => {
  const getMessages = () => {
    const directMessages = $('.unread_highlights, .unread_highlight').not('.hidden').length;
    const indirectMessages = $('.unread').length - directMessages;

    Ferdi.setBadge(directMessages, indirectMessages);
  }

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(path.join(__dirname, 'style.css'));
}
```

### onNotify(fn)
Runs `fn` on every notification created by the service before sending them to the host (Useful if you want to update information of the notification before showing it to the user)

#### Arguments
1. `function` fn

#### Usage

```js
// messenger integration
module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    let count = document.querySelectorAll('._5fx8:not(._569x),._1ht3:not(._569x)').length;
    const messageRequestsElement = document.querySelector('._5nxf');
    if (messageRequestsElement) {
      count += parseInt(messageRequestsElement.innerHTML, 10);
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  Ferdi.onNotify(notification => {
    if (typeof notification.title !== 'string') {
      notification.title = ((notification.title.props || {}).content || [])[0] || 'Messenger';
    }

    return notification;
  });
};
```

### handleDarkMode(callback)
You can use a `darkmode.css` to automatically get the service into a dark theme. If your service already supports its own dark mode (e.g. Reddit and YouTube have built-in dark modes), then you can use a custom dark mode handler instead.

This handler should take the necessary steps to (de-)activate dark mode on the page, e.g. by clicking a button or flipping a switch.

Ferdi won't activate DarkReader or inject `darkmode.css` if the recipe has defined a custom handler. If you still need to do this, you can use the `injectDarkModeStyle` or `enableDarkMode` function provided as the second argument.

#### Arguments
1. `function` callback

#### Callback function arguments
1. `boolean` isEnabled: Is Dark Mode currently enabled?
2. `object` helpers: Helper functions that you can use in your function:
  `enableDarkMode` - Enable DarkReader
  `disableDarkMode` - Disable DarkReader
  `injectDarkModeStyle` - Inject darkmode.css
  `removeDarkModeStyle` - Remove service's darkmode.css
  `isDarkModeStyleInjected` - Function that returns true if darkmode.css is injected into the page

#### Usage
```JavaScript
// Handler that works for Reddit
Ferdi.handleDarkMode((isEnabled, helpers) => {
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

// --- or ---

// Helper that activates DarkReader and injects your darkmode.css at the same time
Ferdi.handleDarkMode((isEnabled, helpers) => {
  if (isEnabled) {
    helpers.enableDarkMode();
    if (!helpers.isDarkModeStyleInjected()) {
      helpers.injectDarkModeStyle();
    }
  } else {
    helpers.disableDarkMode();
    helpers.removeDarkModeStyle();
  }
})
```
