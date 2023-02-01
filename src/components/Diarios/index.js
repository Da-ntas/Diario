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
                : <div style={{width: 150, height: 150, background: props.image ? `url(${props.image})` : props.color, border: '1px solid #F7F6F2', filter: 'drop-shadow(3px 3px 2px #1B262C)'}}></div>
                }
                <span className="position-absolute" style={{top: 10, right: 35, width: 30, height: 30}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </span>
            </Row>
            <Row style={{fontSize: '1.4rem', maxWidth: 125}} className="mt-2 user-select-none diario-titulo">
                {props.title}
            </Row>
            <Row className="w-75">
                <hr />
            </Row>

        </div>
    )
}

export default Diarios;