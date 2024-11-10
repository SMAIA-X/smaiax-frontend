import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config({
    ignores: ['dist', 'src/api/openAPI'],
}, {
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked, prettierConfig],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
    plugins: {
        'react': react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        prettier: prettier,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true,
            },
        ],
        'prettier/prettier': 'error',
    },
});
