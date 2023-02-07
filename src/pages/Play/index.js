import Confirm from "./components/Confirm";
import Lottery from "./components/Lottery";
import Mode from "./components/Mode";
import Number from "./components/Number";
import Ticket from "./components/Ticket";
import "./Play.scss";

function Play() {
  return (
    <>
      <Lottery />
      <Ticket />
      <Number />
      <Mode />
      <Confirm />
    </>
  );
}

export default Play;
