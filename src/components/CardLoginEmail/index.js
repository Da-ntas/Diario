import React from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import InputForm from "../InputForm";

const CardLoginEmail = ({title, setStep, setEmail, email}) => {
    const theme = localStorage.getItem('theme')

    return (
        <Row md={12} xl={12} lg={12} className="d-flex justify-content-center align-items-center">
            <Card className="border card-full px-0 border-none">
                <Card.Header className="card-header">{title}</Card.Header>
                <Card.Body className="card-body px-4">
                    <Row className="mt-4">
                        <InputForm 
                            id='formEmail'
                            type='email'
                            label='E-mail'
                            placeholder='Insira seu e-mail'
                            setChange={setEmail}
                            value={email}
                        />
                    </Row>

                    <Row className="mt-5">
                        <Col className="d-flex align-items-center"><a href="/conta/criar" className={`text-${theme === 'light' ? 'dark' : 'light'}`}>Criar Conta</a></Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <Button 
                                variant="primary"
                                type="submit"
                                className="text-light btn"
                                onClick={() => setStep(1)}
                                disabled={!email ? true : false}
                            >
                                Próximo
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    );

}

export default CardLoginEmail;

