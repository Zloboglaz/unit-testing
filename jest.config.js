export default {
  // Указываем, что тесты находятся в папке __tests__
  testMatch: ["**/__tests__/**/*.js"],

  // Используем babel-jest для трансформации файлов
  transform: {
    "^.+\\.js$": "babel-jest",
  },

  // Указываем, какие модули НЕ нужно трансформировать (оставляем как есть)
  transformIgnorePatterns: [
    // Игнорируем node_modules, но НЕ игнорируем @babel/runtime и другие ESM-пакеты
    "/node_modules/(?!(?:@babel/runtime|other-esm-package)/)",
  ],

  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
