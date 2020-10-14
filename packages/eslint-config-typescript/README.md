# @epandco/eslint-config-typescript

EP+Co's standard ESLint config for TypeScript projects

## Installtion
```shell
$ npm install --save-dev eslint @epandco/eslint-config-typescript
```

## Usage
To use `@epandco/eslint-config-typescript`, simply add it to the 
[`extends`](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) field of your project's 
[ESLint configuration](https://eslint.org/docs/user-guide/configuring):

```js
{
  "extends": "@epandco/eslint-config-typescript"
}
```

Additional project-specific rules can be added when needed:

```js
{
  "extends": "@epandco/eslint-config-typescript",
  "rules": {
    // Project-specific rules...
  }
}
```