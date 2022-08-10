# vue elint error

vue.config.js에서 아래와 같이 ㄱㄱ
`lintOnSave: false,` 린트 에러나면 꺼주기

# vue template problem

jscofig.json에서 아래와 같이 ㄱㄱ

` "jsx": "preserve",`

https://velog.io/@im_sulhwa/vue-template-problem-%ED%95%B4%EA%B2%B0

# npx degit clone할주소 => 설치할 주소

git clone과 달리 버전 내역이 삭제됨


# file-loader

webpack.conf
ig.js 아래와 같이 설정

`npm i file-loader`

```json
{

    {
    alias: {
          "~": path.resolve(__dirname, "src"),
          assets: path.resolve(__dirname, "src/assets"),
     },
    }
    {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
    }
}
```

# babel-eslint -> @babel/eslint-parser

.eslintrc.js

- old .eslintrc.js

```js
module.exports = {
  parser: "babel-eslint",
};
```

- new .eslintrc.js

```js

module.exports = {
parser: '@babel/eslint-parser',

```
