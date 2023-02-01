import React from "react";
import { Row } from "react-bootstrap";

const Diarios = ({...props}) => {

    //TODO -> criar componentes personalizados para cada quadrado de imagem e tirar styles inline
    const handleClick = (e) => {
        //
    }

    return (
        <div className="d-flex flex-column align-items-center diario-item position-relative" style={{width: 200, height: 250}}>
            <Row style={{cursor: 'pointer'}} onClick={() => handleClick(props)} data-value="a">
                {props.image ?
                <div style={{width: 150, height: 150, background: `url(${props.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', border: '1px solid #F7F6F2', filter: 'drop-shadow(3px 3px 2px #1B262C)'}}></div>
                : <div style={{width: 150, height: 150, background: props.color, border: '1px solid #F7F6F2', filter: 'drop-shadow(3px 3px 2px #1B262C)'}}></div>
                }
            </Row>
            <Row style={{fontSize: '1.4rem', maxWidth: 140}} className="mt-2 user-select-none diario-titulo">
                {props.title}
            </Row>
            <Row className="w-100">
                <hr />
            </Row>

        </div>
    )
}

export default Diarios;