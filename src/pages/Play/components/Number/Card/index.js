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

      <p>Select {ticketConstants.table.table1.maxSelect} numbers</p>
      <div className="numTable table1">
        {[...Array(ticketConstants.table.table1.numsInTable).keys()].map(
          (num) => (
            <Cell
              key={num}
              val={num + 1}
              selected={ticket.table1.includes(num + 1)}
              hanldeClick={() => hanldeSelect(ticket.id, "table1", num + 1)}
            />
          )
        )}
      </div>

      <p>Select {ticketConstants.table.table2.maxSelect} numbers</p>
      <div className="numTable table2">
        {[...Array(ticketConstants.table.table2.numsInTable).keys()].map(
          (num) => (
            <Cell
              key={num}
              val={num + 1}
              selected={ticket.table2.includes(num + 1)}
              hanldeClick={() => hanldeSelect(ticket.id, "table2", num + 1)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Card;
