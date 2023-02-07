import { FaTrash } from "react-icons/fa";

function Card() {
  return (
    <div class="card">
      <div class="buttons">
        <button class="choose">Quick Select</button>
        <button class="reset">
          <FaTrash />
        </button>
      </div>

      <p>Select 5 numbers</p>
      <div class="numTable table1">
        {[...Array(50).keys()].map((num) => (
          <div class="num">{num}</div>
        ))}
      </div>

      <p>Select 2 numbers</p>
      <div class="numTable table2">
        {[...Array(12).keys()].map((num) => (
          <div class="num">{num}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;
