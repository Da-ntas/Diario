import React from "react";
import Panel from "../../components/Panel";
import { getImage } from "../../utils";

const Diario = ({handleThemeChange}) => {
    return (
        <Panel handleThemeChange={handleThemeChange} title={'Diários'} type={'diario'} imageURL={getImage()}>
        </Panel>
    )
}

export default Diario;