import eslintJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import sonarjs from 'eslint-plugin-sonarjs';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const PARENS_NEW_LINE = 'parens-new-line';

export default tseslint.config({
  // Apply to TypeScript and JavaScript files
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],

  // Ignore build outputs and dependencies
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.expo/**',
    '**/android/**',
    '**/ios/**',
    '**/assets/**',
    '**/*.config.js',
    '**/*.config.ts',
    'app.json',
    'expo-env.d.ts',
  ],

  // Register plugins
  plugins: {
    react,
    'react-native': reactNative,
    'react-hooks': reactHooks,
    'unused-imports': unusedImports,
    import: importPlugin,
    promise,
    sonarjs,
  },

  // Extend recommended configurations
  extends: [
    eslintJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
  ],

  // Language options
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
    globals: {
      // React Native globals
      __DEV__: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      console: 'readonly',
      // Expo globals
      expo: 'readonly',
      // Jest/Testing globals
      jest: 'readonly',
      describe: 'readonly',
      it: 'readonly',
      expect: 'readonly',
      beforeEach: 'readonly',
      afterEach: 'readonly',
    },
  },

  // React settings
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        paths: ['app', 'assets'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },

  // Custom rules configuration
  rules: {
    // ==========================================
    // JAVASCRIPT/TYPESCRIPT CORE RULES
    // ==========================================
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'consistent-return': 'error',
    'object-shorthand': [
      'error',
      'always',
      { avoidQuotes: true, ignoreConstructors: true },
    ],
    curly: ['error', 'multi-line'],
    'no-else-return': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'prefer-const': 'error',
    eqeqeq: 'error',
    'no-return-await': 'warn',
    'default-param-last': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-nested-ternary': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-template': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-arrow-callback': ['error', { allowUnboundThis: true }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-var': 'error',
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'prefer-spread': 'warn',
    'no-useless-concat': 'warn',
    'no-constant-condition': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-regex-spaces': 'warn',
    'no-unsafe-negation': 'error',
    'valid-typeof': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-multi-spaces': 'warn',
    'no-new-func': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'warn',
    'no-useless-return': 'warn',
    'require-await': 'warn',
    yoda: 'warn',

    // ==========================================
    // REACT RULES
    // ==========================================
    'react/react-in-jsx-scope': 'off', // Not needed in React Native
    'react/prop-types': 'off', // Using TypeScript for prop validation
    'react/display-name': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-array-index-key': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'off', // Not needed in modern React
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-pascal-case': ['error', { allowNamespace: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: PARENS_NEW_LINE,
        assignment: PARENS_NEW_LINE,
        return: PARENS_NEW_LINE,
        arrow: PARENS_NEW_LINE,
        condition: PARENS_NEW_LINE,
        logical: PARENS_NEW_LINE,
        prop: 'ignore',
      },
    ],
    'react/hook-use-state': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: false,
        locale: 'auto',
      },
    ],

    // ==========================================
    // REACT NATIVE SPECIFIC RULES
    // ==========================================
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': [
      'error',
      {
        skip: ['CustomText', 'Text'],
      },
    ],
    'react-native/no-single-element-style-arrays': 'error',

    // ==========================================
    // REACT HOOKS RULES
    // ==========================================
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ==========================================
    // TYPESCRIPT RULES
    // ==========================================
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // Using unused-imports plugin
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],

    // ==========================================
    // IMPORT/EXPORT RULES
    // ==========================================
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'sibling',
          'parent',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'expo',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'expo-*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@expo/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/app/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    'import/no-unresolved': 'off', // TypeScript handles this
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-duplicates': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-anonymous-default-export': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': ['warn', { maxDepth: 1, ignoreExternal: true }],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/export': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        pattern: {
          json: 'always',
          png: 'always',
          jpg: 'always',
          svg: 'always',
        },
      },
    ],
    // Note: For React Native, relative imports are common and acceptable
    // These rules are disabled for RN flexibility
    // "import/no-relative-packages": "error",
    // "import/no-relative-parent-imports": "error",

    // ==========================================
    // UNUSED IMPORTS RULES
    // ==========================================
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // ==========================================
    // PROMISE RULES
    // ==========================================
    'promise/always-return': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-nesting': 'warn',
    'promise/param-names': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/no-new-statics': 'error',

    // ==========================================
    // SONARJS RULES (Code Quality)
    // ==========================================
    'sonarjs/cognitive-complexity': ['warn', 15],
    'sonarjs/no-duplicate-string': ['warn', { threshold: 5 }],
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-duplicated-branches': 'warn',
    'sonarjs/no-redundant-jump': 'warn',
    'sonarjs/no-unused-collection': 'warn',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-single-boolean-return': 'warn',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-useless-catch': 'error',
  },
});
