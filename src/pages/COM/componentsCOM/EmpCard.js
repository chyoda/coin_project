import React from "react";
import Form from 'react-bootstrap/Form';
import appLogo from '../../../images/appLogo.png'
import '../StyleCOM.css'

const EmpCard = () => {
    return (
        <>
            <button className="cardBox">
                <img
                    alt=""
                    src={appLogo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                />{' '}
                <br/>
                <br/>
                <h4>Nome da empresa</h4>
                <h5>Obra</h5>
                <br/>
                <Form.Control
                    type="number"
                    placeholder="Saldo disponível"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
            </button>
        </>
    )
}

export default EmpCard