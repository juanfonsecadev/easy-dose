const express = require('express');
const { insertMedicamento } = require('./database'); // Importando a função do database.js

const app = express();

app.use(express.json()); // para analisar corpos de solicitação JSON

app.post('/medicamentos', (req, res) => {
  const { nome, concentracoes, dosagem_minima, dosagem_maxima } = req.body;
  insertMedicamento(nome, concentracoes, dosagem_minima, dosagem_maxima);
  res.status(201).send('Medicamento adicionado com sucesso!');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));