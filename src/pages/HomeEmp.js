import React from "react";
import Button from 'react-bootstrap/Button';
import NavBar from "../components/NavBar";
import appLogo from  '../images/appLogo.png'
import '../styles/HomeEmp.css'

const HomeEmp = () => {
    return (
        <>
            <NavBar/>
            <div className="left">
                <img src={appLogo} alt="logo-ETE"/>
                <br/>
                <h2>Nome da Empresa</h2>
                <h3 className="desc">Obra: XXXXXXXXX</h3>
                <br/>
                <br/>
                <br/>
                <h4>DESCRIÇÃO DA EMPRESA:</h4>
                <h5 className="desc">XXXXXXXXXXXXXXX <br/> XXXXXXXXXXXX</h5>
                <br/>
            </div>
            <div className="right">
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
            </div>
        </>
    )
}

export default HomeEmp