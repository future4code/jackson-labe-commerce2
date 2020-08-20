import React from 'react';
import styled from 'styled-components'
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'
import Filtros from './components/Filtros'


function App() {
  return (
    <div className="App">
    <Filtros/>
    <Produtos
      name={"Viagem para Marte"}
      value={10000.0}
      imageUrl={"https://picsum.photos/200/200"}
    />
    <Carrinho/>
    </div>
  );
}

export default App;