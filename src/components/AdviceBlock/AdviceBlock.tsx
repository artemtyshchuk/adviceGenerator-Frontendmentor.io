import { Advice } from "types";
import "./adviceBlock.scss";
import DividerIcon from "assets/HR.png";
import ButtonIcon from "assets/casino.png";

interface AdviceBlockProps extends Advice {
  fetchAdvice: () => void;
}

export const AdviceBlock = (props: AdviceBlockProps) => {
  const handleClick = () => {
    props.fetchAdvice();
  };

  return (
    <div className="adviceBlock">
      <div className="container">
        <h1 className="adviceBlock__title">{`Advice #${props.slip.id}`}</h1>
        <h2 className="adviceBlock__adviceText">{props.slip.advice}</h2>
        <img src={DividerIcon} alt="divider" className="adviceBlock__divider" />
        <button className="adviceBlock__mainButton" onClick={handleClick}>
          <img
            src={ButtonIcon}
            alt="buttonIcon"
            className="adviceBlock__buttonIcon"
          />
        </button>
      </div>
    </div>
  );
};
