# Ferdi Recipe Documentation / Overview

Recipes are responsible for providing the connection between the service itself (e.g. WhatsApp) and Ferdi, providing information like the number of current notifications or handling dark mode.

A Ferdi recipe is basically nothing else than a node module and is currently initialized on `dom-ready`. You access all of the [electron](http://electron.atom.io) modules as well.

> ℹ️ New to Ferdi recipes and Electron? Then we recommend you read Jake Lee's ["Super simple guide to adding a new Ferdi service recipe"](https://blog.jakelee.co.uk/super-simple-guide-to-adding-a-new-ferdi-service-recipe/) which gives you an easy step-by-step guide on how to create and publish your recipe!

> ℹ️ If you have any problems packaging your recipes, if you are inexperienced with the tools used or have any other problems, we are here to help! Just open a new issue at https://github.com/getferdi/recipes/issues/new and we can help you develop, test and publish your recipe

> If you want to update an existing recipe, please refer to [updating.md](https://github.com/getferdi/recipes/blob/master/docs/updating.md) instead

## Table of Contents

- [Ferdi Recipe Documentation / Overview](#ferdi-recipe-documentation--overview)
  - [Table of Contents](#table-of-contents)
  - [Preparing](#preparing)
  - [Create a recipe](#create-a-recipe)
  - [Recipe structure](#recipe-structure)
    - [package.json](#packagejson)
    - [index.js](#indexjs)
    - [webview.js](#webviewjs)
  - [Icons](#icons)
  - [Dark Mode](#dark-mode)
  - [Debugging](#debugging)
  - [Publishing](#publishing)

## Preparing

You should have basic knowledge of JavaScript - don't worry, you'll really only need some basic commands as we've already prepared the complicated stuff for you.

We have also created a nice script that already does 50% of the work for you - yay 🎉. If you want to use this script, please make sure you have NodeJS installed on your system.

## Create a recipe

1. Fork this repository on GitHub. You can do this by clicking the "Fork" button in the top right corner
2. Clone your forked repository. Normally, you can do this by running `git clone https://github.com/<Your GitHub Username>/recipes.git` in your terminal. You may also use a Git GUI or the GitHub Website for this.
3. (Optional, if you want to use our creation script) Install its dependencies via the terminal:

```Bash
npm install
```

4. You can now run our automatic recipe wizard that creates and opens the new recipe for you:

```Bash
# Make sure you are still in the repository's folder
npm run create "Service Name"
```

Replace `Service Name` with the name of your service, e.g. `npm run create "Google Hangouts"`.
This command will automatically create the development recipe in the correct folder, prepares it for your service and opens the new recipe in your file explorer or Finder.
5. Reload Ferdi (`CMD/CTRL + SHIFT + R`) in order for it to register the new recipe
6. You can now develop your recipe as described below. Please continue down below with "[Publishing](#Publishing)" after you are done creating your recipe.

## Recipe structure

Every recipe needs a specific file structure in order to work as a Ferdi recipe

* icon.svg - Icon for the service in SVG form (must be square)
* icon.png - Icon for the service in PNG form (1024x1024px)
* index.js - Backend script, this script is NOT included in the service webview but only in Ferdi itself
* package.json - Information about the recipe
* webview.js - Frontend script, this script is injected into the service itself but still has access to all NodeJS APIs
* darkmode.css - CSS File that gets included when dark mode is activated

### package.json

The package.json is structured like any other node module and allows to completely configure the service.

```json
{
  "id": "tweetdeck",
  "name": "Tweetdeck",
  "version": "1.0.1",
  "description": "Tweetdeck",
  "main": "index.js",
  "author": "Stefan Malzner <stefan@adlk.io>",
  "license": "MIT",
  "repository": "https://github.com/meetfranz/recipe-tweetdeck",
  "config": {
    "serviceURL": "https://tweetdeck.twitter.com/"
  }
}
```

To get more information about all the provided configuration flags, check the [config docs](configuration.md).

Please note that the fields `id`, `name`, `version` and `config` and required.

### index.js

This is your "backend" code. Right now the options are very limited and most of the services don't need a custom handling here. If your service is relatively straight forward and has a static URL eg. _messenger.com_, _`[TEAMID]`.slack.com_ or _web.skype.com_ all you need to do to return the Ferdi Class:

```js
module.exports = Ferdi => Ferdi;
```

If your service can be hosted on custom servers, you can validate the given URL to detect if it's your server and not e.g. google.com. To enable validation you can override the function `validateServer`

```js
// RocketChat integration
module.exports = Ferdi => class RocketChat extends Ferdi {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(`${url}/api/info`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();

      return Object.hasOwnProperty.call(data, 'version');
    } catch (err) {
      console.error(err);
    }

    return false;
  }
};
```

`validateServer` needs to return a [`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), otherwise validation will fail.

By default, Ferdi's user agent looks like this:

```text
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.141 Safari/537.36 Ferdi/5.4.4-beta.3 (Electron 8.1.1)
```

Some services may not be compatible with Ferdi adding it's signature to the user agent.

If you encounter such a service, you remove this signature with the following snippet of code

```js
overrideUserAgent() {
  return window.navigator.userAgent.replace(
    /(Ferdi|Electron)\/\S+ \([^)]+\)/g,
    ""
  );
}
```

If you want to change the user agent to a different one, you can simply return the String for the new user agent:

```js
overrideUserAgent() {
  return "Mozilla/2.02Gold (Win95; I)";
}
```

### webview.js

The webview.js is the actual script that will be loaded into the webview. Here you can do whatever you want to do in order perfectly integrate the service into Ferdi. For convenience, we have provided a very simple set of functions to set unread message badges (`Ferdi.setBadge()`) and inject CSS files (`Ferdi.injectCSS()`).

```js
// orat.io integration
module.exports = (Ferdi) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const FerdiData = document.querySelector('#FerdiMessages').dataset;
    if (FerdiData) {
      direct = FerdiData.direct;
      indirect = FerdiData.indirect;
    }

    Ferdi.setBadge(direct, indirect);
  }

  Ferdi.loop(getMessages);
}
```

To get more information about the provided functions, check the [API docs](frontend_api.md).

## Icons

In order to show every service icon crystal clear within the Ferdi UI, we require the icon in both .svg (square) and .png (square, 1024x1024px) formats.

## Dark Mode

You can provide a custom Dark Mode Theme for your recipes just by putting the `darkmode.css` into your recipe folder. Once the `darkmode.css` exists, you can enable the Dark Mode in your service settings.

Recipe Dark Mode is only supported by Ferdi 5.0.0-beta.19+

## Debugging

In order to debug your service integration, open Ferdi and use the shortcut `Cmd/Ctrl+Alt+Shift+i` to open the recipes developer tools.

## Publishing

Ferdi uses its recipe repository at <https://github.com/getferdi/recipes> to publish recipes to all clients.

Publishing your recipes to Ferdi is super easy! When you used our recipe creation script, we have created a folder for your recipe inside Ferdi's internal folders (the one that got automatically opened after you ran our script).

Simply copy that whole folder into the repositories "recipes" folder. You'll now need to push your changes to Git and create a Pull Request from your fork repository to our repository using the GitHub website.
