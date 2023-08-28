import React, { useState } from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import '../../styles/CadCliente.css';
import CloseButton from 'react-bootstrap/CloseButton';
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>;


const CadCliente = () => {

    // É necessário iniciar um servidor PHP: php -S localhost:3000

    const [clienteData, setClienteData] = useState({
        nome: "",
        dataNascimento: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setClienteData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Aqui você pode enviar os dados para o servidor usando fetch ou outra biblioteca.
    };

    return (
        <div>
            <EmptyNavBar />
            <CloseButton />
            <h1 className='text'>Cadastrar Cliente</h1>
            <div className='card'>
                <label className='letra'>Nome:</label>
                <input
                    name="nome"
                    placeholder="Digite o nome do cliente"
                    className='input'
                    onChange={handleChange}
                    value={clienteData.nome}
                />
                <br />
                <label className='letra'>Data de nascimento:</label>
                <input
                    name="dataNascimento"
                    placeholder="Digite a data de nascimento do cliente"
                    className='input'
                    onChange={handleChange}
                    value={clienteData.dataNascimento}
                />
                <br />
                <button type="button" className="btn" onClick={handleSubmit}>
                    Concluir
                </button>
            </div>
        </div>
    );
};

export default CadCliente;
