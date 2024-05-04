import React from "react";
import { NavLink } from "react-router-dom";
import MailA from "./MailA";
import MailB from "./MailB";
import img from "../img.jpeg";

const Inbox = () => {
  return (
    <div>
      <NavLink />
      <MailA />
      <MailB />
      <img src={img} alt="profile" />
    </div>
  );
};

export default Inbox;

