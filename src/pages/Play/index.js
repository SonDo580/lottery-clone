import { useState } from "react";
import Confirm from "./components/Confirm";
import Lottery from "./components/Lottery";
import Mode from "./components/Mode";
import Number from "./components/Number";
import Ticket from "./components/Ticket";

const arrayValues = [1, 3, 5, 10, 15];

function Play() {
  const [numTickets, setNumTickets] = useState(arrayValues[1]);

  const changeNumTickets = (value) => {
    setNumTickets(value);
  };

  return (
    <>
      <Lottery />

      <Ticket
        arrayValues={arrayValues}
        numTickets={numTickets}
        changeNumTickets={changeNumTickets}
      />

      <Number numTickets={numTickets} />

      <Mode />

      <Confirm />
    </>
  );
}

export default Play;
