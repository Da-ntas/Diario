import React, { useState } from "react";
import {Button, Card, Row, Form, Modal} from 'react-bootstrap';
import styled from "styled-components";

import { getImage, getTheme } from "../../utils";

import Panel from '../../components/Panel';
import InputForm from '../../components/InputForm';
import Diarios from "../../components/Diarios";


const CriarDiario = ({handleThemeChange}) => {

    const TextPage = styled.div`
        line-height: 2rem;
        color: #${props => props.corFonte};
        background: linear-gradient(#${props => props.corLinha} 1px, transparent 0px); 
        background-position-y: 1.5rem; 
        background-size: 100% 2em;
        word-break: break-word;
    `

    const ModalBody = styled.div`
        height: 450px; 
        background-color: ${props => props.colorFolha};
        overflow-y: scroll;
    `
    const pageTheme = getTheme();

    const [temaDiario, setTemaDiario] = useState('')
    const [titulo, setTitulo] = useState('');
    const [capaDiarioCor, setCapaDiarioCor] = useState('');
    const [capaDiarioImg, setCapaDiarioImg] = useState('');
    const [fileName, setFileName] = useState('');
    const [selected, setSelected] = useState('');
    const [flagShowModal, setFlagShowModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [corFolhaDiario, setCorFolhaDiario] = useState('');
    const [corLinhaDiario, setCorLinhaDiario] = useState('');
    const [corFonteDiario, setCorFonteDiario] = useState('');
    const textExample = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, lectus sit amet dignissim consequat, ante tortor euismod est, et placerat turpis massa eget enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quam lectus, lacinia ac urna consequat, elementum pharetra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, lectus sit amet dignissim consequat, ante tortor euismod est, et placerat turpis massa eget enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quam lectus, lacinia ac urna consequat, elementum pharetra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, lectus sit amet dignissim consequat, ante tortor euismod est, et placerat turpis massa eget enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quam lectus, lacinia ac urna consequat, elementum pharetra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, lectus sit amet dignissim consequat, ante tortor euismod est, et placerat turpis massa eget enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quam lectus, lacinia ac urna consequat, elementum pharetra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    

    const optionsCapa = [
        {
            value: 'color',
            label: 'Selecione uma cor'
        },
        {
            value: 'imagem',
            label: 'Selecione uma imagem'
        }
    ]

    const optionsTema = [
        {
            value: 'light',
            label: 'Tema claro'
        },
        {
            value: 'dark',
            label: 'Tema escuro'
        }
    ]

    const handleThemeDiarioChange = (e) => {
        const {value: selected} = e.target;
        setTemaDiario(selected)
        
        setCorFolhaDiario(selected === 'light' ? "F7F6F2" : "425965");
        setCorLinhaDiario(selected === 'light' ? "031625" : "F7F6F2");
        setCorFonteDiario(selected === 'light' ? "1B262C" : "F7F6F2");
    }

    const getBase64 = file => {
        return new Promise(resolve => {
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            baseURL = reader.result;
            resolve(baseURL);
          };
        });
    };
    
    const handleChangeImg = e => {
        let file = e.target.files[0];
        getBase64(file)
          .then(result => {
            file["base64"] = result;
            let base64URL = result;
            setCapaDiarioImg(base64URL);
          })
          .catch(err => {
            console.log(err);
          });
    };
      

    const handleChangeCapa = e => {
        let value = e.target.value
        setSelected(value);
        if(value === 'imagem'){
            setCapaDiarioCor('');
        }
        else{
            setCapaDiarioImg('');
            setFileName('');
        }
    } 

    

    const Step1 = () => {
        return (
            <>
                <Row>
                    <InputForm 
                        id='formTitulo'
                        type='text'
                        label='Título do diário'
                        placeholder='Título do diário'
                        setChange={setTitulo}
                        value={titulo}
                    />
                </Row>
                <Row>
                    <Form.Group className="mb-3 border-0" >
                        <Form.Label>Tipo de capa do diário</Form.Label>
                        <Form.Select id="tipo-capa-diario" defaultValue={"DEFAULT"} onChange={handleChangeCapa}>
                            <option value="DEFAULT" disabled hidden>Selecione...</option>
                            {optionsCapa?.map((e) => (
                                <option key={e.label} value={e.value} label={e.label}>{e.value}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    {selected ? 
                        selected.toUpperCase() === 'COLOR' ?
                        <>
                        <Row>
                            <Form.Label>Selecione uma cor</Form.Label>
                        </Row>
                        <div className="d-flex">
                            <div>
                            <InputForm 
                                id='formColor'
                                type='color'
                                setChange={setCapaDiarioCor}
                                value={capaDiarioCor}
                                size={'md'}  
                            />
                            </div>
                            <div className="w-100 ms-1">
                                <InputForm 
                                    id='formColorText'
                                    type='text'
                                    placeholder='Cor selecionada'
                                    setChange={setCapaDiarioCor}
                                    value={capaDiarioCor}
                                    readOnly={true}
                                    size={'md'}
                                />
                            </div>
                        </div>
                        </>
                        :
                        <Form.Group className="mb-3 border-0">
                        <Form.Label>Selecione um arquivo</Form.Label> : <></>
                            <Form.Control 
                                id='formFile'
                                type='file'
                                accept='image/*'
                                label='Selecione um arquivo'
                                onChange={handleChangeImg}
                                filename={fileName}
                            />
                        </Form.Group>
                    :<></>}
                    <Row className="d-flex justify-content-center mt-2" style={{marginBottom: -30}}>
                        {capaDiarioImg || capaDiarioCor ?
                            <Diarios 
                                title={titulo}
                                image={capaDiarioImg}
                                color={capaDiarioCor}
                                key={titulo}
                            />
                        : <></>}
                    </Row>
                </Row>
                <Row className="d-flex justify-content-center mb-2">
                    <Form.Group className="mb-3 border-0" >
                        <Form.Label>Tema do diario</Form.Label>
                        <Form.Select id="tema-do-diario" defaultValue={"DEFAULT"} onChange={handleThemeDiarioChange}>
                            <option value="DEFAULT" disabled hidden>Selecione...</option>
                            {optionsTema?.map((e) => (
                                <option key={e.label} value={e.value} label={e.label}>{e.value}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button 
                        variant="link"
                        className={`text-light border me-4 preview text-${pageTheme === 'light' ? "dark" : "light"} btn-preview`}
                        onClick={handleShowModal}
                        disabled={temaDiario ? false : true}
                    >
                        Preview<i className="bi bi-eye ms-2"></i>
                    </Button>
                    <Button 
                        variant="primary"
                        className="text-light btn-perso"
                    >
                        Criar Diário
                    </Button>
                </Row>
            </>
        )
    }

    const handleShowModal = () => {
        setFlagShowModal(true);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setFlagShowModal(false);
        setShowModal(false);
    }

    return (
        <Panel handleThemeChange={handleThemeChange} title={'Crie um diário'} imageURL={getImage()}>
            <Row md={12} xl={12} lg={12} className="d-flex justify-content-center position-relative mt-5 pb-4">
                <Card className="card-full">
                    <Card.Body className="py-4 card-body">
                        <Step1 />
                    </Card.Body>
                </Card>
                {flagShowModal ? 
                <Modal show={showModal} onHide={handleCloseModal} size="md" >
                    <Modal.Header closeButton className={`border bg-${pageTheme === 'light' ? 'light' : 'dark'}`}>
                        <Modal.Title className={`text-${pageTheme === 'light' ? "dark" : "light"}`}>Preview Página diário</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={`d-flex flex-column align-items-center border bg-${temaDiario === 'light' ? 'light' : 'dark'} text-${temaDiario === 'light' ? "dark" : "light"}`}>
                        <ModalBody className="mt-2 ps-2 pe-1 border" colorFolha={corFolhaDiario}>
                            <TextPage corFonte={corFonteDiario} corLinha={corLinhaDiario}>{textExample}</TextPage>
                        </ModalBody>
                    </Modal.Body>
                </Modal>
                :
                <></>
                }
            </Row>
        </Panel>
    )
}

export default CriarDiario;