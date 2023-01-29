import React from "react";
import styled from "styled-components";
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'

const Switcher = styled.button`
    background: transparent;
    border: 1px solid var(${props => props.theme === 'light' ? "--background-light" : "--background-dark"});
    position: absolute;
    bottom: 10px;
    right: 10px;
`

const Footer = ({handleThemeChange}) => {
    const theme = localStorage.getItem('theme');

    return (
        <>
        {/* <Row md={12} lg={12} xl={12} className="w-100 position-absolute top-100 d-flex justify-content-end"> */}
            <Switcher theme={theme} onClick={handleThemeChange}>
                <img src={theme === 'light' ? moon : sun} alt="theme switcher"/>
            </Switcher>
        {/* </Row> */}
        </>
    )    
}

export default Footer;