import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './StyleCOM.css'

const AddCred = () => {
    return (
        <>
            <NavBarCOM/>
            <br/>
            <div className="boxCred">
                <h2>Adicionar Crédito</h2>
                <Form>
                    <Form.Group className="mb-3">
                    <input placeholder="Digite o ID do cliente." class='input'></input>
                    </Form.Group>
                    <Button>Ou Leia o QR Code</Button>
                    <div className="box"></div>
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
                    <Link to="/LerQRCode">
                        <Button variant="primary" type="submit" class="btn">
                            Prosseguir
                        </Button>
                    </Link>
                </Form>
            </div>
        </>
    )
}

export default AddCred