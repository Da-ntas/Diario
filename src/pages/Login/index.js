import React, { useEffect, useState } from "react";
import CardLoginEmail from "../../components/CardLoginEmail";
import CardLoginSenha from "../../components/CardLoginSenha";

import Panel from "../../components/Panel";

const Login = ({handleThemeChange}) => {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    localStorage.removeItem('token')

    useEffect(() => {
        if(!email && step > 0)
            setStep(0);

        if(email)
            localStorage.setItem('email', email);

        if(email && !password && step > 1)
            setStep(1)

        if(email && password && step === 2){
            localStorage.setItem('token', (Math.random() + 1).toString(36).substring(7))
        }
    }, [email, password, step])


    return(
        <Panel handleThemeChange={handleThemeChange}>
            {
                step === 0 || !email ?
                <CardLoginEmail title={"Entrar - E-mail"} setStep={setStep} setEmail={setEmail} email={email}/>
                :
                <CardLoginSenha title={"Entrar - Senha"} setStep={setStep} email={email} password={password} setPassword={setPassword} />
            }
        </Panel>
    )
}

export default Login;