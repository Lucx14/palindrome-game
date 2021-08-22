const { mockRequest, mockResponse } = require("../../../helpers/interceptor");

const controller = require("../../../../controllers/api/v1/scores");

describe("Api: scores controller", () => {
  it("should return a status 200", async () => {
    let req = mockRequest();
    const res = mockResponse();

    await controller.getScores(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("should return the current scores", async () => {
    let req = mockRequest();
    const res = mockResponse();

    const dummyData = [
      { name: "test name", points: 10 },
      { name: "test name 2", points: 33 },
    ];

    const myMock = jest.fn();
    myMock.mockReturnValue(dummyData);
    req.app.locals.scoreBoard.getScores = myMock;

    await controller.getScores(req, res);
    expect(res.json).toHaveBeenCalledWith(dummyData);
  });
});
