import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import InputForm from "../InputForm";
import { getTheme } from "../../utils";

const CardRecuperarSenha = ({step, setStep}) => {
    const [codigo, setCodigo] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [confirmNewPassword, setConfirmNewPassword] = useState(null);
    let theme = getTheme();

    useEffect(() => {
        if(!codigo && step > 0)
            setStep(0);
    }, [codigo, setStep, step])
    
    return (
        <Row md={12} xl={12} lg={12} className="d-flex justify-content-center align-items-center">
            <Card className="border card-full px-0 border-none">
                <Card.Header className="card-header">
                    <Row md={12} xl={12} lg={12}>Altere sua senha</Row>
                    {step === 0 || !codigo ? <Row as='a' href="/login" md={12} xl={12} lg={12} style={{fontSize: '1rem'}} className={`mt-1 text-${theme === 'light' ? 'dark' : 'light'}`}>voltar para login</Row> : <></>}
                </Card.Header>
                <Card.Body className="card-body d-flex align-items-center flex-column">
                {   step === 0 || !codigo ?
                    <>
                        <Row className="w-100 text-secondario px-5 mt-2 text-center">
                        <p>Para ajudar a proteger sua conta, gostariamos de confirmar se é realmente você que está
                        fazer login</p>
                        </Row>
                        <Row className="mt-3 w-100">
                        <InputForm 
                                id='formCodigo'
                                type='text'
                                label='Digite o código que recebeu no e-mail'
                                placeholder='Insira seu código'
                                setChange={setCodigo}
                                value={codigo}
                            />
                        </Row>
                        <Row>
                            
                            <Button 
                                variant="primary"
                                type="submit"
                                className="text-light btn"
                                onClick={() => setStep(1)}
                                disabled={!codigo ? true : false}
                            >
                                Próximo
                            </Button>
                        </Row>
                    </>
                    : 
                    <>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formNewPassword'
                                    type='password'
                                    label='Digite sua nova senha'
                                    placeholder='Nova senha'
                                    setChange={setNewPassword}
                                    value={newPassword}
                            />
                        </Row>
                        <Row className="mt-3 w-100">
                            <InputForm 
                                    id='formConfirmNewPassword'
                                    type='password'
                                    label='Confirme sua nova senha'
                                    placeholder='Confirme sua nova senha'
                                    setChange={setConfirmNewPassword}
                                    value={confirmNewPassword}
                            />
                        </Row>
                        <Row className="mt-3">
                            <Button 
                                variant="primary"
                                type="submit"
                                className="text-light btn"
                                // onClick={handleAlterarSenha}
                                href="/login"
                                disabled={!newPassword && !confirmNewPassword ? true : false}
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

export default CardRecuperarSenha;