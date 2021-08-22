const { mockRequest, mockResponse } = require("../../../helpers/interceptor");

const controller = require("../../../../controllers/api/v1/submissions");

describe("Api: submissions controller", () => {
  it("should return a status 200", async () => {
    let req = mockRequest();
    const res = mockResponse();

    await controller.submitEntry(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("should return the points that the submission earned", async () => {
    let req = mockRequest();
    const res = mockResponse();

    req.score = 10;
    const expectedPayload = { points: 10 };

    await controller.submitEntry(req, res);
    expect(res.json).toHaveBeenCalledWith(expectedPayload);
  });
});
