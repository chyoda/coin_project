import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";

const CadQrCode = () => {
    return (
        <div>
            <h1 class='text'>Cadastrar Cliente</h1>
            <div class='card'>
                <label class='letra'>Nome:</label>
                <input placeholder="Digite o nome do cliente" class='input'></input>
                <br></br>
                <label class='letra'>Data de nascimento:</label>
                <input placeholder="Digite a data de nascimento do cliente" class='input'></input>
                <br></br>
                <button type="button" class="btn">Concluir</button>
                <label className="readQR">Leia o QR Code para salvar o cliente.</label>
                <div className="box">
                </div>
            </div>
        </div>
    )
}

export default CadQrCode