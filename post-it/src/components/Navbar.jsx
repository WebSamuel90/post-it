import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import AddNote from './AddNote';
import '../DarkMode.css'
import Authentication from './Authentication';



const MenuWrap = styled.div`
    position: fixed;
    top: 0;
    right: 0; 
    z-index: 1;


    .toggler {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: pointer;
        width: 60px;
        height: 60px;
        opacity: 0;
    }

    .hamburger {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 50px;
        height: 50px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hamburger > div {
        position: relative;
        width: 80%;
        height: 2px;
        background-color: var(--main-div-color);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
    }

    .hamburger > div:before,
    .hamburger > div:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 2px;
        background-color: inherit;
    }

    .hamburger > div:after {
        top: 10px;
    }

    .toggler:checked + .hamburger > div {
        transform: rotate(135deg);
        background-color: var(--main-li-color);
    }

    .toggler:checked + .hamburger > div:before,
    .toggler:checked + .hamburger > div:after {
        top: 0;
        transform: rotate(90deg);
    }

    // .toggler:checked:hover + .hamburger > div {
    //     transform: rotate(225deg);
    // }


    .toggler:checked ~ .sidebar {
        right: 0;
        transition: all 0.3s ease-in-out;
    }
`;

const Aside = styled.aside`
    position: fixed; 
    background-color: var(--main-nav-color);
    bottom: 0; 
    right: -300px; 
    width: 300px;
    height: 100%;
    overflow: hidden; 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000px;
    transition: all 0.3s ease-in-out;
`;

const UlStyled = styled.ul`
    display: flex;
    height: 85vh;
    width: 100%;
    flex-direction: column;
    list-style-type: none;
    justify-content: space-around;
    overflow: hidden; 
    // visibility: hidden;
    color: var(--main-li-color);
    margin: 0;
    padding-top: 15px;

    a {
        text-decoration: none;
    }

    .button:checked ~ ul {
        display: block;
        transition: all 0.3s ease-in-out;
        animation: load 0.3s forwards;

        @keyframes load {
            100% {
                opacity: 1;
            }
        }
    }
`;

const LiStyled = styled.li`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-transform: uppercase;
    text-decoration: none;
    width: 210px;
    // border-bottom: 1px solid #fff;
    font-size: 20px;
    margin-left: 45px;
    color: var(--main-li-color);
    // line-height: 60px;
    // padding: 1rem;

    button {
        background-color: var(--main-nav-color);
    }
`;

const MembersUl = styled.ul`
    display: none;
    opacity: 0;
    position: absolute;
    width: 210px;
    height: 100%;
    margin-top: 25px;
    line-height: 40px;
    background-color: pink;
    text-decoration: none;
    
    li {
        margin: 0;
        padding: 0 1em;
        width: 30vw;
        text-align: start;
        list-style: none;
    }
`;

const InputStyled = styled.input`
    position: absolute;
    z-index: 2;
    cursor: pointer;
    width: 150px;
    height: 20px;
    opacity: 0;
`;

const ImgStyled = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #fff;
    margin-left: 20px;
    fill: var(--main-li-color);
`;

const NotePosition = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`;


function Navbar (props) {
    const [darkMode, setDarkMode] = useState(getInitialMode);

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        return savedMode || false;
    }



    const handleToggleColor = () => {
        const style = document.documentElement.style;

        setDarkMode(darkMode => !darkMode);

    
        if (darkMode === false) {
            style.setProperty("--main-div-color", "#fff");
            style.setProperty("--main-font-color", "#fff");
            style.setProperty("--main-li-color", "#333");
            style.setProperty("--main-ul-color", "#333");
            style.setProperty("--main-bg-color", "#666666");
            style.setProperty("--main-nav-color", "#fff");
        } else {
            style.setProperty("--main-div-color", "#333");
            style.setProperty("--main-font-color", "#333");
            style.setProperty("--main-li-color", "#fff");
            style.setProperty("--main-ul-color", "#fff");
            style.setProperty("--main-bg-color", "#fff");
            style.setProperty("--main-nav-color", "#666666");
        }

        
    }
  

    return(
    
            <MenuWrap>
                <input type="checkbox" className='toggler'/>
                    <div className='hamburger'>
                        <div></div>
                            </div>
                    
                    <Aside className="sidebar" id='sidebar'>
                        <UlStyled className="ul">
                            <Link to='/'><LiStyled>Home</LiStyled></Link>

                                <LiStyled>Dark Mode
                                    <div className="toggle-container"> 
                                        <button 
                                            onClick={handleToggleColor}
                                            >
                                            Toggle mode
                                        </button>
                                    </div>
                                </LiStyled>

                                    <Link to='/'><LiStyled>Help</LiStyled></Link>

                                    <LiStyled>Members
                                        <InputStyled type='checkbox' className="button"></InputStyled>
                                            
                                            <ImgStyled src='assets/imgs/arrow.svg'/>
                                                <MembersUl>
                                                    <li>1</li>
                                                    <li>2</li>
                                                    <li>3</li>
                                                </MembersUl>
                                         </LiStyled>
                                    <NotePosition>
                                <AddNote width='130px' />
                            </NotePosition> 
                        </UlStyled>        
                    </Aside>
            </MenuWrap>



    )
}

export default Navbar;