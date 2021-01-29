const add1 = require('../src/file1');
const assert = require('assert');
describe('add1()测试', function () {
  it('1 + 1 = 2', function () {
    assert.strictEqual(add1(1, 1), 2);
  });
});
