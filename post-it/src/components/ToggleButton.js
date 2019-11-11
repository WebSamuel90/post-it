import React,{ useState, useEffect } from 'react'; 
import styled from 'styled-components';


const LabelDiv = styled.label`
    width: 60px;
    height: 20px;
  a {
      color: #fff;
      text-decoration: none;
  }
  label {
      position: absolute;
      width: 40px;
      height: 20px;
      background-color: grey;
      border-radius: 20px;
      transition: all 0.3s;
      cursor: pointer;
    
  }
  label::after {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius:50%;
      background-color: white;
      top: 1px;
      left: 1px;
      transition: all 0.3s;
      cursor: pointer;
  }
  input:checked + label::after {
      left: 20px;
      
  }
  input:checked + label {
      background-color: #69df75;
  }
  input {
      display: none;
  }
  `;

const ToggleButton = (props) => {
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
            style.setProperty("--main-burger-color", "#333");
            style.setProperty("--main-div-color", "#fff");
            style.setProperty("--main-font-color", "#fff");
            style.setProperty("--main-li-color", "#333");
            style.setProperty("--main-ul-color", "#333");
            style.setProperty("--main-bg-color", "#666666");
            style.setProperty("--main-nav-color", "#fff");
        } else {
            style.setProperty("--main-burger-color", "#333");
            style.setProperty("--main-div-color", "#333");
            style.setProperty("--main-font-color", "#333");
            style.setProperty("--main-li-color", "#fff");
            style.setProperty("--main-ul-color", "#fff");
            style.setProperty("--main-bg-color", "#fff");
            style.setProperty("--main-nav-color", "#666666");
        }

        
    }

    return(
        <LabelDiv>
            <input onClick={handleToggleColor} type='checkbox' id='toggle' />
            <label for='toggle'></label>
        </LabelDiv>
    )
}

export default ToggleButton;