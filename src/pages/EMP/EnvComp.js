import React from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import "../../styles/EnvComp.css";
import Form from 'react-bootstrap/Form';


const EnvComp = () => {
    return (
        <>
            <EmptyNavBar />
            <h1 class="text">Enviar Comprovante</h1>

            <div class='td'>
                <div class='nome'>
                    <label>Nome:</label>
                    <Form.Control size="lg" type="text" placeholder="Digite o nome do funcionário." />
                </div>
                <div class="content">
                    <div class='produto'>
                        <Form.Label >Produto:</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Digite o nome do produto." />
                    </div>
                    <div class='valor'>
                        <Form.Label >Valor Unitário:</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="R$1,00" />
                    </div>
                    <div class='quantidade'>
                        <Form.Label >Quantidade:</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="10" />
                    </div>
                </div>
                <div class="contain-products">
                    <div class="product"></div>
                    <div class="product"></div>
                    <div class="product"></div>
                    <div class="product"></div>
                </div>
            </div>
        </>
    )
}

export default EnvComp;
