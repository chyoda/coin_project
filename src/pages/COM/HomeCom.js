import React from "react";
import Button from 'react-bootstrap/Button';
import EmptyNavBar from "../components/EmptyNavBar";
import '../styles/HomeCom.css'

const HomeEmp = () => {
    return (
        <>
            <EmptyNavBar/>
            <div className="ComBox">
                <h1>Comissão</h1>
                <div className="buttonBox">
                    <Button variant="primary">Cadastrar cliente ao QR Code</Button>{' '}
                    <Button variant="primary">Adicionar Crédito</Button>{' '}
                    <Button variant="primary">Monitorar Empresa</Button>{' '}
                    <Button variant="primary">Adicionar Empresa</Button>{' '}
                    <Button variant="primary">Adicionar Produto</Button>{' '}
                </div>
            </div>
        </>
    )
}

export default HomeEmp