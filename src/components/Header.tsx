import React from "react";

type HeaderProps = {
  scope: string;
};

const Header = ({ scope }: HeaderProps) => {

  return (
    <header className="row">
      <div>
      <h1>ICD-10 Psykiske lidelser og atferdsforstyrrelser (F00-F99)</h1>
    </div>
     
    </header>
  );
};

export default Header;
