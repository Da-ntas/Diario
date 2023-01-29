import React, { useState } from "react";
import Panel from "../../components/Panel";
import CardRecuperarSenha from '../../components/CardRecuperarSenha';

const RecuperarSenha = ({handleThemeChange}) => {    
    const [step, setStep] = useState(0);
    return(
        <Panel handleThemeChange={handleThemeChange}>
            <CardRecuperarSenha step={step} setStep={setStep}/>
        </Panel>
    )
}

export default RecuperarSenha;