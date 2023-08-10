import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './stylesCOM/AddCred.css';

const AddCred = () => {
    return (
        <>
            <NavBarCOM/>
            <br/>
            <div className="box">
                <br/>
                <h2>Adicionar Crédito</h2>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome do cliente:*</Form.Label>
                        <Form.Control placeholder="Disabled input" disabled />
                    </Form.Group>
                    <div>
                        <Form.Control type="email" placeholder="Ex: 20,00" />
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha:*</Form.Label>
                        <Form.Control type="password" placeholder="Digite a senha da comissão." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Concluir
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddCred