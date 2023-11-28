// CalculadoraGastos.jsx

import React, { useState } from 'react';
import './CalculadoraGastos.css';
import Cadastro from '../Cadastro/Cadastro';
import ListaGastos from '../ListaGastos/ListaGastos';

const CalculadoraGastos = () => {
  const [gastos, setGastos] = useState([]);
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
    if (gasto.tipo === "receita") {
      setTotalReceitas(totalReceitas + gasto.valor);
    } else {
      setTotalDespesas(totalDespesas + gasto.valor);
    }
  };

  const excluirGasto = (index) => {
    const gastoExcluido = gastos[index];
    const atualizacaoGastos = gastos.filter((_, i) => i !== index);
    setGastos(atualizacaoGastos);

    if (gastoExcluido.tipo === "receita") {
      setTotalReceitas(totalReceitas - gastoExcluido.valor);
    } else {
      setTotalDespesas(totalDespesas - gastoExcluido.valor);
    }
  };

  return (
    <div className="calculadora-gastos">
      <Cadastro onAdicionarGasto={adicionarGasto} />
      <ListaGastos
        gastos={gastos}
        totalReceitas={totalReceitas}
        totalDespesas={totalDespesas}
        onDelete={excluirGasto}
      />
    </div>
  );
};

export default CalculadoraGastos;
