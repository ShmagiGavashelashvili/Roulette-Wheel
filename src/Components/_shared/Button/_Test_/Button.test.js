import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "../Button";

describe("Shared Button", () => {
  let mockClick = jest.fn();
  test("if button appear correctyly", async () => {
    await act(async () =>
      render(<Button title="black" className="btn-spin" disable={false} handleClick={mockClick} />)
    );
    const buttonElement = screen.getByRole("button", { name: /black/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.disabled).toEqual(false);
    expect(buttonElement.className).toEqual("btn-spin");
  });
});
