import React from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import '../../styles/CadCliente.css'
import CloseButton from 'react-bootstrap/CloseButton';


const CadCliente = () =>{
    return(
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
    )
}




export default CadCliente;