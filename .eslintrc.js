module.exports = {
  extends: ["plugin:vue/vue3-recommended", "airbnb-base"],
  // defineProps defineEmits defineExpose withDefaults 是全局使用的，不需要从 vue 中引入
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 允许部分页面引用 devDependencies 中的依赖，比如 vite.config.ts 使用了 devDependencies 中的依赖
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "vite.config.ts",
        ],
      },
    ],
    // 允许大写字母开头的函数不作为构造函数，vite.config.ts 中使用的 Components AntDesignVueResolver 都属于大写字母开头不作为构造函数
    "new-cap": ["error", { capIsNew: false }],
    // fix: Missing file extension "ts" for "". eslint(import/extensions)
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    // fix: Unable to resolve path to module ''. eslint(import/no-unresolved)
    "import/resolver": {
      typescript: {
        project: `${__dirname}/tsconfig.json`,
      },
    },
  },
};
