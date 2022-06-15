const Result = (props) => {
  return (
    <div className="result">
      <p>{props.result.toFixed(2)}</p>
    </div>
  );
};

export default Result;
