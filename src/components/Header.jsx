import React from "react";
import { BiAddToQueue } from "react-icons/bi";
function Header({ setShowCreateNewEntry }) {
  return (
    <div className="header">
      <div className="add" onClick={(e) => setShowCreateNewEntry(true)}>
        <BiAddToQueue />
      </div>
    </div>
  );
}

export default Header;
