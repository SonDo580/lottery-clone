import { useReducer } from "react";
import Card from "./Card";
import "./Number.scss";

function Number(props) {
  const { numTickets } = props;

  const [state, dispatch] = useReducer(reducer, numTickets, getInitialState);

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
        <button className="reset">Reset All</button>
      </div>

      <div className="cards">
        {[...Array(numTickets).keys()].map((num) => (
          <Card key={num} id={num} selectedNums={state[num]} />
        ))}
      </div>
    </div>
  );
}

function getInitialState(numTickets) {
  const state = [];
  for (let i = 0; i < numTickets; i++) {
    state.push({ table1: [], table2: [] });
  }
  return state;
}

function reducer() {}

export default Number;
