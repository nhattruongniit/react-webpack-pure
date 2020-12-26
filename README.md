# SETUP REACT WITH PURE WEBPACK

- axios
- react
- eslint

```bash
# start development localhost:8080
$ npm start

# build production dist/ folder
$ npm run build

# run production
$ serve -s dist
```

## How to setup ESlint

- Install ESLint extension in VSCode

## How to setup axios

```bash
$ npm install @babel/plugin-transform-runtime --save-dev

// .babelrc
{
  ...
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
```
