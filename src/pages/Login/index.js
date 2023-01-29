import React, { useEffect, useState } from "react";
import CardLoginEmail from "../../components/CardLoginEmail";
import CardLoginSenha from "../../components/CardLoginSenha";

import Panel from "../../components/Panel";

const Login = ({handleThemeChange}) => {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        if(!email && step > 0)
            setStep(0);

        if(email)
            localStorage.setItem('email', email);
    }, [email, step])


    return(
        <Panel handleThemeChange={handleThemeChange}>
            {
                step === 0 || !email ?
                <CardLoginEmail title={"Entrar - E-mail"} setStep={setStep} setEmail={setEmail} email={email}/>
                :
                <CardLoginSenha title={"Entrar - Senha"} setStep={setStep} email={email}/>
            }
        </Panel>
    )
}

export default Login;