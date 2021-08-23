# Integration Config

A [Ferdi](https://getferdi.com) recipe is a node module. In order to learn more about node modules and their configuration check the official [Node.js documentation](https://nodejs.org/api/modules.html) / [npm package.json documentation](https://docs.npmjs.com/files/package.json).

## Table of Contents

- [Integration Config](#integration-config)
  - [Table of Contents](#table-of-contents)
  - [Config flags](#config-flags)
  - [Example](#example)

## Config flags

`string` **id** _mandatory_<br />
Unique identifier name of the plugin. The name of the plugin folder has to be the same.

This ID cannot contain any special characters or spaces.

`string` **name** _mandatory_<br />
Display name of the service.

`string` **version** _mandatory_<br />
Version number. Will be used for auto updating the integrations. The version number must be in a semver compatible format: eg `1.0.0`.
**important:** the version will be used to figure out if a new recipe update should be deployed to the user. If you make changes to a recipe, **always** increase the version number or Ferdi won't update your recipe.

`string` **license**<br />
The license of the integration. We prefer MIT, but here is a list of all the available SPDX licenses http://spdx.org/licenses/

`string` **repository**<br />
Link to your Github, Gitlab or Bitbucket public repository. Not used in the application, but is very helpful if we need to log bugs or update to newer versions, etc.

`array[string]` **aliases**<br />
The list of alternate names that this recipe can be called

`object` **config** _mandatory_<br />
This is the Ferdi-specific integration config.

* `string` **serviceURL**<br/>
Defines the URL that should be loaded into the Ferdi webview.
<br /><br />
If you want to load a simple URL like `https://www.messenger.com`, you can simply define it via the `serviceURL` parameter. If your service URL is team based, e.g. Slack or HipChat you can use `https://{teamId}.slack.com`.
<br /><br />
If your service works with custom URLs, just leave this empty.
<br /><br />
**Examples**

```json
{
    "serviceURL": "https://www.messenger.com"
}
```

<br />

```json
{
    "serviceURL": "https://{teamId}.slack.com"
}
```

* `boolean` **hasTeamId** _default: false_<br />
Is this a team based service? If true, the interface to add the service will require a team identifier. e.g. `[teamId]`.slack.com
* `string` **urlInputPrefix**<br />
This option is only used in combination with `hasTeamId: true` in order to display the value of `urlInputPrefix` before the input for TeamId to make it obvious to the user what input is required from them. Eg. _&lt;TeamID&gt;.hipchat.com_
* `string` **urlInputSuffix**<br />
This option is only used in combination with `hasTeamId: true` in order to display the value of `urlInputSuffix` after the input for TeamId to make it obvious to the user what input is required from them. Eg. _&lt;TeamID&gt;.hipchat.com_
* `boolean` **hasHostedOption** _default: false_<br />
If a service can be hosted and has a teamId or customUrl
* `boolean` **hasCustomUrl** _default: false_<br />
On-premise services like HipChat, Mattermost, ... require a custom URL. This option enables the user to enter a custom URL when adding the service.
* `boolean` **hasNotificationSound** _default: false_<br />
Some services provide their own notification sound. In order to avoid multiple sounds when the user receives a message set this to `true`. If the service has no built in notification sound set this to `false`.
* `boolean` **hasDirectMessages** _default: true_<br />
Some services have direct 1x1 messages e.g. a mention or message to every user in a channel (@channel). If this flag is set to `true`, the user can enable/disable if there should be a badge for direct messages.
* `boolean` **hasIndirectMessages** _default: false_<br />
Services like Slack or HipChat have direct messages e.g. a mention or message to every user in a channel (@channel) and indirect messages e.g. general discussion in a channel. If this flag is set to `true`, the user can enable/disable if there should be a badge for indirect messages.
* `string` **message**<br />
Info message that will be displayed in the add/edit service preferences screen.
* `string` **disablewebsecurity**<br />
Some services like hangoutschat need the web security disabled.

## Example

The [mattermost configuration](https://github.com/getferdi/recipes/blob/master/recipes/mattermost/package.json) is a typical example.
