import React from "react";
import SideBar from "./SideBar";
import Brand from "./Brand";

const Header = ({ title, className, showSideBar, setShowSideBar }) => {
  return (
    <div className="header">
      <Brand title={title} className={className} />
      <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} />
    </div>
  );
};

export default Header;
