import React from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import '../../styles/Vender_Read_QRCODE.css'
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';

const Vender_Read_QRCODE = () => {
    return (
        <>
            <EmptyNavBar/>
            <div class='box'>
                <br />
                <CloseButton className="close-button" />
                <Form.Control className='text' type="text" placeholder="Digite o ID do cliente" />
                <Form.Label className='text_label'>Ou Leia o QR CODE:</Form.Label>
                <Button variant="warning" className='war'>Prosseguir</Button>{' '}
            </div>
        </>
    )
}

export default Vender_Read_QRCODE