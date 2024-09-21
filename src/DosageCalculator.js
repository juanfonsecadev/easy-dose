import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import Result from './Result';
import medicationList from './medicationList';

const DosageCalculator = () => {
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [unidadeDosagem, setUnidadeDosagem] = useState('ml');
  const [unidadeDosagemAnterior, setUnidadeDosagemAnterior] = useState('ml');
  const [resultado, setResultado] = useState(null);
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState(null);
  const [concentracaoSelecionada, setConcentracaoSelecionada] = useState(null);

  const handleMedicamentoChange = (event) => {
    const selectedMedicamento = medicationList.find(
      (med) => med.nome === event.target.value
    );
    setMedicamentoSelecionado(selectedMedicamento);
    setConcentracaoSelecionada(
      selectedMedicamento ? selectedMedicamento.concentracoes[0] : null
    ); 
  };

  const handleConcentracaoChange = (event) => {
    setConcentracaoSelecionada(event.target.value);
  };

  const calcularDosagem = () => {
    if (!medicamentoSelecionado || !concentracaoSelecionada || !peso) {
      alert('Por favor, selecione um medicamento, concentração e insira o peso.');
      return;
    }

    const pesoKg = parseFloat(peso);
    const dosagemMgKgDose = parseFloat(dosagem);
    const concentracaoMgMl = parseFloat(concentracaoSelecionada.split('mg/ml')[0]);

    const dosagemTotalMg = pesoKg * dosagemMgKgDose;
    const dosagemTotalMl = dosagemTotalMg / concentracaoMgMl;

    const resultadoCalculado = unidadeDosagem === 'ml' 
      ? dosagemTotalMl 
      : Math.round(dosagemTotalMl * 20);  // Multiplicar por 20 para converter ml em gotas e arredondar para o número inteiro mais próximo

    setResultado(resultadoCalculado);
  };

  useEffect(() => {
    setUnidadeDosagemAnterior(unidadeDosagem);
  }, [unidadeDosagem]);

  useEffect(() => {
    if (resultado !== null) { // Só recalcular se já tiver um resultado
      const novoResultado = unidadeDosagem === 'ml' 
        ? resultado / (unidadeDosagemAnterior === 'ml' ? 1 : 20)
        : resultado * (unidadeDosagemAnterior === 'ml' ? 20 : 1);
      setResultado(novoResultado);
    }
  }, [unidadeDosagem]);

  return (
    <div>
      {/* Dropdown para selecionar o medicamento */}
      <select onChange={handleMedicamentoChange}>
        <option value="">Selecione um medicamento</option>
        {medicationList.map((medicamento) => (
          <option key={medicamento.nome} value={medicamento.nome}>
            {medicamento.nome}
          </option>
        ))}
      </select>

      {/* Dropdown para selecionar a concentração (se um medicamento estiver selecionado) */}
      {medicamentoSelecionado && (
        <select value={concentracaoSelecionada} onChange={handleConcentracaoChange}>
          {medicamentoSelecionado.concentracoes.map((conc) => (
            <option key={conc} value={conc}>
              {conc}
            </option>
          ))}
        </select>
      )}

      <div className="input-container">
        <label htmlFor="peso">Peso</label>
        <div className={`input-field`}>
          <input 
            type="text" 
            id="peso" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
          />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="idade">Idade</label>
        <div className={`input-field`}>
          <input 
            type="text" 
            id="idade" 
            value={idade} 
            onChange={(e) => setIdade(e.target.value)} 
          />
        </div>
      </div>

      <Input label="Dosagem" value={dosagem} onChange={setDosagem} unit={unidadeDosagem} setUnit={setUnidadeDosagem} />
      <Button title="Calcular" onPress={calcularDosagem} />

      {resultado && <Result value={unidadeDosagem === 'ml' ? resultado.toFixed(2) : resultado.toString()} unit={unidadeDosagem} />}
    </div>
  );
};

export default DosageCalculator;
