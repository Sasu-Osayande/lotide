const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['Hey']", () => {
    assert.deepEqual(tail(['Hey']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});