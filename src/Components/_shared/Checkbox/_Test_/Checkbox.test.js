import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  const mockChange = jest.fn();
  test("checks correctly renreding component", async () => {
    render(
      <Checkbox
        mode="Number"
        handleChange={mockChange}
        value="Number"
        id="Number"
        disable={false}
      />
    );

    const checkBoxElement = screen.getByText(/number/i);
    const checkBoxInputElement = screen.getByTestId(/number/i);
    expect(checkBoxElement).toBeInTheDocument();
    expect(checkBoxInputElement).toBeInTheDocument();
  });

  test("when value is Number, and it test it change event", async () => {
    render(
      <Checkbox
        mode="Number"
        handleChange={mockChange}
        value="Number"
        id="Number"
        disable={false}
      />
    );
    const checkBoxElement = screen.getByText(/number/i);
    const checkBoxInputElement = screen.getByTestId(/number/i);
    expect(checkBoxElement).toBeInTheDocument();
    fireEvent.change(checkBoxInputElement, { target: { value: "Number" } });
    expect(checkBoxInputElement.value).toEqual("Number");
  });

  test("when value is Color, and it test it change event", async () => {
    render(
      <Checkbox mode="Color" handleChange={mockChange} value="Color" id="Color" disable={false} />
    );
    const checkBoxElement = screen.getByText(/color/i);
    const checkBoxInputElement = screen.getByTestId(/color/i);
    expect(checkBoxElement).toBeInTheDocument();
    expect(checkBoxInputElement).toBeInTheDocument();
    fireEvent.change(checkBoxInputElement, { target: { value: "Color" } });
    expect(checkBoxInputElement.value).toEqual("Color");
  });

  test("when input is disabled", async () => {
    render(
      <Checkbox mode="Color" handleChange={mockChange} value="Color" id="Color" disable={true} />
    );
    const checkBoxInputElement = screen.getByTestId(/color/i);
    expect(checkBoxInputElement.disabled).toEqual(true);
  });
});
