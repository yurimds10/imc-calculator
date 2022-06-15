const Result = (props) => {
  const returnResult = () => {
    if(props.result === 0) {
      return;

    } else if(props.result < 18.5) {
      return <p>Under Weight</p>

    } else if(props.result >= 18.5 && props.result <= 24.9) {
      return <p>Normal Weight</p>

    } else if(props.result >= 25 && props.result <= 29.9) {
      return <p>Over Weight</p>

    } else if(props.result >= 30 && props.result <= 34.9) {
      return <p>Obesity Level I</p>

    } else if(props.result >= 35 && props.result <= 39.9) {
      return <p>Obesity Level II</p>

    } else if(props.result >= 39.9) {
      return <p>Obesity Level III</p>
    }
  }
  return (
    <div className="result-box">
      <div className="text">
        Result:
        {returnResult()}
      </div>
      <p className="number">{props.result.toFixed(2)}</p>
    </div>
  );
};

export default Result;
