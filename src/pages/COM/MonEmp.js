import React from "react";
import NavBarCOM from "./componentsCOM/NavBarCOM";
import EmpCard from "./componentsCOM/EmpCard";
import './StyleCOM.css'

const MonEmp = () => {
    return (
        <>
            <NavBarCOM/>
            <br/>
            <br/>
            <div className='ComBox'>
                <h2>Monitorar Empresas</h2>
                <hr/>
                <hr/>
                <br/>
                <div className='cardsAlign'>
                    <EmpCard/>
                    <EmpCard/>
                    <EmpCard/>
                </div>
                <br/>
                <div className='cardsAlign'>
                    <EmpCard/>
                    <EmpCard/>
                    <EmpCard/>
                </div>
                <br/>
                <div className='cardsAlign'>
                    <EmpCard/>
                    <EmpCard/>
                    <EmpCard/>
                </div>

            </div>
        </>
    )
}

export default MonEmp