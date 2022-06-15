const Button = (props) => {
  const calcImc = () => {
    const result = props.weight / (props.height * props.height);
    console.log(result);
    props.setResult(result);
  }

  return (
    <button onClick={calcImc}>
      Calcule
    </button>
  )
}

export default Button;
