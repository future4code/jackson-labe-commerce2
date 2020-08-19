import React from "react";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  max-width: 100vw;
  width: 100%;
`;

const Cabecalho = styled.header`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const QuantidadeProdutos = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const FiltroPreco = styled.select`
  font-size: 20px;
  outline: none;
  border: none;
`;

const Main = styled.main`
width: 100vw;
height: auto;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;

`

const GridProdutos = styled.section`
  width: 65%;
  height: ;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;  
  `

const Item = styled.div`
width: 250px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px dotted #000;
border-radius: 10px;
`

const  ItemButton = styled.button`
width: 80%;
height: 40px;
color: #c5c5c5;
background-color: #000;
border-radius: 8px;
border: none;
`

export class Produtos extends React.Component {
  state = {
    produtosDaLoja: [
      {
        id: 1,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },

      {
        id: 2,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },

      {
        id: 3,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },

      {
        id: 4,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },

      {
        id: 5,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },

      {
        id: 6,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },

      {
        id: 7,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },

      {
        id: 8,
        name: "Foguete de Corda",
        value: 50.0,
        imageUrl: "",
      },
    ],
  };

  render() {
    return (
      <ContainerPrincipal>
        <Cabecalho>
          <QuantidadeProdutos>Quantidade de produtos:</QuantidadeProdutos>
          <FiltroPreco>
            <option value="precoCrescente">Preço Crescente</option>
            <option value="precoDecrescente">Preço Decrescente</option>
          </FiltroPreco>
        </Cabecalho>
        <Main>
          <GridProdutos>
            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              <img src="https://picsum.photos/200/200" />
              <p>Nome do Produto</p>
              <p>Preço do Produto</p>
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>
          </GridProdutos>
        </Main>
      </ContainerPrincipal>
    );
  }
}

export default Produtos;
