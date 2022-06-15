const Height = (props) => {
  return (
    <label>
      Height
      <input
        type="text"
        value={props.height}
        onChange={(e) => props.setHeight(e.target.value)}
      />
    </label>
  );
}

export default Height;
