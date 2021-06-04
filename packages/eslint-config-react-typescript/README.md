# @epandco/eslint-config-react-typescript

EP+Co's standard ESLint config for React (TypeScript) projects

## Installtion
```shell
$ npm install --save-dev eslint @epandco/eslint-config-react-typescript
```

## Usage
To use `@epandco/eslint-config-react-typescript`, simply add it to the
[`extends`](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) field of your project's
[ESLint configuration](https://eslint.org/docs/user-guide/configuring):

```js
{
  "extends": "@epandco/eslint-config-react-typescript"
}
```

Additional project-specific rules can be added when needed:

```js
{
  "extends": "@epandco/eslint-config-react-typescript",
  "rules": {
    // Project-specific rules...
  }
}
```