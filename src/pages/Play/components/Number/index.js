import { FaTrash } from "react-icons/fa";
import Card from "./Card";

function Number(props) {
  const { numTickets } = props;

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
        <button className="reset">
          <FaTrash />
        </button>
      </div>

      <div className="cards">
        {[...Array(numTickets).keys()].map((num) => (
          <Card key={num} />
        ))}
      </div>
    </div>
  );
}

export default Number;
