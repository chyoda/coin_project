import React from "react";
import EmptyNavBar from "../../components/EmptyNavBar";
import '../../styles/Extrato.css'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Extrato = () => {
    return(
        <div>
            <EmptyNavBar />
            <h1 class='text'>Extrato da empresa</h1>
            <div class="container">
                <div class="esquerda">
                    <div class="contain-info">
                        <div class="circle">↓</div>
                        <div class="info">
                            <h5>Cliente: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                            <h5>ID: 0000000000000-000000000000</h5>
                            <h5>valor da compra: R$ 0,00</h5>
                        </div>
                    </div> {/* contain-info */}
                    <div class="contain-info">
                        <div class="circle">↓</div>
                        <div class="info">
                            <h5>Cliente: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                            <h5>ID: 0000000000000-000000000000</h5>
                            <h5>valor da compra: R$ 0,00</h5>
                        </div>
                    </div> {/* contain-info */}
                    <div class="contain-info">
                        <div class="circle">↓</div>
                        <div class="info">
                            <h5>Cliente: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                            <h5>ID: 0000000000000-000000000000</h5>
                            <h5>valor da compra: R$ 0,00</h5>
                        </div>
                    </div> {/* contain-info */}
                    <div class="contain-info">
                        <div class="circle">↓</div>
                        <div class="info">
                            <h5>Cliente: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                            <h5>ID: 0000000000000-000000000000</h5>
                            <h5>valor da compra: R$ 0,00</h5>
                        </div>
                    </div> {/* contain-info */}
                    <div class="contain-info">
                        <div class="circle">↓</div>
                        <div class="info">
                            <h5>Cliente: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                            <h5>ID: 0000000000000-000000000000</h5>
                            <h5>valor da compra: R$ 0,00</h5>
                        </div>
                    </div> {/* contain-info */}
                    <div class="contain-info">
                        <div class="circle">↓</div>
                        <div class="info">
                            <h5>Cliente: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h5>
                            <h5>ID: 0000000000000-000000000000</h5>
                            <h5>valor da compra: R$ 0,00</h5>
                        </div>
                    </div> {/* contain-info */}
                </div>
                <div class="direita">
                </div>
            </div>
        </div>
    )
}

export default Extrato;