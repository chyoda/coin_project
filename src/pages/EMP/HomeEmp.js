import React from "react";
import Button from 'react-bootstrap/Button';
import EmptyNavBar from "../components/EmptyNavBar";
import appLogo from  '../images/appLogo.png'
import '../styles/HomeEmp.css'

const HomeEmp = () => {
    return (
        <>
            <EmptyNavBar/>
            <div className="wrapper">
                <div className="left">
                    <img src={appLogo} alt="logo-ETE"/>
                    <br/>
                    <h2>Nome da Empresa</h2>
                    <h3 className="desc">Obra: XXXXXXXXX</h3>
                    <br/>
                    <br/>
                    <br/>
                    <h4>DESCRIÇÃO DA EMPRESA:</h4>
                    <h5 className="desc">XXXXXXXXXXXXXXX <br/> XXXXXXXXXXXX</h5>
                    <br/>
                </div>
                <div className="right">
                    <div>
                        <h3>Faturou até o momento:</h3>
                        <hr/>
                        <hr/>
                        <div>
                            <h2>1000,00 R$</h2>
                        </div>
                        <hr/>
                        <hr/>
                    </div>
                    <Button variant="primary">Vender</Button>{' '}
                    <br/>
                    <br/>
                    <Button variant="primary">Verificar saldo do cliente</Button>{' '}
                    <br/>
                    <br/>
                    <Button variant="primary">Extrato</Button>{' '}
                    <br/>
                    <br/>
                    <Button variant="primary">Enviar comprovante de compra</Button>{' '}
                </div>
            </div>
        </>
    )
}

export default HomeEmp