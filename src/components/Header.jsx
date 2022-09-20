import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class App extends Component {
    render(){
        const style = {
            '@media (min-width:320px)': { fontSize: '7.5vw'/* smartphones, iPhone, portrait 480x320 phones */ },
            '@media (min-width:481px)': { fontSize: '7.5vw'/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
            '@media (min-width:641px)': { fontSize: '8vw'/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
            '@media (min-width:961px)': { fontSize: '3.5vw'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
            '@media (min-width:1025px)': { fontSize: '5vh'/* big landscape tablets, laptops, and desktops */ },
            '@media (min-width:1281px)': { fontSize: '5vh'/* hi-res laptops and desktops */ }
        };
    return (
        <StyleRoot>
            <header style={style}>
                <Link to='/' style={{ textDecoration: 'none', color: '#000000' }}>
                    David Moody
                </Link>
            </header>
        </StyleRoot>
    )
    }
}

export default Radium(App);