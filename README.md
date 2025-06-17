# String Search App

This application provides a simple way to find a substring within a larger string using JavaScript’s `indexOf()` method, returning the position of the first occurrence of a specified substring. This project was developed as part of the `Front-End Development` module in my postgraduate course in Software Architecture. In addition to the course requirements, I implemented unit tests for the `findStringInsideAString` function using [Jest](https://jestjs.io/), ensuring robust string search behavior across various scenarios.

---

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Webpack Configuration](#webpack-configuration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Simple web interface for substring search
- Modern JavaScript (ES6+) support via Babel
- Hot-reloading development server (Webpack Dev Server)
- Unit tests with Jest and code coverage reporting
- Modular project structure for easy maintenance

---

## Dependencies

All dependencies are managed via [npm](https://www.npmjs.com/):

**Development Dependencies:**

- `jest`: Automated testing framework
- `webpack`, `webpack-cli`, `webpack-dev-server`: Bundling and development server
- `@babel/core`, `@babel/preset-env`, `babel-loader`: JavaScript transpilation
- `html-webpack-plugin`: Injects bundled scripts into HTML
- `style-loader`, `css-loader`: CSS handling

---

## Project Structure

```
string-search-app/
├── src/
│   ├── index.html
│   ├── index.js
│   └── stringSearch.js
├── tests/
│   └── stringSearch.test.js
├── .babelrc
├── package.json
├── webpack.config.js
└── README.md
```

---

## Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

If not installed, download from [nodejs.org](https://nodejs.org/).

---

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/tadeu-dutra/string-search-app.git
    cd string-search-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The app will open at [http://localhost:8080](http://localhost:8080) with hot reloading enabled.

4. **Build for production:**

    ```bash
    npm run build
    ```

    This creates a `dist/` folder with the production build.

---

## Available Scripts

- `npm start` — Start the development server with hot reloading
- `npm run build` — Build the app for production
- `npm test` — Run all Jest tests
- `npm test -- --coverage` — Run tests with code coverage report

---

## Webpack Configuration

- **Entry/Output:** Entry point is `src/index.js`, output is `dist/bundle.js`
- **HtmlWebpackPlugin:** Injects the bundle into `index.html`
- **Babel:** Transpiles modern JavaScript for browser compatibility
- **Dev Server:** Local server with hot reloading
- **CSS Handling:** CSS is inlined for simplicity; for production, consider using `MiniCssExtractPlugin`
- **Clean Output:** `clean: true` ensures `dist/` is cleared before each build

---

## Testing

- Tests are located in the `tests/` directory and use [Jest](https://jestjs.io/).
- Jest is configured for ES modules and Babel transpilation.
- To run all tests:

    ```bash
    npm test
    ```

- To run tests with coverage:

    ```bash
    npm test -- --coverage
    ```

- If you encounter issues with Jest and ES modules, ensure your `package.json` includes `"type": "module"` or configure Jest’s `moduleNameMapper` as needed.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

---

## License

[MIT](LICENSE)

