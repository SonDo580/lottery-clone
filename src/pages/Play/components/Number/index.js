import { FaTrash } from "react-icons/fa";

function Number() {
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
        <button className="choose" data-function="quickPickAll">
          Quick Select
        </button>
        <button className="reset" data-function="resetAll">
          <FaTrash />
        </button>
      </div>

      <div className="cards"></div>
    </div>
  );
}

export default Number;
