import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertSecureNode } from '../scripts/check-node-runtime.mjs';

test('reject unpatched, unsupported and prerelease runtimes', () => {
  for (const version of ['20.19.0', '22.23.4', '24.21.9', '24.22.0', '24.22.1-rc.1', '25.0.0', '26.12.1', 'invalid']) {
    assert.throws(() => assertSecureNode(version), /Security baseline/);
  }
});
test('accept the patched Node 24 LTS baseline and subsequent patches', () => {
  for (const version of ['24.22.1', '24.22.2', '24.23.0']) assert.equal(assertSecureNode(version), version);
});
