import React, { useState } from "react";
import casino from "../../images/casino.png";
import useSound from "use-sound";
import rouletteSound from "../../sounds/roulette.mp3";
import "../../styles/roulette.scss";
import FormRoulette from "../FormRoulette/FormRoulette";
import Notification from "../Notification/Notification";
import Button from "../_shared/Button/Button";

function Roulette() {
  const [start, setStart] = useState(false);
  const [mode, setMode] = useState("Number");
  const [play] = useSound(rouletteSound);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);
  const [luckyNumber, setLuckyNumber] = useState(null);
  const [luckycolor, setluckyColor] = useState(null);
  const [numbers] = useState(Array.from(Array(37).keys()));
  const [chosedNum, setChosedNum] = useState(null);

  let colors = ["black", "red"];
  let randomNumber;
  let randomColor;

  const handelClickStart = () => {
    randomNumber = Number(Math.floor(Math.random() * 36 + 1));
    randomColor = Math.floor(Math.random() * 2);
    setStart(true);
    play();
    setShow(false);
    setLuckyNumber(null);
    setColor("");
    setDisableBtn(true);
    setTimeout(() => {
      setLuckyNumber(randomNumber);
      setStart(false);
      setShow(true);
      setDisableBtn(true);
      setColor(colors[randomColor]);
    }, 9200);
    setTimeout(() => {
      setColor("");
      setLuckyNumber(null);
      setChosedNum();
      setluckyColor(null);
      setDisableBtn(true);
      setShow(false);
    }, 12900);
  };

  const reset = () => {
    setShow(false);
    setStart(false);
    setDisableBtn(true);
    setLuckyNumber("");
    setChosedNum(null);
    setMode("Number");
    setluckyColor();
    setColor("");
  };

  const handleClickLuckyNumber = (e) => {
    setDisableBtn(false);
    setChosedNum(Number(e));
  };

  const handleClickLuckyColor = (e) => {
    setDisableBtn(false);
    setluckyColor(e);
  };

  const generateNumbers = () =>
    numbers.map((num) => (
      <button
        key={num}
        data-testid={`btns-${num}`}
        className={window.navigator.userAgent.match(/iPhone/i) ? "padding-left" : ""}
        value={num}
        onClick={(e) => handleClickLuckyNumber(e.target.value)}
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
            handleClick={(e) => handleClickLuckyColor(e.target.value)}
            className="btn-black"
          />
          <Button
            title="red"
            disable={mode === "Number" || (start && disableBtn)}
            handleClick={(e) => handleClickLuckyColor(e.target.value)}
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
