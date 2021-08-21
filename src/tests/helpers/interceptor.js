module.exports = {
  mockRequest: () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.app = jest.fn().mockReturnValue(req);
    req.app.locals = jest.fn().mockReturnValue(req);
    req.app.locals.scoreBoard = jest.fn().mockReturnValue(req);
    req.app.locals.scoreBoard.getScores = jest.fn().mockReturnValue(req);
    return req;
  },

  mockResponse: () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.render = jest.fn().mockReturnValue(res);
    return res;
  },
  // mockNext: () => jest.fn()
};
