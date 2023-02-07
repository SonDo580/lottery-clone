import { useSelector } from "react-redux";
import { ticketsSelector } from "../../../../redux/play/selectors";
import Card from "./Card";
import "./Number.scss";

function Number() {
  const tickets = useSelector(ticketsSelector);

  return (
    <div className="chooseNumber">
      <h2>
        <span>Step 2:</span> Choose your lucky numbers
      </h2>
      <p className="note">
        *Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
        repellendus distinctio
      </p>
      <div className="buttonsAll">
        <button className="choose">Quick Select</button>
        <button className="reset">Reset All</button>
      </div>

      <div className="cards">
        {tickets.map((ticket, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Number;
