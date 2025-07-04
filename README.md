# String Search App

This application provides a simple way to find a substring within a larger string using JavaScript’s `indexOf()` method, returning the position of the first occurrence of a specified substring. This project was developed as part of the `Front-End Development` module in my postgraduate course in Software Architecture. In addition to the course requirements, I implemented unit tests for the `findStringInsideAString` function using [Jest](https://jestjs.io/), ensuring robust string search behavior across various scenarios.

![image](https://github.com/user-attachments/assets/cd587f1d-8e0e-4e0e-b17a-718cbecada72)

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
- [GitHub Actions Configuration](#gitHub-actions-configuration)
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
├── .github/
│   └── workflows/
│        └── ci.yml
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

- src/index.html: The main HTML file.
- src/index.js: The entry point JavaScript file with event listeners.
- src/stringSearch.js: The module containing findStringInsideAString and displayResult.
- tests/stringSearch.test.js: The Jest unit tests.
- webpack.config.js: Webpack configuration for bundling.
Other configuration files (package.json, .babelrc) for dependencies and transpilation.

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
- **Clean Output:** `clean: true` ensures `dist/` is cleared before each build

---

## Testing

Tests are located in the `tests/` directory and use [Jest](https://jestjs.io/). Jest is configured for ES modules and Babel transpilation. To run all tests:

    npm test

To run tests with coverage:

    npm test -- --coverage

### Test Coverage

The tests cover:

    Successful string matches (including case-insensitive searches).
    Unsuccessful searches (string not found).
    Edge cases (empty input, non-string input).
    Boundary conditions (strings at the start and end of the text).
    Proper DOM updates (message, class, and ARIA attributes).

---

## GitHub Actions Configuration

The project uses GitHub Actions for continuous integration. The pipeline is triggered on push events and workflow dispatches.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

---

## License

[MIT](LICENSE)

