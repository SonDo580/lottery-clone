import { useSelector } from "react-redux";
import { ticketConstants } from "../../../../redux/play/constants";
import { numTicketsSelector } from "../../../../redux/play/selectors";
import "./Ticket.scss";

function Ticket(props) {
  // const { arrayValues, numTickets, changeNumTickets } = props;
  const numTickets = useSelector(numTicketsSelector);

  return (
    <div className="chooseTicket">
      <h2>
        <span>Step 1:</span> Choose number of tickets
      </h2>
      <ul>
        {ticketConstants.numbers.map((value) => (
          <li
            key={value}
            className={value === numTickets ? "active" : ""}
            // onClick={() => changeNumTickets(value)}
          >
            {value} {value === 1 ? "ticket" : "tickets"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ticket;
