import React from "react";
import { Form } from "react-bootstrap";

const InputForm = ({id, label, type, placeholder, setChange, value, accept, disabled, readOnly, size}) => {
    return(
        <Form>
            <Form.Group className="mb-3 border-0" controlId={id}>
            {label ? <Form.Label>{label}</Form.Label> : <></> }
                <Form.Control 
                    type={type} 
                    placeholder={placeholder}
                    onChange={(e) => setChange(e.target.value)}
                    className={`input-line`}
                    value={value || ""}
                    accept={accept || null}
                    disabled={disabled || false}
                    readOnly={readOnly || false}
                    size={size || "md"}
                />
            </Form.Group>
        </Form>
    )
}

export default InputForm;