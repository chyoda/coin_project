import React from "react";
import { Link } from "react-router-dom";
import EmptyNavBar from "../../components/EmptyNavBar";
import Button from 'react-bootstrap/Button';
import './stylesCOM/HomeCom.css';

const HomeCom = () => {
    return (
        <>
            <EmptyNavBar/>
            <div className="ComBox">
                <br/>
                <h1>Comissão</h1>
                <hr/>
                <hr/>
                <Link to="/GerarQrCode">
                    <Button variant="primary">Cadastrar Cliente ao QR Code</Button>
                </Link>{' '}
                <Link to="/AdicionarCredito">
                    <Button variant="primary">Adicionar Crédito</Button>
                </Link>{' '}
                <Link to="/MonitorarEmpresas">
                    <Button variant="primary">Monitorar Empresas</Button>
                </Link>{' '}
                <Link to="/AdicionarEmpresa">
                    <Button variant="primary">Adicionar Empresa</Button>
                </Link>{' '}
                <Link to="/CadastrarProdutos">
                    <Button variant="primary">Adicionar Produto</Button>
                </Link>{' '}
            </div>
        </>
    )
}

export default HomeCom;