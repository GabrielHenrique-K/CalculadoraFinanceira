import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = ({ onAdicionarGasto }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoGasto = {
      nome,
      valor: parseFloat(valor),
      tipo,
    };
    onAdicionarGasto(novoGasto);
    setNome('');
    setValor('');
    setTipo('receita');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Cadastro de Gastos</h2>
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Valor:
          <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
        </label>
        <label>
          Tipo:
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Cadastro;
