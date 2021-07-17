import React from "react";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import { FaShoppingCart } from "react-icons/fa";
import { Menu, Input } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Search } = Input;

const Navbar = () => {
  const onSearch = (value) => console.log(value);
  const location = useLocation();

  return (
    <>
      <div id="logo"></div>
      <Menu
        style={{ textTransform: "uppercase", float: "left", width: "400px" }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/products">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
      <Search
        style={{ width: "400px", margin: "16px 10px", float: "left" }}
        placeholder="Search..."
        onSearch={onSearch}
        enterButton
      />
      <Link to="/cart">
        <div id="cart">
          <ShoppingCartOutlined />
        </div>
      </Link>
      <Menu
        style={{ textTransform: "uppercase" }}
        theme="dark"
        mode="horizontal"
      >
        <Menu.Item key="1">Log In</Menu.Item>
        <Menu.Item key="2">Sign Up</Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
