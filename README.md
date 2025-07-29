# HW 11. Personal information + browser session

Create a program that:

1. Receives **user input** via `prompt` and `confirm`

2. Creates a **object** `session` containing all the collected information

3. Has a nested object and an array

4. Uses all data types

## Steps:

**Collecting data via browser:**

* Ask for name (`prompt`) → `string`
* Ask for age → `number` (convert from string)
* Ask if the user wants to receive notifications (`confirm`) → `boolean`
* Create a dummy `userId` as `bigInt` (you can just write it manually `1234567890123456789n`)
* Set the `lastLogin` field to `null`
* Create a `nickname` field, but don't set a value (leave it `undefined`)
* Add an array `favoriteTech` of three technologies (any)
* Add a nested `settings` object with the following fields:
* `theme`: "dark" or "light"
* `autoLogin`: `false`

**Create a session object that will contain all this data.**

**Output:**

* `alert` with a short message: "Hello, [name]! Your ID is [userId]"
* In `console.log` — the entire object
* In `console.log` — the type of each field (via `typeof`)
