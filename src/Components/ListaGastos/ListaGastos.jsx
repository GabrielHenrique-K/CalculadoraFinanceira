import React, { useState } from 'react';
import './ListaGastos.css';

const ListaGastos = ({ gastos, totalReceitas, totalDespesas, onDelete }) => {
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState(null);

  const handleDeleteClick = (index) => {
    setConfirmacaoExclusao(index);
  };

  const handleConfirmExclusao = () => {
    onDelete(confirmacaoExclusao);
    setConfirmacaoExclusao(null);
  };

  const handleCancelExclusao = () => {
    setConfirmacaoExclusao(null);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Lista de Gastos</h2>
      </div>
      <ul className="chat-messages">
        {gastos.map((gasto, index) => (
          <li key={index} className={gasto.tipo === 'receita' ? 'receita' : 'despesa'}>
            <span className="valor">
              {gasto.tipo === 'receita' ? '+' : '-'} R$ {gasto.valor}
            </span>
            <span className="nome">{gasto.nome}</span>
            <button className="botao-excluir" onClick={() => handleDeleteClick(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="chat-footer">
        <p className="total-label">Total Receitas:</p>
        <p className={`total-valor receita`}>R$ {totalReceitas}</p>
        <p className="total-label">Total Despesas:</p>
        <p className={`total-valor despesa`}>R$ {totalDespesas}</p>
        <p className="total-label">Saldo:</p>
        <p className="total-valor">R$ {totalReceitas - totalDespesas}</p>
      </div>

      {confirmacaoExclusao !== null && (
        <div className="confirmacao-exclusao">
          <p>Deseja realmente excluir este item?</p>
          <button onClick={handleConfirmExclusao}>Sim</button>
          <button onClick={handleCancelExclusao}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default ListaGastos;
