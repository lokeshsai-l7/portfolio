import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";
import goku from "../../../assets/images/goku.gif";
import leftgoku from "../../../assets/images/leftgoku.gif";
import "./index.css";

const Footer = ({ handleNext, handlePrev, currentIndex }) => {
  const onClickNext = () => {
    handleNext();
  };

  const onClickPrev = () => {
    handlePrev();
  };

  return (
    <div
      className={
        currentIndex !== 0
          ? "footer-container display-space"
          : "footer-container"
      }
    >
      {currentIndex !== 0 && (
        <button className="next-btn" type="button" onClick={onClickPrev}>
          <img alt="goku" src={leftgoku} className="goku" />
          <MdArrowCircleLeft />
          Prev...
        </button>
      )}
      <button className="next-btn" type="button" onClick={onClickNext}>
        ...Next <MdArrowCircleRight />
        <img alt="goku" src={goku} className="goku" />
      </button>
    </div>
  );
};

export default Footer;
