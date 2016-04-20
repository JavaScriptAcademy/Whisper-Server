'use strict';

const assert = require('assert');
const processMessage = require('../../../../src\services\rooms\hooks\processMessage.js');

describe('rooms processMessage hook', () => {
  it('hook can be used', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };
    
    processMessage()(mockHook);
    
    assert.ok(mockHook.processMessage);
  });
});
