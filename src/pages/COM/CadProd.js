import React, { useEffect, useState } from 'react';
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './StyleCOM.css'

const CadProd = () => {

    const [empresas, setEmpresas] = useState([]);    
    const [nomeProduto, setNomeProduto] = useState("");
    const [valorProduto, setValorProduto] = useState("");
    const [nomeEmpresa, setEmpresaSelecionada] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Código HANDLE SUBMIT executado");
        try {
            const response = await axios.post("http://localhost:8080/backend/cadastrarProduto.php", {
                nomeProduto: nomeProduto,
                valorProduto: valorProduto,
                nomeEmpresa: nomeEmpresa,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Lida com a resposta do servidor aqui, se necessário
            console.log("Resposta do servidor:", response.data);
        } catch (error) {
            // Lida com erros de requisição aqui
            console.error("Erro na requisição:", error);
        }
        console.log("TRY ou CATCH realizado.");
    };

    useEffect(() => {
        axios.get('http://localhost:8080/backend/ListarEmpresaCadProduto.php')

            .then(response => {
                console.log('Resposta do servidor:', response.data);
                setEmpresas(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar empresas:', error);
            });

    }, []);
    return (
        <>
            <NavBarCOM />
            <br />
            <div className="boxCred">
                <br />
                <h2>Cadastrar Produto</h2>
                <br />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nome do produto:*</Form.Label>
                        <Form.Control 
                            type="text" 
                            maxLength={30} 
                            placeholder="Digite o nome do produto." 
                            value={nomeProduto}
                            onChange={(e) => setNomeProduto(e.target.value)}    
                        />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Valor do produto*:</Form.Label>
                        <Form.Control 
                            type="number" 
                            max={9999.99} 
                            step="0.01" 
                            placeholder="Digite o valor do produto." 
                            value={valorProduto}
                            onChange={(e) => setValorProduto(e.target.value)}    
                        />
                    </Form.Group>
                    <br />
                    <Form.Label>Nome da empresa:*</Form.Label>
                    <br />
                    <Form.Select 
                        aria-label="Selecione a empresa."
                        value={nomeEmpresa}
                        onChange={(e) => setEmpresaSelecionada(e.target.value)}
                        >
                        <option>Selecione a empresa.</option>
                        {empresas.map(empresa => (
                            <option key={empresa.id} value={empresa.name}>
                                {empresa.name}
                            </option>
                        ))}
                    </Form.Select>
                    <Button variant="primary" type="submit">
                        Concluir
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CadProd