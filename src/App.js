import React from 'react';
import styled from 'styled-components'
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'
import Filtros from './components/Filtros'

export class App extends React.Component {
  state = {
    produtosDaLoja: [],
    ordem: "crescente",
    valorMaximo: Infinity,
    valorMinimo: 0,
    buscarProduto: "",
    adicionarProduto: false,
    carrinho: [],
  }

  // Seção de alteração de estados

  alterarOrdem = (event) => {
    this.setState({ordem: event.target.value})
  }

  alterarValorMinimo = (event) => {
    this.setState({valorMinimo: Number(event.target.value)})
  }

  alterarValorMaximo = (event) => {
    this.setState({valorMaximo: Number(event.target.value)})
  }

  buscarProduto = (event) => {
    this.setState({buscarProduto: event.target.value})
  }

  filtrarProdutos = () => {
    let produtosFiltrados = this.state.produtosDaLoja
    if(this.state.valorMinimo) {
      produtosFiltrados = produtosFiltrados.filter(
        produtosDaLoja => {
          return produtosDaLoja.value >= this.state.valorMinimo
        })
      } if(this.state.valorMaximo) {
        produtosFiltrados = produtosFiltrados.filter(
          produtosDaLoja => {
            return produtosDaLoja.value <= this.state.valorMaximo
          })
      } if(this.state.buscarProduto !== "") {
        produtosFiltrados = produtosFiltrados.filter(
          produtosDaLoja => {
            return produtosDaLoja.name.includes(
              this.state.buscarProduto
            )
          })
      }
      return produtosFiltrados
  }

  // produtos no carrinho

  adicionarProdutos = (id) => {
    let carrinhoNovo = this.state.carrinho
    const produtoNovo = carrinhoNovo.findIndex( produtosDaLoja => produtosDaLoja.id === id)
    if(produtoNovo === -1){
      const itemDoCarrinho = this.state.produtosDaLoja.find(item => item.id === id)
      const produtoComprado = {
        id: produtosDaLoja.id,
        nome: produtosDaLoja.name,
        valor: produtosDaLoja.value,
        quantidade: 1,
      }
      carrinhoNovo.push(produtoComprado)
    } else {
      const quantidade = carrinhoNovo[produtoNovo].quantidade
      carrinhoNovo[produtoNovo] = {... carrinhoNovo[produtoNovo], quantidade: quantidade + 1}
    }
    this.setState({carrinho: carrinhoNovo})
  }

  apagarProduto = (id) => {
    const excluaProduto = this.state.carrinho.filter(produtosDaLoja => {
      return produtosDaLoja.id !== id
    })
    this.state({carrinho: excluaProduto})
  }


  render() {
    const listaOrdenada = this.filtrarProdutos().sort((a, b) => {
      if(this.state.ordem === "crescente") {
        return a.value - b.value
      } else if(this.state.ordem === "descrescente"){
        return b.value - a.value
      }
    })

    return(

    )
  }
}

export default App;