import React from "react";
import { Menu, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import { Link, Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  font-size: 20px;
  margin: 50px;
`;

const MenuStyled = styled(Menu)`
  justify-content: center;
  padding: 10px;
`;

function Layout() {
  return (
    <div>
      {/* <MenuStyled mode="horizontal">
        <Menu.Item>
          <LinkStyled to={"/"} style={{ textDecoration: "none" }}></LinkStyled>
        </Menu.Item>
        <Menu.Item>
          <LinkStyled to={"/skill"}>Skill</LinkStyled>
        </Menu.Item>
        <Menu.Item>
          <LinkStyled to={"/project"}>Project</LinkStyled>
        </Menu.Item>
        <Menu.Item>
          <LinkStyled to={"/contact"}>Contact</LinkStyled>
        </Menu.Item>
      </MenuStyled> */}
    </div>
  );
}

export default Layout;
