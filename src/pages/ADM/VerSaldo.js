import React from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import "../../styles/VerSaldo.css";

const VerSaldo = () => {
    return(
        <>
            <EmptyNavBar />
            <h1 class="text">Verificar Saldo do Cliente</h1>
            <h2 class="button"><button>Adicionar Membro</button></h2>
            <h2 class="button1"><button><a href="www.google.com" target="_blank">Página da comissão</a></button></h2>
        </>
    )
}

export default VerSaldo;