function Cell(props) {
  const { val, selected } = props;

  return <div className={`num ${selected ? "active" : ""}`}>{val}</div>;
}

export default Cell;
