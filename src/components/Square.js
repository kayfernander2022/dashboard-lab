
function Square(props){

  return (
  <div className={props.className}>
    <h4>{props.title}</h4>
    {props.children}
  </div>
  );
}

export default Square;