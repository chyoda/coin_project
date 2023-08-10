import React from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import NavBar from "../components/NavBar";
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import '../styles/HomeAdm.css';


const HomeAdm = () => {
  return (
    <>
      <NavBar />
      <h1 class="title">Adicionar Membro</h1>
      <div class="container">
        <div class="content">
          
          <Button variant="warning">Cadastrar Membro</Button>{' '}
          
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
            <Form.Control
              placeholder="Procurar por membro"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>

        <br />
        <div class="membro-cadastrado">
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
          <Button variant="info">Nome: XXXXX<br/>Cargo: XXXXX<br/>Empresa: XXX</Button>{' '}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeAdm;