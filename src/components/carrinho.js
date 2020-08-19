import React from "react";
import styled from "styled-components";

const ContainerPrincipal = styled.aside`
display: flex;
flex-direction: column;
align-items:flex-end;
margin: 10px 10px 0px 0px;

` 
const BoxCarrinho = styled.div`
display:flex ;
flex-direction: column;
align-items:flex-start;
border: solid 1px black;
height: 95vh;
width: 20vw;
`
const TituloCarrinho = styled.h2`
margin-left: 10px;
`
const Preco = styled.p`
margin-left: 10px;
`

export default class Carrinho extends React.Component {
    render () {
        return (
            <ContainerPrincipal>
                <BoxCarrinho>
                <TituloCarrinho>Carrinho:</TituloCarrinho>
                <Preco>Total: R$ 0.00</Preco>
                </BoxCarrinho>
            </ContainerPrincipal>
        )
    }
}