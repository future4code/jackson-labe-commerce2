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
`;

const GridProdutos = styled.section`
  width: 65%;
  height: ;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
`;

const Item = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dotted #000;
  border-radius: 10px;
`;

const ItemButton = styled.button`
  width: 80%;
  height: 40px;
  color: #c5c5c5;
  background-color: #000;
  border-radius: 8px;
  border: none;
`;

export class Produtos extends React.Component {
  state = {
    produtosDaLoja: [
      {
        id: 1,
        name: "Viagem para Marte",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 2,
        name: "Viagem para Mercúrio",
        value: 40000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 3,
        name: "Viagem para Vênus",
        value: 60000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 4,
        name: "Viagem para Júpter",
        value: 80000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 5,
        name: "Viagem para Saturno",
        value: 18000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 6,
        name: "Viagem para Urânio",
        value: 5000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 7,
        name: "Viagem para Netuno",
        value: 50000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 8,
        name: "Viagem para Plutão",
        value: 150000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 9,
        name: "Viagem para Sol",
        value: 150000000000.0,
        imageUrl: "https://picsum.photos/200/200",
      },

      {
        id: 10,
        name: "Viagem para Lua",
        value: 1500.0,
        imageUrl: "https://picsum.photos/200/200",
      },
    ],
  };

  exibirProduto = () => {};

  render() {
    const produtosNoComponente = this.state.produtosDaLoja.map((produto) => {
      return (
        <Main>
          <p>{produto.name}</p>
          <p>{produto.value}</p>
          <img src={produto.imageUrl}/>
        </Main>
      );
    });

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
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>

            <Item className="produto">
              {produtosNoComponente}
              <ItemButton>Adicionar ao Carrinho</ItemButton>
            </Item>
          </GridProdutos>
        </Main>
      </ContainerPrincipal>
    );
  }
}

export default Produtos;
