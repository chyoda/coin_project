import React from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import { Link } from "react-router-dom";
import "../../styles/inicialadm.css";

const HomeADM = () => {
    return(
        <>
            <EmptyNavBar />
            <h1 class="text">Administrador</h1>
            <Link to='/AdicionarMembros'>
                <h2 class="button"><button>Adicionar Membro</button></h2>
            </Link>
            <Link to='/ComissaoDashboard'>
                <h2 class="button1"><button>Página da comissão</button></h2>
            </Link>
        </>
    )
}

export default HomeADM;