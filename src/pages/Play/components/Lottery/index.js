import { Images } from "../../../../images";
import "./Lottery.scss";

function Lottery() {
  return (
    <div className="lottery">
      <div className="img">
        <img src={Images.play.euroMillions} alt="euromillions" />
      </div>
      <p className="time">
        <span>2:03:05</span> Remaining
      </p>
      <p className="prize">174,000,000 EUR</p>
    </div>
  );
}

export default Lottery;
