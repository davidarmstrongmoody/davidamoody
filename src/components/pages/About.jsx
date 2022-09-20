import profile_photo from './data/images/profile_photo.jpg'
import linkedin_wht from './data/images/linkedin_wht.png' 
import linkedin_blk from './data/images/linkedin_blk.png' 
import insta_blk from './data/images/insta_blk.png'
import insta_wht from './data/images/insta_wht.png'
import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react'

class App extends Component {
    render(){
        const style = {
            '@media (min-width:320px)': { fontSize: '3.5vw', height: '25vh', width: '50vh',margin: '0vh 0vw 0vh 7.5vw', display: 'block'/* smartphones, iPhone, portrait 480x320 phones */ },
            '@media (min-width:481px)': { fontSize: '3.5vw', height: '20vh', width: '50vh', margin: '0vh 0vw 0vh 7.5vw', display: 'block'/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
            '@media (min-width:641px)': { fontSize: '5vw', height: '5vh', width: '5vh', margin: '0vh 0vw 0vh 7.5vw', display: 'block'/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
            '@media (min-width:961px)': { fontSize: '1.25vw', height: '5vh', width: '5vh', margin: '0vh 0vw 0vh 30vw', display: 'inline-block'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
            '@media (min-width:1025px)': { fontSize: '1.1vw', height: '15vh', width: '15vh', margin: '0vh 0vw 0vh 30vw', display: 'inline-block' /* big landscape tablets, laptops, and desktops */ },
            '@media (min-width:1281px)': { fontSize: '1.1vw', height: '13.5vh', width: '60vh', margin: '0vh 0vw 0vh 30vw', display: 'inline-block'/* hi-res laptops and desktops */ }
        };
        const imgStyle = {
            '@media (min-width:320px)': { height: '35vh', width: '35w', margin: '3vh 0vw 4.5vh 20vw', alignItems: 'center', display: 'block'/* smartphones, iPhone, portrait 480x320 phones */ },
            '@media (min-width:481px)': { height: '30vh', width: '30vh', margin: '3vh 0vw 4.5vh 20vw', alignItems: 'center', display: 'block'/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ },
            '@media (min-width:641px)': { height: '15vh', width: '15vh', margin: '3vh 0vw 4.5vh 20vw', alignItems: 'center'/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ },
            '@media (min-width:961px)': { height: '15vh', width: '15vh', margin: '0vh 0vw 0vh 0', display: 'inline-block'/* tablet, landscape iPad, lo-res laptops ands desktops */ },
            '@media (min-width:1025px)': { height: '50vh', width: '50vh', margin: '0vh 0vw 3vh 35vw', display: 'inline-block'/* big landscape tablets, laptops, and desktops */ },
            '@media (min-width:1281px)': { height: '50vh', width: '50vh', margin: '0vh 0vw 4vh 35vw', display: 'inline-block'/* hi-res laptops and desktops */ }
        };
    return (
        <StyleRoot>
            <img src={profile_photo} alt='picture_of_me' style={imgStyle}/>
            <div id='bio' style={style}>
                <p><b>hello, i'm david</b><br/>
                an aspiring full-stack Data Scientist from Cincinnati</p>
                <div id='icons'>
                <a href='https://www.linkedin.com/in/david-moody/' target='_blank' rel='noopener noreferrer'>
                    <img 
                        src={linkedin_blk}
                        onMouseOver={e => (e.currentTarget.src = linkedin_wht)}
                        onMouseOut={e => (e.currentTarget.src = linkedin_blk)}
                        alt='linkedin_icon'/>
                </a>
                <a href='https://www.instagram.com/davidamoody/' target='_blank' rel='noopener noreferrer'>
                    <img 
                        src={insta_blk}
                        onMouseOver={e => (e.currentTarget.src = insta_wht)}
                        onMouseOut={e => (e.currentTarget.src = insta_blk)}
                        alt='instagram_icon'
                        style={{margin: '0 1.5vw 0 1.5vw'}}/>
                </a>  
            </div>
            </div>             
        </StyleRoot>
    )   
    }
}
export default Radium(App);