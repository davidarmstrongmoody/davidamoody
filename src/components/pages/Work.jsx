// import { NavLink } from '../nav/Nav';
import artwork from './data/images/0A24958D-0EF6-4037-AA1B-C4FE1710CF08.jpg'
import logos from './data/images/logos.png'
import { Link } from 'react-router-dom';
import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react'
 
class App extends Component {
    render(){
        const style = {
            '@media (min-width:320px)': { fontSize: '4vw', height: '23vh', width: '23vh', margin: '10vh 3vw 0 2vw', alignItems: 'center'/* smartphones, iPhone, portrait 480x320 phones */ },
            '@media (min-width:481px)': { fontSize: '4vw', height: '5vh', width: '5vh', margin: '10vh 3vw 0 2vw', alignItems: 'center'/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
            '@media (min-width:641px)': { fontSize: '5vw', height: '5vh', width: '5vh', alignItems: 'center' /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
            '@media (min-width:961px)': { fontSize: '5vw', height: '5vh', width: '5vh', alignItems: 'center'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
            '@media (min-width:1025px)': { fontSize: '2.5vw', height: '45vh', width: '45vh', alignItems: 'center'/* big landscape tablets, laptops, and desktops */ },
            '@media (min-width:1281px)': { fontSize: '2.5vw', height: '45vh', width: '45vh', alignItems: 'center'/* hi-res laptops and desktops */ }
        };
        const imgStyle = {
            '@media (min-width:320px)': { height: '15vh', width: '15vh', alignItems: 'center', margin: '0 0 0 7vw'/* smartphones, iPhone, portrait 480x320 phones */ },
            '@media (min-width:481px)': { height: '15vh', width: '15vh', alignItems: 'center', margin: '0 0 0 4.5vw'/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
            '@media (min-width:641px)': { height: '15vh', width: '15vh', alignItems: 'center', margin: '0 0 0 4.5vw'/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
            '@media (min-width:961px)': { height: '33vh', width: '33vh', alignItems: 'center', margin: '0 0 0 0vw'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
            '@media (min-width:1025px)': { height: '32vh', width: '32vh', textAlign: 'center', margin: '0 0 0 3.5vw'/* big landscape tablets, laptops, and desktops */ },
            '@media (min-width:1281px)': { height: '32vh', width: '32vh', alignItems: 'center',margin: '0 0 0 3.5vw'/* hi-res laptops and desktops */ }
        };
    return (
        <StyleRoot>
            <div className='cont'>
                <div className='work' id='professional' style={style}>
                    <Link to='/professional'>
                        <p>professional</p>
                        <img src={logos} alt='logos'style={imgStyle}/>
                    </Link>
                </div>
                <div className='work' id='personal' style={style}>
                    <Link to='/personal'>
                        <p>personal</p>
                        <img src={artwork} alt='artwork' style={imgStyle}/>
                    </Link>
                </div>
            </div>
        </StyleRoot>
    )
    }

}
 
export default Radium(App);

