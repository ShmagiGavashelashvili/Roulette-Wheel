import { render, screen } from "@testing-library/react";
import Notification from "../Notification";

describe("Notification Component", () => {
  test("rendering Notification", () => {
    render(<Notification mode="Number" chosedNum={5} luckyNumber={6} color="" luckycolor="" />);
    const notificationElement = screen.getByRole("img");
    expect(notificationElement).toBeInTheDocument();
  });
});
