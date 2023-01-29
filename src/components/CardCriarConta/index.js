import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import InputForm from "../InputForm";

const CardCriarConta = () => {
    const [step, setStep] = useState(0);
    const [primeiroNome, setPrimeiroNome] = useState(null);
    const [sobrenome, setSobrenome] = useState(null);
    const [email, setEmail] = useState(null);
    const [apelido, setApelido] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [confirmNewPassword, setConfirmNewPassword] = useState(null);

    useEffect(() => {
        if(!primeiroNome && !sobrenome && !email && step > 0)
            setStep(0);
    }, [primeiroNome, sobrenome, email, setStep, step])
    
    return (
        <Row md={12} xl={12} lg={12} className="d-flex justify-content-center align-items-center">
            <Card className="border card-full px-0 border-none">
                <Card.Header className="card-header">
                    <Row md={12} xl={12} lg={12}>Crie sua conta</Row>
                </Card.Header>
                <Card.Body className="card-body d-flex align-items-center flex-column">
                {   step === 0 ?
                    <>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formPrimeiroNome'
                                    type='text'
                                    label='Primeiro nome'
                                    placeholder='Primeiro Nome'
                                    setChange={setPrimeiroNome}
                                    value={primeiroNome}
                                />
                        </Row>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formSobrenome'
                                    type='text'
                                    label='Sobrenome'
                                    placeholder='Sobrenome'
                                    setChange={setSobrenome}
                                    value={sobrenome}
                                />
                        </Row>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formCodigo'
                                    type='email'
                                    label='E-mail'
                                    placeholder='E-mail'
                                    setChange={setEmail}
                                    value={email}
                                />
                        </Row>
                        <Row>
                            
                            <Button 
                                variant="primary"
                                type="submit"
                                className="text-light btn"
                                onClick={() => setStep(1)}
                                disabled={!email || !sobrenome || !primeiroNome ? true : false}
                            >
                                Próximo
                            </Button>
                        </Row>
                    </>
                    : 
                    <>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formApelido'
                                    type='text'
                                    label='Apelido'
                                    placeholder='Apelido'
                                    setChange={setApelido}
                                    value={apelido}
                            />
                        </Row>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formNewPassword'
                                    type='password'
                                    label='Digite sua senha'
                                    placeholder='Senha'
                                    setChange={setNewPassword}
                                    value={newPassword}
                            />
                        </Row>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formConfirmNewPassword'
                                    type='password'
                                    label='Confirme sua senha'
                                    placeholder='Confirme sua senha'
                                    setChange={setConfirmNewPassword}
                                    value={confirmNewPassword}
                            />
                        </Row>
                        <Row className="mt-3">
                            <Button 
                                variant="primary"
                                type="submit"
                                className="text-light btn"
                                href="/login"
                                disabled={!apelido || !newPassword || !confirmNewPassword ? true : false}
                            >
                                Alterar senha
                            </Button>
                        </Row>
                    </>}
                </Card.Body>
                <></>
            </Card>
        </Row>
    )
}

export default CardCriarConta;