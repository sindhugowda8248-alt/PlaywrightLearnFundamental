# Playwright Learn Fundamental

A learning project to master the fundamentals of **Playwright** - a modern end-to-end testing framework for web applications.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Cases](#test-cases)
- [Configuration](#configuration)
- [Resources](#resources)

## Overview

This project contains basic test automation examples using Playwright to learn fundamental concepts of:
- Browser automation
- Test assertions
- Waiting and synchronization
- Page interactions
- End-to-end testing best practices

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sindhugowda8248-alt/PlaywrightLearnFundamental.git
cd PlaywrightLearnFundamental
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
PlaywrightLearnFundamental/
├── tests/
│   └── 01_Basics/
│       └── lab_209.spec.ts          # Basic test examples
├── playwright-report/               # Test reports
├── test-results/                    # Test execution results
├── package.json                     # Project dependencies
├── playwright.config.ts             # Playwright configuration
└── README.md                        # Project documentation
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in a specific file:
```bash
npx playwright test tests/01_Basics/lab_209.spec.ts
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

Run tests with UI mode (interactive debugging):
```bash
npx playwright test --ui
```

Generate and view test report:
```bash
npx playwright show-report
```

## Test Cases

### 01_Basics

#### lab_209.spec.ts
- **Test**: Verify our first test case
  - Navigates to `https://app.vwo.com`
  - Verifies the page title is "Login - VWO"
  - Tests basic page navigation and assertion

## Configuration

The project uses `playwright.config.ts` for test configuration. Key settings:
- Test timeout
- Browser types (Chromium, Firefox, WebKit)
- Test report generation
- Screenshot and video capture options

## Resources

- [Playwright Official Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Test Reporting](https://playwright.dev/docs/test-reporters)
- [Debugging Tests](https://playwright.dev/docs/debug)

## License

ISC

## Author

[Your Name/Profile]

---

Happy testing! 🎭
