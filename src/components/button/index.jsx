const Button = (props) => {
  const calcImc = () => {
    const result = props.height / (props.weight * props.weight);
    props.setResult(result);
  }

  return (
    <button onClick={calcImc}>
      Calcule
    </button>
  )
}

export default Button;
