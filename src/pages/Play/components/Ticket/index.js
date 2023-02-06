function Ticket() {
  return (
    <div className="chooseTicket">
      <h2>
        <span>Step 1:</span> Choose number of tickets
      </h2>
      <ul>
        <li data-num="1">1 ticket</li>
        <li data-num="3" className="active">
          3 tickets
        </li>
        <li data-num="5">5 tickets</li>
        <li data-num="10">10 tickets</li>
        <li data-num="15">15 tickets</li>
      </ul>
    </div>
  );
}

export default Ticket;
