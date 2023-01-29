import React from "react";
import Panel from "../../components/Panel";
import CardCriarConta from '../../components/CardCriarConta';

const CriarConta = ({handleThemeChange}) => {
    return(
        <Panel handleThemeChange={handleThemeChange}>
            <CardCriarConta />
        </Panel>
    )
}

export default CriarConta;