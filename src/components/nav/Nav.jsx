import { FaBars } from "react-icons/fa"
import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"
  
export const Nav = styled.nav`
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  font-size: 3vw;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1vw;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  // @media screen and (min-width: 320px) { font-size: 3vw /* smartphones, iPhone, portrait 480x320 phones */ },
  // @media screen and (min-width: 481px) { font-size: 3vw /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
  // @media screen and (min-width: 641px) { font-size: 3vw  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
  @media screen and (min-width: 961px) { font-size: 1vw; /* tablet, landscape iPad, lo-res laptops ands desktops */ },
  @media screen and (min-width: 1025px) { font-size: 1vw;/* big landscape tablets, laptops, and desktops */ },
  @media screen and (min-width: 1281px) { font-size: 1vw;  /* hi-res laptops and desktops */ }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 10vw;
  z-index: 0;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  // @media screen and (max-width: 768px) {
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   transform: translate(-100%, 75%);
  //   font-size: 1.8rem;
  //   cursor: pointer;
  }
`;
  
