import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import appLogo from  '../images/appLogo.png'

function NavBar() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={appLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            VTC Bank
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#vender">Vender</Nav.Link>
                <Nav.Link href="#saldo">Saldo</Nav.Link>
                <Nav.Link href="#extrato">Extrato</Nav.Link>
                <Nav.Link href="#enviar_comp">Enviar Comp.</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="#home">
            User.222
            <img
                alt=""
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
        </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;