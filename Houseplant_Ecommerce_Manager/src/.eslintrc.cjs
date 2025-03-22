module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    node: true // Added for potential Node.js usage in the project
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended' // Added for accessibility checks
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jsx-a11y'], // Added jsx-a11y plugin
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused variables
    'react/prop-types': 'off', // Turn off prop-types as you might be using TypeScript
    'jsx-a11y/alt-text': ['warn', { elements: ['img'] }], // Ensure all images have alt text
  },
}
