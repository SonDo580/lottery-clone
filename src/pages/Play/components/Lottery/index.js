import { useEffect, useState } from "react";
import { Images } from "../../../../images";
import "./Lottery.scss";

const fakeDeadline = new Date();
fakeDeadline.setDate(fakeDeadline.getDate() + 2);

function Lottery() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const time = Date.parse(fakeDeadline) - Date.now();

  const getTime = () => {
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="lottery">
      <div className="img">
        <img src={Images.play.euroMillions} alt="euromillions" />
      </div>
      <p className="time">
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>{" "}
        Remaining
      </p>
      <p className="prize">174,000,000 EUR</p>
    </div>
  );
}

export default Lottery;
