# StackExchange for Ferdi

An unofficial Ferdi recipe for StackExchange

## Know Issues

* No Automatic Login Prompt

The `serviceURL` is set to `https://stackexchange.com/` instead of `https://meta.stackexchange.com/users/login?returnurl=https%3a%2f%2fstackexchange.com%2fusers%2flogin-or-signup%2fdelegated` as it triggers a "Confirm your new account" dialog for users that aren't a member of the "Meta Stack Exchange" (but are of other websites and are already logged in) and may result in unwanted account creation
