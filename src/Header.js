import React from "react";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from "@mui/icons-material";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption
          avatar={
            "https://th.bing.com/th/id/OIP.s_pUp7JneChaO4J5nsHC9wAAAA?w=136&h=152&c=7&r=0&o=5&pid=1.7"
          }
          title={"Me"}
        />
      </div>
    </div>
  );
}

export default Header;
