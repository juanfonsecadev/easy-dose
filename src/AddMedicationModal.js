import React, { useState } from 'react';

function AddMedicationModal() {
  const [nome, setNome] = useState('');
  const [concentracoes, setConcentracoes] = useState('');
  const [dosagemMinima, setDosagemMinima] = useState('');
  const [dosagemMaxima, setDosagemMaxima] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:3000/medicamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, concentracoes, dosagemMinima, dosagemMaxima })
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
      <input type="text" value={concentracoes} onChange={e => setConcentracoes(e.target.value)} placeholder="Concentrações (separadas por vírgula)" required />
      <input type="number" value={dosagemMinima} onChange={e => setDosagemMinima(e.target.value)} placeholder="Dosagem Mínima" required />
      <input type="number" value={dosagemMaxima} onChange={e => setDosagemMaxima(e.target.value)} placeholder="Dosagem Máxima" required />
      <button type="submit">Adicionar Medicamento</button>
    </form>
  );
}

export default AddMedicationModal;