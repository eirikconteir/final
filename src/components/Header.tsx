import React from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  scope: string;
};

const Header = ({ scope }: HeaderProps) => {
  const itemClassNames = (link: string) => {
    if (link === scope) {
      return "nav-item active";
    }
    return "nav-item";
  };
  return (
    <header className="row">
      <div>
      <h1>ICD-10 Psykiske lidelser og atferdsforstyrrelser (F00-F99)</h1>
    </div>
     
    </header>
  );
};

export default Header;
