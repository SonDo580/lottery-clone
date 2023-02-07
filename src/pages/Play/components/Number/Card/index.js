import "./Card.scss";
import Cell from "./Cell";

function Card() {
  return (
    <div className="card">
      <div className="buttons">
        <button className="choose">Quick Select</button>
        <button className="reset">Reset</button>
      </div>

      <p>Select 5 numbers</p>
      <div className="numTable table1">
        {[...Array(50).keys()].map((num) => (
          <Cell key={num} val={num + 1} />
        ))}
      </div>

      <p>Select 2 numbers</p>
      <div className="numTable table2">
        {[...Array(12).keys()].map((num) => (
          <Cell key={num} val={num + 1} />
        ))}
      </div>
    </div>
  );
}

export default Card;
