import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';    
import './StyleCOM.css';
import $ from 'jquery';  // Importar a biblioteca jQuery


const AddEmp = () => {
    
    const handleSubmit = (event) => {

        console.log("O código foi executado até aqui.")
        event.preventDefault(); // Impedir o envio padrão do formulário

        const formData = {
            nomeEmpresa: event.target.nomeEmpresa.value,
            descricao: event.target.descricao.value,
            saldo: event.target.saldo.value
        };

        $.ajax({
            url: "/backend/cadastrarEmpresa.php", // Caminho relativo à raiz do projeto
            method: "POST",
            data: formData,
            success: function (response) {
                console.log("Sucesso:", response);
                // Redirecionar ou atualizar a página, se necessário
            },
            error: function (error) {
                console.error("Erro ao enviar dados:", error);
            }
        });
    };

    return (
        <>
            <NavBarCOM/>
            <br/>
            <Form className='boxCred' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nome da empresa:*</Form.Label>
                    <Form.Control name='nomeEmpresa' type="text" maxLength={30} placeholder="Digite o nome da empresa." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Descrição:*</Form.Label>
                    <Form.Control name='descricao' type="text" maxLength={70} placeholder="Digite a descrição da empresa." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Saldo*:</Form.Label>
                    <Form.Control name='saldo' type="number" max={99999999.99} step="0.01" placeholder="Digite o saldo da empresa." />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                Concluir
                </Button>
            </Form>
        </>
    )
}

export default AddEmp;
