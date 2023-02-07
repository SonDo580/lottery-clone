import { FaTrash } from "react-icons/fa";

function Card() {
  return (
    <div className="card">
      <div className="buttons">
        <button className="choose">Quick Select</button>
        <button className="reset">
          <FaTrash />
        </button>
      </div>

      <p>Select 5 numbers</p>
      <div className="numTable table1">
        {[...Array(50).keys()].map((num) => (
          <div key={num} className="num">
            {num + 1}
          </div>
        ))}
      </div>

      <p>Select 2 numbers</p>
      <div className="numTable table2">
        {[...Array(12).keys()].map((num) => (
          <div key={num} className="num">
            {num + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
