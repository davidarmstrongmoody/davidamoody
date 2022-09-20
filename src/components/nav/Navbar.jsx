import React, { Component } from "react";
import Radium, { StyleRoot } from 'radium';
import {NavLink, Nav, NavMenu} from './Nav'
  
class App extends Component {
  render(){
    // const style = {
    //   '@media (min-width:320px)': { fontSize:'2.5vw' /* smartphones, iPhone, portrait 480x320 phones */ },
    //   '@media (min-width:481px)': { fontSize:'2.5vw' /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
    //   '@media (min-width:641px)': { fontSize:'2.5vw'  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
    //   '@media (min-width:961px)': { fontSize:'1vw'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
    //   '@media (min-width:1025px)': { fontSize:'1vw'/* big landscape tablets, laptops, and desktops */ },
    //   '@media (min-width:1281px)': { fontSize:'1vw'/* hi-res laptops and desktops */ }
    // };
    return (
      <StyleRoot>
        <Nav>
          <NavMenu>
            <NavLink to='/work'>
              work
            </NavLink>
            <NavLink to='/about'>
              about
            </NavLink>
          </NavMenu>
        </Nav>
      </StyleRoot>
    )
  }
};
  
export default Radium(App);
