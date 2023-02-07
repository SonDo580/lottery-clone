import { useState } from "react";
import Confirm from "./components/Confirm";
import Lottery from "./components/Lottery";
import Mode from "./components/Mode";
import Number from "./components/Number";
import Ticket from "./components/Ticket";

function Play() {
  const [numTickets, setNumTickets] = useState(3);

  const changeNumTickets = (value) => {
    setNumTickets(value);
  };

  return (
    <>
      <Lottery />
      <Ticket changeNumTickets={changeNumTickets} />
      <Number numTickets={numTickets} />
      <Mode />
      <Confirm />
    </>
  );
}

export default Play;
