import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './StyleCOM.css'

const CadProd = () => {
    return (
        <>
            <NavBarCOM/>
            <br/>
            <div className="boxCred">
                <br/>
                <h2>Cadastrar Produto</h2>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nome do produto:*</Form.Label>
                        <Form.Control type="text" maxLength={30} placeholder="Digite o nome do produto." />
                    </Form.Group>
                    <Form.Label>None da empresa:*</Form.Label>
                    <br/>
                    <Form.Select aria-label="Default select example">
                        <option>Selecione a empresa.</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Saldo*:</Form.Label>
                        <Form.Control type="number" max={9999.99} step="0.01" placeholder="Digite o saldo da empresa." />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit">
                        Concluir
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CadProd