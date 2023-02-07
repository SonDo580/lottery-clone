import { useDispatch } from "react-redux";
import { ticketConstants } from "../../../../../redux/play/constants";
import { selectNumber } from "../../../../../redux/play/playSlice";
import "./Card.scss";
import Cell from "./Cell";

function Card(props) {
  const dispatch = useDispatch();

  const { ticket } = props;

  const hanldeSelect = (ticketID, table, number) => {
    dispatch(selectNumber(ticketID, table, number));
  };

  return (
    <div className="card">
      <div className="buttons">
        <button className="choose">Quick Select</button>
        <button className="reset">Reset</button>
      </div>

      {Object.keys(ticketConstants.table).map((key) => {
        return (
          <>
            <p>Select {ticketConstants.table[key].maxSelect} numbers</p>
            <div className={`numTable ${key}`}>
              {[...Array(ticketConstants.table[key].numsInTable).keys()].map(
                (num) => (
                  <Cell
                    key={num}
                    val={num + 1}
                    selected={ticket[key].includes(num + 1)}
                    hanldeClick={() => hanldeSelect(ticket.id, key, num + 1)}
                  />
                )
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
