const { mockRequest, mockResponse } = require("../helpers/interceptor");

const controller = require("../../controllers/game");

describe("Home page '/'", () => {
  it("should render the home page template", async () => {
    let req = mockRequest();
    const res = mockResponse();

    await controller.home(req, res);

    expect(res.render).toHaveBeenCalledWith("index.html");
  });
});
