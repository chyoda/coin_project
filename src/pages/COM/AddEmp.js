import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';    
import './StyleCOM.css'

const AddEmp = () => {
    return (
        <>
            <NavBarCOM/>
            <br/>
            <Form className='boxCred'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nome da empresa:*</Form.Label>
                    <Form.Control type="text" maxLength={30} placeholder="Digite o nome do cliente." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Representante:*</Form.Label>
                    <Form.Control type="text" maxLength={30} placeholder="Digite o representante da empresa." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Descrição:*</Form.Label>
                    <Form.Control type="text" maxLength={70} placeholder="Digite a descrição da empresa." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Saldo*:</Form.Label>
                    <Form.Control type="number" max={9999.99} step="0.01" placeholder="Digite o saldo da empresa." />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                Concluir
                </Button>
            </Form>
        </>
    )
}

export default AddEmp