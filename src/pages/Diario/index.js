import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Panel from "../../components/Panel";
import { getRandomImage, getImage } from "../../utils";
import Diarios from "../../components/Diarios";

const Diario = ({handleThemeChange}) => {
    const [viewLength, setViewLength] = useState(1);
    const diarios = [
        {
            title: "Titulo 11293891827349",
            image: getImage(),
            color: null
        },
        {
            title: "Titulo 2",
            image: getRandomImage(0),
            color: null
        },
        {
            title: "Titulo 3",
            image: getRandomImage(1),
            color: null
        },
        {
            title: "Titulo 4",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 5",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 6",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 7",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 8",
            image: getRandomImage(2),
            color: null
        },
        {
            title: "Titulo 9",
            image: getRandomImage(3),
            color: null
        },
        {
            title: "Titulo 10",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 11",
            image: getRandomImage(3),
            color: null
        },
        {
            title: "Titulo 12",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 13",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 14",
            image: getRandomImage(0),
            color: null
        },
        {
            title: "Titulo 15",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 16",
            image: getImage(),
            color: null
        },
        {
            title: "Titulo 17",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        },
        {
            title: "Titulo 18",
            image: getImage(),
            color: null
        },
        {
            title: "Titulo 19",
            image: null,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        }
    ]

    const handleClick = (e) => {
        console.log(e)
    }
    return (
        <Panel handleThemeChange={handleThemeChange} title={'Diários'} type={'diario'} imageURL={getImage()}>
            <Row md={12} xl={12} lg={12}  className="d-flex justify-content-center position-relative mt-5 pb-4">
                <Row  className="d-flex justify-content-center flex-wrap h-100 position-relative w-50"style={{gap: '25px, 0px'}}>
                    {diarios && diarios.length > 0 ? diarios.slice(0, 4*viewLength).map((e, index) => (
                        <Diarios 
                            title={e.title}
                            image={e.image}
                            color={e.color}
                            key={e.title}
                        />
                    )) : <></>}
                    {diarios && diarios.length > 4*viewLength ? 
                        <Row onClick={() => setViewLength(viewLength+1)} className="d-flex justify-content-center" style={{fontSize: '1.6rem'}}>Ver mais...</Row>
                    : <></>}
                </Row>
            </Row>
        </Panel>
    )
}

export default Diario;