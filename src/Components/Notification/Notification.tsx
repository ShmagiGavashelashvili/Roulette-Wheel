import React from "react";
import "../../styles/roulette.scss";

interface NotificationProps {
  mode: string,
  chosedNum: number | null,
  luckyNumber: number | null,
  color: string,
  luckycolor: string | null
}

function Notification({ mode, chosedNum, luckyNumber, color, luckycolor }: NotificationProps) {
  return (
    <div className="notification not-animation">
      {mode === "Number"
        ? chosedNum === luckyNumber && (
          <img
            className="winner"
            alt="winner"
            src="https://media.giphy.com/media/g9582DNuQppxC/source.gif"
          />
        )
        : mode === "Color"
          ? color === luckycolor && (
            <img
              className="winner"
              alt="winner"
              src="https://media.giphy.com/media/g9582DNuQppxC/source.gif"
            />
          )
          : null}

      {mode === "Number"
        ? chosedNum !== luckyNumber && (
          <img
            className="looser"
            alt="looser"
            src="https://media.giphy.com/media/14xreOl4Yva0dW/source.gif"
          />
        )
        : mode === "Color"
          ? color !== luckycolor && (
            <img
              className="winner"
              alt="winner"
              src="https://media.giphy.com/media/14xreOl4Yva0dW/source.gif"
            />
          )
          : null}
    </div>
  );
}

export default Notification;