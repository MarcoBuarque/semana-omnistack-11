import React, { useState } from 'react';


function Exemplo() {
  const [counter, setCounter] = useState(0) // Retornar um array com o valor de counter e uma função de atualização de counter
  // [valor, FuncDeAtualização]
  // Imutabilidade, não posso alterar um estado diretamente ex: counter += 
  // Tenho que utilizar a função de atualização do determinado estado
  
  function incrementCounter() {
    setCounter(counter + 1)
  }
  
  return (
    <div>
      <Header title="Be a Hero">HELLO DESGRAÇA - {counter}</Header>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Exemplo;
