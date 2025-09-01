# unified-test-framework
A modular, cross-platform automation framework designed for end-to-end testing of web applications, mobile apps, and APIs. Built with scalability and maintainability in mind, it provides a single, adaptable foundation for QA teams to accelerate and standardize their testing efforts across projects and platforms

Built with modern tools like **Selenium**, **Appium**, **Axios**, and **Mocha**, it enables fast, reliable, and scalable test execution across different platforms and environments.

---

## ✅ Key Features

- 🚀 Unified structure for Web, Mobile, and API testing
- 📱 Appium integration for mobile platforms (Android & iOS)
- 🌐 Selenium WebDriver support for cross-browser testing
- 🌐 Axios + Mocha setup for fast and flexible API tests
- 🔄 Reusable utilities and helpers to reduce boilerplate
- 📊 Built-in support for customizable test reports
- ⚙️ CI/CD-friendly and environment-aware configuration
- 🧩 Easy-to-extend architecture for future tools or teams

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adjei-stein/unified-test-framework.git
   ```
2. Navigate to the project directory:
   ```bash
   cd unified-test-framework
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Tests

- **Run all tests:**
  ```bash
  npm test
  ```
- **Run API tests:**
  ```bash
  npm run test:api
  ```
- **Run web tests:**
  ```bash
  npm run test:web
  ```
- **Run mobile tests:**
  ```bash
  npm run test:mobile
  ```

### View Reports

- **Mochawesome:**
  Open `mochawesome-report/mochawesome.html` in your browser after running the tests.

- **Allure:**
  1. Generate the report:
     ```bash
     npm run allure:report
     ```
  2. Open the report:
     ```bash
     allure open allure-report
     ```

---

## 🧱 Ideal For

- QA Engineers working across multiple platforms
- Teams looking to standardize testing tools and practices
- Projects that require fast onboarding and reusable test logic
- Organizations scaling automated testing across squads

---

## 📂 Supported Stack

| Layer       | Tooling             |
|-------------|---------------------|
| Web UI      | Selenium WebDriver  |
| Mobile Apps | Appium              |
| API         | Axios + Mocha       |
| Runner      | Mocha (customizable)|
| Reports     | Mochawesome / Allure|