function Cell(props) {
  const { val, selected, hanldeClick } = props;

  return (
    <div onClick={hanldeClick} className={`num ${selected ? "active" : ""}`}>
      {val}
    </div>
  );
}

export default Cell;
