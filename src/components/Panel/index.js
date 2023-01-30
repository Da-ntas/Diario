import React, {Fragment} from "react";
import Footer from "../Footer";
import Header from "../Header";

const Panel = ({contentOnly, ...props}) => {
    const token = localStorage.getItem('token')
    return (
        <Fragment>
            { contentOnly ? (<>{props.children}</>) : 
            (
                <div className="layout-wrapper layout-1 layout">
                    <div className="layout-inner">
                        <div className="layout-container">
                        {token ? <Header {...props}/> : <></>}
                            <div className="container-fluid flex-grow container-p-y">
                                {props.children}
                            </div>
                        {/* {!token ? <Footer handleThemeChange={props.handleThemeChange}/>: <></>} */}
                        <Footer handleThemeChange={props.handleThemeChange}/>
                        </div>
                    </div>
                </div>
            )
            }
        </Fragment>
    )
}

export default Panel;