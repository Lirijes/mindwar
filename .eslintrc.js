module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    env: {
      browser: true,
      node: true,
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          tabWidth: 2,
          printWidth: 100,
          trailingComma: 'all',
          endOfLine: 'lf',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'prefer-template': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/no-explicit-any': 'error',
  
      // These are rules that we are temporary marking as warning to be able to use the code quality step in our pipeline
      // When all of these warnings are gone we can mark them as errors again.
      eqeqeq: 'warn',
      'import/no-mutable-exports': 'warn',
      'vue/no-mutating-props': 'warn',
    },
  };
  