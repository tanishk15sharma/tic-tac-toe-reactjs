import React from "react";

function Square(props) {
  const classes = props.className ? `${props.className} square` : "square";
  return (
    <span className={classes} onClick={props.onClick}>
      {props.value}
    </span>
  );
}

export default Square;
