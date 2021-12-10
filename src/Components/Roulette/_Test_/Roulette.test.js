import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Roulette from "../Roulette";

describe("Roullete Component", () => {
  test("Roulette rendering", async () => {
    await act(async () => render(<Roulette />));

    const btnElement = screen.getByTestId(/btns-0/i);
    const roulleteImg = screen.getByRole("img", { name: /wheel/i });
    expect(btnElement).toBeInTheDocument();
    expect(roulleteImg).toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(btnElement.disabled).toEqual(true);
  });

  test("button ellements rendering correctlry", async () => {
    await act(async () => render(<Roulette />));

    const btnElements = screen.getAllByTestId(/btns-/i);
    expect(btnElements.length).toEqual(37);
  });

  test("button ellements clicking event", async () => {
    await act(async () => render(<Roulette />));
    const spinButton = screen.getByRole("button", { name: /spin/i });
    const btnElement = screen.getByTestId(/btns-5/i);
    expect(spinButton).toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(spinButton.disabled).toEqual(false);
  });

  test("spin btn clicking", async () => {
    await act(async () => render(<Roulette />));

    const spinButton = screen.getByRole("button", { name: /spin/i });
    const currBtnElement = screen.getByTestId(/btns-5/i);
    const btnElements = screen.getAllByTestId(/btns-/i);
    fireEvent.click(currBtnElement);
    fireEvent.click(spinButton);
    btnElements.forEach((btn) => {
      expect(btn.disabled).toEqual(true);
    });
  });

  test("spin btn clicking and roulette wheel behaviour", async () => {
    await act(async () => render(<Roulette />));

    const spinButton = screen.getByRole("button", { name: /spin/i });
    const currBtnElement = screen.getByTestId(/btns-5/i);
    const roulleteImg = screen.getByRole("img", { name: /wheel/i });
    fireEvent.click(currBtnElement);
    fireEvent.click(spinButton);
    expect(roulleteImg.className).toEqual("roulette animation");
  });
});
