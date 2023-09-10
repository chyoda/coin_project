import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import Button from 'react-bootstrap/Button';
import './../COM/StyleCOM.css'

const CadQrCode = () => {
    return (
        <>
        <NavBarCOM/>
        <br></br>
            <div>
                <div className='boxCred'>
                    <h2 className='text'>Cadastrar Cliente</h2>
                    <label>Nome:</label>
                    <br></br>
                    <input placeholder="Digite o nome do cliente" className='input'></input>
                    <br></br>
                    <br></br>
                    <label>Data de nascimento:</label>
                    <input placeholder="Digite a data de nascimento do cliente" className='input'></input>
                    <br></br>
                    <br></br>
                    <Button variant="primary" type="submit" className="btn">Ou Leia o QR Code para salvar o cliente.</Button>
                        <div className="box">
                        </div>
                    <Button variant="primary" type="submit" className="btn">
                                Concluir
                    </Button>
                </div>
            </div>
        </>
    )
}


export default CadQrCode