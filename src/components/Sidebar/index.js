import React, { Fragment } from "react";
import { Row, Col } from 'react-bootstrap';
import logoutDark from '../../img/log-out-dark.svg';
import logoutLight from '../../img/log-out-light.svg';
import { getTheme, getImage, getBgImage } from "../../utils";

import styled from "styled-components";

const ProfileDiv = styled.div`
    width: 150px;
    height: 150px;
    background: url(${props => props.pfImage});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid #F7F6F2;
    filter: drop-shadow(3px 3px 2px #1B262C);
`

const Sidebar = ({setFlagSidebar, coverImage, profileImage}) => {
    const handleLogout = () => {
        localStorage.clear();
    }

    return(
        <Fragment>
            <Col md={3} lg={3} xl={3} className="sidebar pt-3 px-4 card-full">
                <span 
                    className="position-absolute user-select-none" 
                    style={{right: 25, cursor: 'pointer', color: '#F7F6F2', fontSize: '1.4rem', marginTop: 5, textShadow: `3px 3px 2px #1B262C`}}
                    onClick={() => setFlagSidebar(false)}
                >
                    X
                </span>
                <Row style={{height: 225, background: `url(${coverImage || getBgImage()})`}} className="d-flex justify-content-center align-items-center">
                    <ProfileDiv pfImage={profileImage || getImage()}>
                    </ProfileDiv>
                </Row>
                <hr />
                <Row>
                    <ul className="list-sidebar">
                        <li className="item-sidebar">Perfil</li>
                        <li className="item-sidebar">Informações</li>
                    </ul>
                </Row>
                <a href="/login" className={`text-${getTheme() === 'light' ? 'dark' : 'light'}`}>
                    <span
                        className="position-absolute user-select-none" 
                        style={{bottom: 25, left: 25, cursor: 'pointer', fontSize: '1.4rem'}}
                        onClick={handleLogout}
                        href="/login"
                    >
                        <img 
                            src={getTheme() === 'light' ? logoutLight : logoutDark}
                            alt="Logout"
                            className="me-2"
                        />
                        Sair
                    </span>
                </a>
            </Col>
            <Col md={3} lg={3} xl={3} className="blured" onClick={() => setFlagSidebar(false)}>
            </Col>
        </Fragment>
    )
}

export default Sidebar;