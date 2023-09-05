import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Button from 'react-bootstrap/Button';
import './../COM/StyleCOM.css'

const CadQrCode = () => {
    return (
        <div>
            <div class='boxCred'>
                <h2 class='text'>Cadastrar Cliente</h2>
                <label class='letra'>Nome:</label>
                <br></br>
                <input placeholder="Digite o nome do cliente" class='input'></input>
                <br></br>
                <label class='letra'>Data de nascimento:</label>
                <input placeholder="Digite a data de nascimento do cliente" class='input'></input>
                <Button variant="primary" type="submit" class="btn">Ou Leia o QR Code para salvar o cliente.</Button>
                    <div className="box">
                    </div>
                <Button variant="primary" type="submit" class="btn">
                            Concluir
                </Button>
            </div>
        </div>
    )
}

export default CadQrCode