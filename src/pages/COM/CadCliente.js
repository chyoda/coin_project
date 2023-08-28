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
            <h1 class='text'>Cadastrar Cliente</h1>
            <div class='card'>
                <label class='letra'>Nome:</label>
                <input placeholder="Digite o nome do cliente" class='input'></input>
                <br></br>
                <label class='letra'>Data de nascimento:</label>
                <input placeholder="Digite a data de nascimento do cliente" class='input'></input>
                <br></br>
                <button type="button" class="btn">Concluir</button>
            </div>
        </div>
    );
};

export default CadCliente;
