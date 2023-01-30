import React, {useState, useEffect} from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import InputForm from "../InputForm";

const CardLoginSenha = ({title, email, password, setPassword, setStep}) => {
    const theme = localStorage.getItem('theme');

    return (
        <Row md={12} xl={12} lg={12} className="d-flex justify-content-center align-items-center">
            <Card className="border card-full px-0 border-none">
                <Card.Header className="card-header">
                    <Row md={12} xl={12} lg={12}>{title}</Row>
                    <Row md={12} xl={12} lg={12} className="card-header-emailbox my-2" onClick={() => setStep(0)}>{email}</Row>
                </Card.Header>
                <Card.Body className="card-body px-4">
                    <Row className="mt-4">
                        <InputForm 
                            id='formSenha'
                            type='password'
                            label='Senha'
                            placeholder='Insira sua senha'
                            setChange={setPassword}
                            value={password}
                        />
                    </Row>

                    <Row className="mt-5">
                        <Col className="d-flex align-items-center">
                            <a 
                                href="/senha/recuperar" 
                                className={`text-${theme === 'light' ? 'dark' : 'light'}`}
                            >
                                Esqueceu a senha?
                            </a>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <Button 
                                variant="primary"
                                type="submit"
                                className="text-light btn"
                                onClick={() => setStep(2)}
                                disabled={!password ? true : false}
                            >
                                Entrar
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    );

}

export default CardLoginSenha;

