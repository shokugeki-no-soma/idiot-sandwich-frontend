import React from "react";
import ListElement from "./listElement";

export default function RequestList(props) {
  return (
    <div className="rentee-container">
      {props.data.map((e, id) => (
        <ListElement data={e} key={id} />
      ))}
    </div>
  );
}
