import "./Ticket.scss";

function Ticket(props) {
  const { arrayValues, numTickets, changeNumTickets } = props;

  return (
    <div className="chooseTicket">
      <h2>
        <span>Step 1:</span> Choose number of tickets
      </h2>
      <ul>
        {arrayValues.map((value) => (
          <li
            key={value}
            className={value === numTickets ? "active" : ""}
            onClick={() => changeNumTickets(value)}
          >
            {value} {value === 1 ? "ticket" : "tickets"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ticket;
