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
                <h2 className='text'>Adicionar Crédito</h2>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome do cliente:</Form.Label>
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3">
                        <Form.Label>Valor a ser adicionado:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex: 20,00"
                        />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit">
                        Concluir
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default LerQR;
