import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the handleSubmit function", () => {
  test("handleSubmit Result should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
