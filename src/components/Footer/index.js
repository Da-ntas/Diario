import React from "react";
import styled from "styled-components";
import sun from '../../img/sun.svg'
import moon from '../../img/moon.svg'

const Switcher = styled.button`
    background: transparent;
    border: 1px solid var(${props => props.theme === 'light' ? "--background-light" : "--background-dark"});
    position: fixed;
    bottom: 2%;
    right: 1%;
`

const Footer = ({handleThemeChange}) => {
    const theme = localStorage.getItem('theme');

    return (
        <>
        {/* <Row md={12} lg={12} xl={12} className="w-100 position-absolute top-100 d-flex justify-content-end"> */}
            <Switcher theme={theme} onClick={handleThemeChange} className="user-select-none">
                <img src={theme === 'light' ? moon : sun} alt="theme switcher"/>
            </Switcher>
        {/* </Row> */}
        </>
    )    
}

export default Footer;