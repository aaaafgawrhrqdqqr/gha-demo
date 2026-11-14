const test = require('node:test');
const assert = require('node:assert');
const { message } = require('../app');

test('message にバージョンが入る', () => {
  assert.match(message(), /^Hello, CI\/CD \(v\d+\.\d+\.\d+\)$/);
});