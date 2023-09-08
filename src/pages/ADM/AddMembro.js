import React from 'react';
import EmptyNavBar from '../../components/EmptyNavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/AddMembro.css';

const AddMembro = () => {
  return (
    <>
      <EmptyNavBar />
      <div class="box">
      <Form method='POST'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>* Nome:</Form.Label>
            <Form.Control autoComplete="off" type="text" style={{'background-color': '#82eaed'}} placeholder="Digite o nome do funcionário." />
          </Form.Group> {/* NOME */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>* Cadastro:</Form.Label>
            <Form.Control autoComplete="off" type="text" style={{'background-color': '#82eaed'}} placeholder="Digite o cadastro do funcionário." />
          </Form.Group> {/* CADASTRO */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>* Ocupação:</Form.Label>
            <Form.Control autoComplete="off" type="text" style={{'background-color': '#82eaed'}} placeholder="Digite a ocupação do funcionário." />
          </Form.Group> {/* OCUPAÇÃO */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>* Observação:</Form.Label>
            <Form.Control autoComplete="off" type="text" maxLength={200} style={{'background-color': '#82eaed'}} placeholder="Digite uma observação." />
          </Form.Group> {/* OBSERVAÇÃO */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>* Nome da empresa:</Form.Label>
            <Form.Control autoComplete="off" type="text" maxLength={20} style={{'background-color': '#82eaed'}} placeholder="Digite a empresa a qual o funcionário pertence." />
          </Form.Group> {/* NOMEEMPRESA */}
          <div class="center">
            <Button type='SUBMIT' variant="warning">Cadastrar</Button>{' '}
          </div>
        </Form>
      </div>
    </>
  )
}

export default AddMembro;