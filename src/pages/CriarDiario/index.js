import React, { useState } from "react";
import {Button, Card, Row, Form, Modal} from 'react-bootstrap';
import Select from 'react-select';

import { getImage, getTheme } from "../../utils";

import Panel from '../../components/Panel';
import InputForm from '../../components/InputForm';

const CriarDiario = ({handleThemeChange}) => {
    const [titulo, setTitulo] = useState('');
    const [capaDiarioCor, setCapaDiarioCor] = useState('');
    const [corFolhaDiario, setCorFolhaDiario] = useState('');
    const [corLinhaDiario, setCorLinhaDiario] = useState('');
    const [corFonteDiario, setCorFonteDiario] = useState('');
    const [capaDiarioImg, setCapaDiarioImg] = useState('');
    const [selected, setSelected] = useState('');
    const [flagShowModal, setFlagShowModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(0);
    const textExample = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, lectus sit amet dignissim consequat, ante tortor euismod est, et placerat turpis massa eget enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quam lectus, lacinia ac urna consequat, elementum pharetra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'

    const pageTheme = getTheme();

    const options = [
        {
            value: 'color',
            label: 'Selecione uma cor'
        },
        {
            value: 'imagem',
            label: 'Selecione uma imagem'
        }
    ]
    
    // const BuildSelect = () => {
    //     if(pageTheme === 'light'){
    //         return (
    //             <Select 
    //                 options={options}
    //                 theme={(theme) => ({
    //                     ...theme,
    //                     colors: {
    //                         ...theme.colors,
    //                         neutral0: 'hsl(0, 0%, 90%)',
    //                         primary25: 'red',
    //                     }
    //                 })}
    //                 styles={{
    //                     control: (baseStyles, state) => {
    //                         return {...baseStyles}
    //                     }
    //                 }}
    //                 onChange={(value) => console.log(value)}
    //             />
    //         );
    //     }
    //     else{
    //         return(
    //             <Select 
    //                 options={options}
    //                 theme={(theme) => {
    //                     console.log(theme)
    //                     return ({
    //                         ...theme,
    //                         colors: {
    //                             ...theme.colors,
    //                             neutral0: '#425965',
    //                             primary25: 'blue',
    //                         }
    //                     })
    //                 }}
    //                 option={(styles, {data, isDisabled, isFocused, isSelected}) => {
    //                     console.log('styles',styles)
    //                     console.log('data',data)
    //                     console.log('isDisabled',isDisabled)
    //                     console.log('isFocused',isFocused)
    //                     console.log('isSelected',isSelected)

    //                     return {...styles}
    //                 }}
    //                 styles={{
    //                     control: (baseStyles, state) => {
    //                         return {...baseStyles}
    //                     }
    //                 }}
    //                 onChange={(value) => console.log(value)}
    //             />
    //         )
    //     }
    // }

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
                        <Form.Select id="tipo-capa-diario" defaultValue={"DEFAULT"} onChange={(e) => setSelected(e.target.value)}>
                            <option value="DEFAULT" disabled hidden>Selecione...</option>
                            {options?.map((e) => (
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
                        <InputForm 
                            id='formTitulo'
                            type='file'
                            accept='image/*'
                            label='Selecione um arquivo'
                            placeholder='Título do diário'
                            setChange={setCapaDiarioImg}
                            value={capaDiarioImg}
                        />
                    :<></>}
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button 
                        variant="primary"
                        className="text-light btn-perso"
                        onClick={() => setStep(1)}
                    >
                        Próximo
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

    const Step2 = () => {
        return (
            <>
                <Row>
                    <Form.Label>Cor da Folha</Form.Label>
                    <div className="d-flex">
                        <InputForm 
                            id='formColor'
                            type='color'
                            setChange={setCorFolhaDiario}
                            value={corFolhaDiario}
                            size={'md'}  
                        />
                        <div className="w-100">
                            <InputForm 
                                id='formColorText'
                                type='text'
                                placeholder='Cor selecionada'
                                setChange={setCorFolhaDiario}
                                value={corFolhaDiario}
                                readOnly={true}
                                size={'md'}
                            />
                        </div>
                    </div>
                </Row>
                <Row className="mt-3">
                    <Form.Label>Cor da Linha</Form.Label>
                    <div className="d-flex">
                        <InputForm 
                            id='formColor'
                            type='color'
                            setChange={setCorLinhaDiario}
                            value={corLinhaDiario}
                            size={'md'}  
                        />
                        <div className="w-100">
                            <InputForm 
                                id='formColorText'
                                type='text'
                                placeholder='Cor selecionada'
                                setChange={setCorLinhaDiario}
                                value={corLinhaDiario}
                                readOnly={true}
                                size={'md'}
                            />
                        </div>
                    </div>
                </Row>
                <Row className="mt-3">
                    <Form.Label>Cor da Fonte</Form.Label>
                    <div className="d-flex">
                        <InputForm 
                            id='formColor'
                            type='color'
                            setChange={setCorFonteDiario}
                            value={corFonteDiario}
                            size={'md'}  
                        />
                        <div className="w-100">
                            <InputForm 
                                id='formColorText'
                                type='text'
                                placeholder='Cor selecionada'
                                setChange={setCorFonteDiario}
                                value={corFonteDiario}
                                readOnly={true}
                                size={'md'}
                            />
                        </div>
                    </div>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button 
                        variant="link"
                        className={`text-light border me-4 preview text-${pageTheme === 'light' ? "dark" : "light"} btn-preview`}
                        onClick={handleShowModal}
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

    const Lines = () => {
        return (
            <>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 55}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 96}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 136}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 178}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 220}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 256}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 296}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            <Row className="position-absolute" style={{width: '95%', left: 24, top: 336}}><hr style={{border: `2px solid ${corLinhaDiario}`}}/></Row>
            </>
        )
    }

    return (
        <Panel handleThemeChange={handleThemeChange} title={'Crie um diário'} imageURL={getImage()}>
            <Row md={12} xl={12} lg={12} className="d-flex justify-content-center position-relative mt-5 pb-4">
                <Card className="card-full">
                    <Card.Body className="py-4 card-body">
                        {step === 0 ? <Step1 /> : <Step2 />}
                    </Card.Body>
                </Card>
                {flagShowModal ? 
                <Modal show={showModal} onHide={handleCloseModal} size="md" >
                    <Modal.Header closeButton className={`border bg-${pageTheme === 'light' ? 'light' : 'dark'}`}>
                        <Modal.Title className={`text-${pageTheme === 'light' ? "dark" : "light"}`}>Preview Página diário</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={`d-flex flex-column align-items-center border bg-${pageTheme === 'light' ? 'light' : 'dark'} text-${pageTheme === 'light' ? "dark" : "light"}`}>
                        <div className="w-100 d-flex justify-content-center mt-2 ps-2" style={{height: 450, background: `linear-gradient(to bottom, ${corFolhaDiario} 29px, ${corLinhaDiario} 1px)`, backgroundSize: '90% 20px'}}>
                            <p style={{lineHeight: 2.1, color: corFonteDiario}}>{textExample}</p>
                    </div>
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