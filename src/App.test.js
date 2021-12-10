import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

test("rendering App", async () => {
  await act(async () => render(<App />));
  const heading = screen.getByRole("heading", {
    name: /the roulette wheel/i,
  });
  expect(heading).toBeInTheDocument();
});
