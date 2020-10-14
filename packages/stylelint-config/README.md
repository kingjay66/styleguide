# @epandco/stylelint-config

EP+Co's standard stylelint config for CSS and Sass projects

## Installtion
```shell
$ npm install --save-dev stylelint @epandco/stylelint-config
```

## Usage
To use `@epandco/stylelint-config`, simply add it to the 
[`extends`](https://stylelint.io/user-guide/configure#extends) field of your project's 
[stylelint configuration](https://stylelint.io/user-guide/configure):

```js
{
  "extends": "@epandco/stylelint-config"
}
```

Additional project-specific rules can be added when needed:

```js
{
  "extends": "@epandco/stylelint-config",
  "rules": {
    // Project-specific rules...
  }
}
```