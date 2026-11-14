const VERSION = '1.3.1';

function message() {
  return `Hello, CI/CD (v${VERSION})`;
}

module.exports = { VERSION, message };
