import React from "react";
import InputFilter from "./InputFilter";
import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <div>
				<img src={logo} />
				<h4>Planets</h4>
			</div>
      <InputFilter />
    </header>
  );
}

export default Header;
