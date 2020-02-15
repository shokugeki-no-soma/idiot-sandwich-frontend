import React from "react";
import "./rentee.css";
import { fakeData } from "./fakeRequest";
import RequestList from "./requestList";
console.log(fakeData);
export default function RenteeView() {
  return (
    <div>
      <RequestList data={fakeData} />
    </div>
  );
}
