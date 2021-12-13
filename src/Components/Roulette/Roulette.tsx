import React, { useState } from "react";
import casino from "../../images/casino.png";
import useSound from "use-sound";
import "../../styles/roulette.scss";
import FormRoulette from "../FormRoulette/FormRoulette";
import Notification from "../Notification/Notification";
import Button from "../_shared/Button/Button";
import rouletteSound from "../../sounds/roulette.mp3"


function Roulette() {
  const [start, setStart] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("Number");
  const [play] = useSound(rouletteSound);
  const [show, setShow] = useState<boolean>(false);
  const [color, setColor] = useState<string>("");
  const [disableBtn, setDisableBtn] = useState<boolean>(true);
  const [luckyNumber, setLuckyNumber] = useState<number | null>(null);
  const [luckycolor, setluckyColor] = useState<string | null>(null);
  const [numbers] = useState<number[]>(Array.from(Array(37).keys()));
  const [chosedNum, setChosedNum] = useState<number | null>(null);

  let colors: [string, string] = ["black", "red"]
  let randomNumber: number;
  let randomColor: number;

  const handelClickStart = (): void => {
    randomNumber = Number(Math.floor(Math.random() * 36 + 1));
    randomColor = Math.floor(Math.random() * 2);
    setStart(true);
    play();
    setShow(false);
    setLuckyNumber(null);
    setColor("");
    setDisableBtn(true);
    setTimeout((): void => {
      setLuckyNumber(randomNumber);
      setStart(false);
      setShow(true);
      setDisableBtn(true);
      setColor(colors[randomColor]);
    }, 9200);
    setTimeout((): void => {
      setColor("");
      setLuckyNumber(null);
      setChosedNum(null);
      setluckyColor(null);
      setDisableBtn(true);
      setShow(false);
    }, 12900);
  };

  const reset = () => {
    setShow(false);
    setStart(false);
    setDisableBtn(true);
    setLuckyNumber(null);
    setChosedNum(null);
    setMode("Number");
    setluckyColor('');
    setColor("");
  };

  const handleClickLuckyNumber = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setDisableBtn(false);
    setChosedNum(Number((e.target as HTMLButtonElement).value));
  };

  const handleClickLuckyColor = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setDisableBtn(false);
    setluckyColor((e.target as HTMLButtonElement).value);
  };

  const generateNumbers = (): JSX.Element[] =>
    numbers.map((num) => (
      <button
        key={num}
        data-testid={`btns-${num}`}
        className={window.navigator.userAgent.match(/iPhone/i) ? "padding-left" : ""}
        value={num}
        onClick={handleClickLuckyNumber}
        disabled={num === chosedNum || mode === "Color" || (start && disableBtn)}
      >
        {num}
      </button>
    ));

  return (
    <div className="Roulette">
      <FormRoulette
        mode={mode}
        setMode={setMode}
        reset={setDisableBtn}
        disable={start && disableBtn}
      />
      <img src={casino} alt="wheel" className={start ? "roulette animation" : "roulette"} />
      {show && (
        <Notification
          mode={mode}
          color={color}
          chosedNum={chosedNum}
          luckyNumber={luckyNumber}
          luckycolor={luckycolor}
        />
      )}
      <div className="btn-numbers">
        {generateNumbers()}
        <div className="color-btns">
          <Button
            title="black"
            disable={mode === "Number" || (start && disableBtn)}
            handleClick={handleClickLuckyColor}
            className="btn-black"
          />
          <Button
            title="red"
            disable={mode === "Number" || (start && disableBtn)}
            handleClick={handleClickLuckyColor}
            className="btn-red"
          />
        </div>
      </div>
      {mode === "Number" && (
        <p className={start ? "lucky-number" : "lucky-number bck-color"}>{luckyNumber}</p>
      )}
      {mode === "Color" && (
        <div style={{ backgroundColor: color }} className={start ? "" : "lucky-color"}></div>
      )}
      <div className="btn-groups">
        <Button
          className="btn-spin"
          title="spin"
          handleClick={handelClickStart}
          disable={disableBtn}
        />
        <Button className="btn-spin" title="reset" handleClick={reset} disable={start} />
      </div>
    </div>
  );
}

export default Roulette;
