import { render, screen } from "@testing-library/react";
import FormRoulette from "../FormRoulette";

describe("FormRoulette", () => {
  const mockModeFunc = jest.fn();
  const mockeResetFunc = jest.fn();
  test("rendering formRoulette Component", async () => {
    render(
      <FormRoulette setMode={mockModeFunc} reset={mockeResetFunc} mode="Number" disable={false} />
    );

    const headingElement = screen.getByRole("heading", { name: /select mode/i });
    expect(headingElement).toBeInTheDocument();
  });
});
