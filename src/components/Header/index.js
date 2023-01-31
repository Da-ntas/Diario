import React, { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import burger from '../../img/burger.svg';
import plusCircleLight from '../../img/plus-circle-light.svg';
import plusCircleDark from '../../img/plus-circle-dark.svg';
import edit from '../../img/edit.svg';

import Sidebar from '../Sidebar';

const Hamburger = styled.div`
    width: 50px;
    height: 50px;
    background-color: var(${props => props.theme === 'light' ? "--text-principal-light" : "--text-principal-dark"});
    -webkit-mask: url(${props => props.image}) no-repeat center;
    mask-image: url(${props => props.image}) no-repeat center;
    cursor: pointer;
`

const ImgProfile = styled.div`
    width: 50px;
    height: 50px;
    background: url(${props => props.pfImage});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid #F7F6F2;
    filter: drop-shadow(3px 3px 2px #1B262C);
`

const Header = ({title, type, imageURL, user}) => {
    const [flagSidebar, setFlagSidebar] = useState(false);

    const theme = localStorage.getItem('theme');
    const hasIcon = ['diario', 'edit']
    const userName = user || 'usuário sem nome';

    const getImage = () => {
        return theme === 'light' ? plusCircleLight : plusCircleDark;
    }

    return(
        <Fragment>
            <Row md={12} xl={12} lg={12} className="w-100 p-4 position-relative top-0 d-flex align-items-center justify-content-center flex-row" style={{zIndex: 6, height: 100}}>
                <Col md={9} xl={9} lg={9} className="d-flex align-items-center justify-content-start">
                    <div className="d-flex align-items-center justify-content-start position-absolute" style={{maxWidth: 50, top: 20, left: 20, width: '10%', zIndex: 5}}>
                        <Hamburger theme={theme} image={burger} onClick={() => setFlagSidebar(true)}/>
                    </div>
                    <Col className="d-flex align-items-center justify-content-center position-absolute" style={{maxWidth: 500, top: 20, left: 20, right: 0, marginLeft: 'auto', marginRight: 'auto', zIndex: 4}}>
                        <Row className="d-flex">
                            <Col className="mt-1 ml-">
                                <h1>{title || "Diarios"}</h1>
                            </Col>
                            <Col className="d-flex align-items-center user-select-none">
                                {hasIcon.includes(type) ? <img src={type === 'diario' ? getImage() : edit} alt="" style={{width: 30, cursor: 'pointer'}}/> : <></>}
                            </Col>
                        </Row>
                        <hr />
                    </Col>
                </Col>
                <Col md={3} xl={3} lg={3} className="d-flex justify-content-end user-info position-absolute" style={{top: 20, right: 20}}>
                    <div className="d-flex justify-content-end align-items-center flex-row user-info-name" style={{maxWidth: 200, marginRight: 15}}>
                        Olá,&nbsp;<span className="text-break">{userName}</span>
                    </div>
                    <div className="d-flex justify-content-end user-info-image">
                        <ImgProfile pfImage={imageURL || 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'}>
                        </ImgProfile>
                    </div>
                </Col>
            </Row>
            {flagSidebar ? <Sidebar setFlagSidebar={setFlagSidebar}/> : <></>}
        </Fragment>
    )
}

export default Header;