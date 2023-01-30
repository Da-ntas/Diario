import React from "react";
import Panel from "../../components/Panel";

const Diario = ({handleThemeChange}) => {
    return (
        <Panel handleThemeChange={handleThemeChange} title={'Diários'} type={'diario'}>
        </Panel>
    )
}

export default Diario;