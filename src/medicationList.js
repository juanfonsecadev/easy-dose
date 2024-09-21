const medicationList = [
    { 
      nome: 'Paracetamol', 
      concentracoes: ['100mg/ml', '200mg/ml'], 
      dosagem: {
        minima: 10, // mg/kg/dose
        maxima: 15  // mg/kg/dose
      } 
    },
    { 
      nome: 'Ibuprofeno', 
      concentracoes: ['50mg/ml', '100mg/ml'], 
      dosagem: {
        minima: 5,  // mg/kg/dose
        maxima: 10  // mg/kg/dose
      } 
    },
    // ... adicione outros medicamentos aqui
  ];
  
  export default medicationList;