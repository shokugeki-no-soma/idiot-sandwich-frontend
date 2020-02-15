import React from "react";
import RenteeView from "./rentee/Rentee";
export default function MainAppContainer(props) {
  return <div>{props.pageState === "RENTEE" ? <RenteeView /> : null}</div>;
}
