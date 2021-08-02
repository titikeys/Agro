import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { menuData } from "../data/MenuData";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "./Button";
import { VscListUnordered } from "react-icons/vsc";

const Nav = styled.nav`
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const Navlink = css`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #1fb728;
  }
`;
const Logo = styled(Link)`
  ${Navlink};
  font-style: italic;
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const MenuBars = styled(VscListUnordered)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #0c8113;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 35%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${Navlink}
`;

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <Logo to="/" onClick={toggleHome}>
        Atezol
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.link}
            key={index}
            smooth={true}
            duration={1500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
