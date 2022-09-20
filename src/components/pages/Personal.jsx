import *  as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';
import { meta, misc, purpose, twoCents, infinity, faith, identity, race } from './data/Poems'
import '../../App.css';
import '../nav/Nav'

const Personal = () => {
    const page = useRef('welcome');
    const sections = ['Life','Love','Loss']
    const options1 = ['Meta','Miscellaneous','Purpose','Two ¢']
    const options2 = ['Faith','Identity','Race']
    const [sidebar, setSidebar] = useState(false);
    const [selected1, setSelected1] = useState('Meta')
    const [selected2, setSelected2] = useState('Faith')
    const [src, setSrc] = useState('./data/images/blank.jpg')
    const [alt, setAlt] = useState('blank')
    const showSidebar = () => setSidebar(!sidebar);
    const [select, setSelect] = useState('Select...')
    const show = (pg) => { page.current = pg; showSidebar() }
    const handleRadio1 = (o) => setSelected1(o)
    const handleRadio3 = (o) => setSelected2(o)
    const handleSelect = (e) => setSelect(e.target.value)
    const handleChange = (e) => {
        let src = e.target.selectedOptions[0].getAttribute('src')
        let alt = e.target.selectedOptions[0].getAttribute('title')
        setSrc(src)
        setAlt(alt)
    }


    const NavData = [
        {
            title: 'poetry',
            path: '/personal',
            cName: 'nav-text'
        },
        {
            title: 'visual',
            path: '/personal',
            cName: 'nav-text'
        },
        {
            title: 'music',
            path: '/personal',
            cName: 'nav-text'

        }
    ]
    return (
        <div>
            <div className='navbar'>
                <Link to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <div style={page.current === 'welcome' ? {
                position: 'absolute',
                background: '#ffffff',
                height: '63vh',
                width: '100vw',
                textAlign: 'center',
                padding: '10vh 0 0 0',
                fontFamily: 'Fredericka the Great',
                fontSize: '3.5vh'
            } : { display: 'none' }}>
                Welcome to my art page!
            </div>
            <div style={page.current === 'poetry' ? {
                position: 'absolute',
                background: '#AAC5B2',
                height: '63vh',
                width: '100vw',
                zIndex: '0'
            } : { display: 'none' }}>
                <div id='book'>
                    <div id='t'>
                        <div id='title'>
                            <h5><i><b>0 to 1</b></i></h5>
                            a story of
                        </div>
                        <div id='select1'>
                            <select onChange={(e) => handleSelect(e)} className='select' >
                                <option key='Select...' value='Select...'>Select...</option>
                                {sections.map((option) => <option value={option} key={option}>{option}</option>)}
                            </select>
                        </div>
                    </div>
                    <div id='input'>
                        <div id='radios'>
                            <div style={select === 'Life' ? { display: 'block' } : { display: 'none' }}>
                                {options1.map((opt) => <span key={opt}><input onChange={(e) => handleRadio1(opt)} type='radio' name='btn1' value={opt}/>{opt}</span>)}
                                <div>
                                    <select onChange={handleChange}  style={selected1 === 'Meta' ? { display: 'inline-block' } : { display: 'none' }}>
                                        <option key='Meta' value='Meta' title='blank' src='./data/images/blank.jpg'>Select...</option>
                                            {meta.map((poem) => <option key={poem.value} value={poem.value} title={poem.title} src={poem.image}>
                                            {poem.title}
                                        </option>)}
                                    </select>
                                    <select onChange={handleChange} style={selected1 === 'Miscellaneous' ? { display: 'inline-block' } : { display: 'none' }}>
                                        <option key='Misecllaneous' value='Miscellaneous' title='blank' src='./data/images/blank.jpg'>Select...</option>
                                            {misc.map((poem) => <option key={poem.value} value={poem.value}  title={poem.title} src={poem.image}>
                                            {poem.title}
                                        </option>)}
                                    </select>
                                    <select onChange={handleChange} style={selected1 === 'Purpose' ? { display: 'inline-block' } : { display: 'none' }}>
                                        <option key='Purpose' value='Purpose' title='blank'src='./data/images/blank.jpg'>Select...</option>
                                            {purpose.map((poem) => <option key={poem.value} value={poem.value} title={poem.title}src={poem.image}>
                                            {poem.title}
                                        </option>)}
                                    </select>
                                    <select onChange={handleChange} style={selected1 === 'Two ¢' ? { display: 'inline-block' } : { display: 'none' }}>
                                        <option key='Two ¢' value='Two ¢' title='' src='./data/images/blank.jpg'>Select...</option>
                                            {twoCents.map((poem) => <option key={poem.value} value={poem.value} title={poem.title} src={poem.image}>
                                            {poem.title}
                                        </option>)}
                                    </select>
                                </div>
                            </div>
                            <div style={select === 'Love' ? { display: 'inline-block' } : { display: 'none' }}>
                                <span key='love'><input type='radio' value='infinity' name='btn2' />&#x221E;</span>
                                <div id='select2'>
                                    <select onChange={handleChange}> 
                                        <option key='Infinity' value='Infinity' title='blank' src='./images/blank.jpg'>Select...</option>
                                            {infinity.map((poem) => <option key={poem.value} value={poem.value} title={poem.title} src={poem.image}>
                                            {poem.title}
                                        </option>)}
                                    </select>
                                </div>
                            </div>
                            <div style={select === 'Loss' ? {display:'block'} : {display:'none'}}>
                                <div style={select === 'Loss' ? { display: 'block' } : { display: 'none' }}>
                                    {options2.map((opt) => <span key={opt}><input onChange={(e) => handleRadio3(opt)} type='radio' name='btn3' value={opt}/>{opt}</span>)}
                                </div>
                                <select onChange={handleChange} style={selected2 === 'Faith' ? {display:'inline-block'} : {display:'none'}}> 
                                    <option key='Faith' value='Faith' title='blank' src='./images/blank.jpg'>Select...</option>
                                        {faith.map((poem) => <option key={poem.value} value={poem.value} title={poem.title} src={`${poem.image}`}>
                                        {poem.title}
                                    </option>)}
                                </select>
                                <select onChange={handleChange} style={selected2 === 'Identity' ? {display:'inline-block'} : {display:'none'}}> 
                                    <option key='Identity' value='Identity' title='blank' src='./images/blank.jpg'>Select...</option>
                                        {identity.map((poem) => <option key={poem.value} value={poem.value} title={poem.title} src={`${poem.image}`}>
                                        {poem.title}
                                    </option>)}
                                </select>
                                <select onChange={handleChange} style={selected2 === 'Race' ? {display:'inline-block'} : {display:'none'}}> 
                                    <option key='Race' value='Race' title='blank' src='./images/blank.jpg'>Select...</option>
                                        {race.map((poem) => <option key={`${poem.value}`} value={poem.value} title={poem.title} src={`${poem.image}`}>
                                        {poem.title}
                                    </option>)}
                                </select>
                            </div>
                        </div>
                        <div >
                            <img id='poem'src={require(`${src}`)} alt={alt}/>
                        </div>
                        
                    </div>
                </div>
                <div id='x'>

                </div>
            </div>
            <div style={page.current === 'visual' ? {
                position: 'absolute',
                background: '#DAD3AE',
                height: '63vh',
                width: '100vw',
                textAlign: 'center',
                padding: '10vh 0 0 0'
            } : { display: 'none' }}>
                Welcome to the {page.current} page!
            </div>
            <div style={page.current === 'music' ? {
                position: 'absolute',
                background: '#B5D8F9',
                height: '63vh',
                width: '100vw',
                textAlign: 'center',
                padding: '10vh 0 0 0'
            } : { display: 'none' }}>
                Welcome to the {page.current} page!
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    {NavData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} onClick={() => show(item.title)}>
                                    <span>{item.title} </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>

    );
};

export default Personal;


