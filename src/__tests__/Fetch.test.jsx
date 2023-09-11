import Fetch from "../Elements/Fetch.js";
import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get("/test", (req, res, ctx) => {
    return res(ctx.json("test data"));
  })
);

beforeAll(() => {
  return server.listen();
});
afterEach(() => {
  return server.resetHandlers();
});
afterAll(() => {
  return server.close();
});

const user = userEvent.setup();
describe("mocks for fetch", () => {
  test("renders with initial text", () => {
    render(<Fetch requestURL="/test" />);
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
  
  test("fetches data from request URL", async () => {
    render(<Fetch requestURL="/test" />);
    await user.click(screen.getByRole("button", { name: /get data/i }));
    expect(screen.getByText(/test data/i)).toBeInTheDocument();
  });
});
// await user.click(screen.getByText(/test data/i))
