import js from '@eslint/js';
import fsdImport from 'eslint-plugin-fsd-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'fsd-import': fsdImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // fsd-import 규칙 설정
      'fsd-import/fsd-relative-path': 'error', // 같은 슬라이스 내에서는 상대 경로 강제
      'fsd-import/public-api-imports': 'error', // 절대 경로는 공개 API를 통해서만
      'fsd-import/layer-imports': [
        'warn',
        {
          allow: [],
          alias: '@', // alias가 '@'일 경우
          basePath: 'src', // FSD 루트 경로가 'src'일 경우
          layers: ['app', 'pages', 'features', 'entities', 'shared'], // FSD 레이어 정의
        },
      ],
    },
  }
);
