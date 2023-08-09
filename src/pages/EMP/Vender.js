import React from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './styles/vender.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Vender = () => {
    return (
        <>
            <EmptyNavBar/>
            <div className="ComBox">
                <h1>Realizar Venda</h1>
            </div>

            <div>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                <Form.Control
                    placeholder="Procurar por produto"
                    aria-describedby="inputGroup-sizing-sm"
                />
                
            </InputGroup>
            </div>

            <div class="tet">
            <br />
            <br />
            <br />
            <Form.Control type="text" placeholder="Nome do produto" /> 
            <br />
            <Form.Control class="comboinput" type="text" placeholder="Nome do produto" />
            <br />
            <Form.Control class="comboinput" type="text" placeholder="Nome do produto" />
            <br />
            <Form.Control class="comboinput" type="text" placeholder="Nome do produto" />
            <br />
            <Form.Control type="number" placeholder="R$1,00" />
            <br />
            <Form.Control type="number" placeholder="R$1,00" />
            <br />
            <Form.Control type="number" placeholder="R$1,00" />
            <br />
            <Form.Control type="number" placeholder="R$1,00" />
            </div>

            <div>

            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>

            </div>
        </>
    )
}


export default Vender;