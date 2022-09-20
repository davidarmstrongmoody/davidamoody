import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react'
import '../App.css';

class App extends Component {
    render(){
        const style = {
            '@media (min-width:320px)': { fontSize: '3vw'/* smartphones, iPhone, portrait 480x320 phones */ },
            '@media (min-width:481px)': { fontSize: '2vw'/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
            '@media (min-width:641px)': { fontSize: '1vw'/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
            '@media (min-width:961px)': { fontSize: '1vw'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
            '@media (min-width:1025px)': { fontSize: '1vw'/* big landscape tablets, laptops, and desktops */ },
            '@media (min-width:1281px)': { fontSize: '1vw'/* hi-res laptops and desktops */ }
        };
    return (
        <StyleRoot>
            <footer style={style}>
                <ul>
                    <li>davidarmstrongmoody@gmail.com</li> 
                    <li>513.569.2278</li> 
                    <li>© 2022 David Moody</li>
                </ul>
            </footer>
        </StyleRoot>
    )
    }
}
export default Radium(App);