import React from "react";
import SearchIcon from "@mui/icons-material/Search";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import {Outlet, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import "./MenuTop.css";

const MenuTop = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__in">
          <div className="img__logo">
           <NavLink to="/"><img src={logo} alt="" /></NavLink>
          </div>
          <div className="input__Search">
            <input placeholder="Tìm Kiếm Sản Phẩm..." type="text" />
            <SearchIcon />
          </div>
          <div className="menu">
            <NavLink to="/arrival">New Arrival</NavLink>
            <NavLink to="/">Sandal Nam</NavLink>
            <NavLink to="/">Sandal Nữ</NavLink>
            <NavLink to="/">Sneaker</NavLink>
            <NavLink to="/">Dép</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTop;
