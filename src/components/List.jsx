import React, { useState } from "react";
function List(props) {
  //  function handleEvent(){}
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default List;
