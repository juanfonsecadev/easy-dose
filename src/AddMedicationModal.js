import React from 'react';
import { useHistory } from 'react-router-dom';

function AddMedicationModal() {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    // Aqui vai o código para adicionar o medicamento
    // ...
    // Depois de adicionar o medicamento, redirecionar para a página anterior
    history.goBack();
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Concentrações (separadas por vírgula)" required />
        <input type="number" placeholder="Dosagem Mínima" required />
        <input type="number" placeholder="Dosagem Máxima" required />
        <button type="submit">Adicionar Medicamento</button>
        <button type="button" onClick={() => history.goBack()}>Cancelar</button>
      </form>
    </div>
  );
}

export default AddMedicationModal;