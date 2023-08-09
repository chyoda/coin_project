import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css'

function FormLog() {
    return (
    <div className='form_box'>
        <Form className='login_form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuário:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembre de mim" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Entrar
            </Button>
        </Form>
    </div>
    );
}

export default FormLog;