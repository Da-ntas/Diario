import React from "react";
import { Form } from "react-bootstrap";

const InputForm = ({id, label, type, placeholder, setChange, value}) => {
    return(
        <Form>
            <Form.Group className="mb-3 border-0" controlId={id}>
                {label ? <Form.Label>{label}</Form.Label> : <></> }
                <Form.Control 
                    type={type} 
                    placeholder={placeholder} 
                    onChange={(e) => setChange(e.target.value)} 
                    className="input-line"
                    value={value || ""}
                />
            </Form.Group>
        </Form>
    )
}

export default InputForm;