module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // eslint-plugin-vue
    // "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    // "plugin:vue/vue3-recommended",
    // js
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  // 입맛에 맞게 규칙을 바꿀 때 사용
  rules: {
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 10,
        },
        multiline: {
          max: 10,
        },
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
