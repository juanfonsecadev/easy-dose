import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'; // Importe os estilos
import DosageCalculator from './DosageCalculator'; // Importe o componente
import Header from './Header';
import AddMedicationModal from './AddMedicationModal'; // Certifique-se de que este componente existe e está sendo exportado corretamente

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DosageCalculator />} /> 
          <Route path="/add" element={<AddMedicationModal />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;