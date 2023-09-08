import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LerQR = () => {
    return (
        <>
            <NavBarCOM/>
            <br/>
            <div className="boxCred">
                <h2 class='text'>Adicionar Crédito</h2>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome do cliente:*</Form.Label>
                        <Form.Control placeholder="Disabled input" disabled />
                    </Form.Group>
                    <br/>
                    <div>
                        <Form.Control type="email" placeholder="Ex: 20,00" />
                    </div>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha:*</Form.Label>
                        <Form.Control type="password" placeholder="Digite a senha da comissão." />
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

export default LerQR