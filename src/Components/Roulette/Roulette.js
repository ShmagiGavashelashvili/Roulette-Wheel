import React, { useState } from "react";
import casino from "../../images/casino.png";
import useSound from "use-sound";
import rouletteSound from "../../sounds/roulette.mp3";
import "../../styles/roulette.scss";
import FormRoulette from "../FormRoulette/FormRoulette";
import Notification from "../Notification/Notification";

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
        className={window.navigator.userAgent.match(/iPhone/i) ? "padding-left" : ""}
        value={num}
        onClick={(e) => handleClickLuckyNumber(e.target.value)}
        disabled={num === chosedNum || mode === "color" || (start && disableBtn)}
      >
        {num}
      </button>
    ));

  return (
    <div className="Roulette">
      <FormRoulette mode={mode} setMode={setMode} reset={setDisableBtn} />
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
        <button
          disabled={mode === "Number" || (start && disableBtn)}
          onClick={(e) => handleClickLuckyColor(e.target.value)}
          value="black"
          className="btn-black"
        >
          black
        </button>
        <button
          disabled={mode === "Number" || (start && disableBtn)}
          value="red"
          onClick={(e) => handleClickLuckyColor(e.target.value)}
          className="btn-red"
        >
          red
        </button>
      </div>
      {mode === "Number" && (
        <p className={start ? "lucky-number" : "lucky-number bck-color"}>{luckyNumber}</p>
      )}
      {mode === "color" && (
        <div style={{ backgroundColor: color }} className={start ? "" : "lucky-color"}></div>
      )}
      <div className="btn-groups">
        <button className="btn-spin" onClick={handelClickStart} disabled={disableBtn}>
          spin
        </button>
        <button className="btn-spin" onClick={reset} disabled={start}>
          reset
        </button>
      </div>
    </div>
  );
}

export default Roulette;
