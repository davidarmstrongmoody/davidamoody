import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react'
import '../../App.css'

class App extends Component {
    render() {
        const style = {
            '@media (min-width:320px)':  { fontSize: '5vw', padding: '0vh 10vw 0vh 10vw' /* smartphones, iPhone, portrait 480x320 phones */ },
            '@media (min-width:481px)':  { fontSize: '5vw'/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
            '@media (min-width:641px)':  { fontSize: '5vw'/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
            '@media (min-width:961px)':  { fontSize: '2.5vw'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
            '@media (min-width:1025px)': { fontSize: '2.5vw'/* big landscape tablets, laptops, and desktops */ },
            '@media (min-width:1281px)': { fontSize: '2.5vw'/* hi-res laptops and desktops */ }
        };
    return (
        <StyleRoot >
            <div className='homepage'>
                <h1 style={style}>Creative, analytical, and passionate about great design<br/>
                a storyteller on a mission to make meaning in the mess of things</h1>
            </div>
        </StyleRoot>
    )
    }
}
export default Radium(App);