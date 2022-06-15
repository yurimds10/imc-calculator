const Weight = (props) => {
  return (
    <div>
      <label>
        Weight
        <input
          type="text"
          value={props.weight}
          onChange={(e) => props.setWeight(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Weight;
