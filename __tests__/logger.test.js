'use strict';

const loggerMiddleware = require('../src/middleware/logger.js');

describe('LOGGER MIDDLEWARE TESTING:', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach( () => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach( () => {
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

});
