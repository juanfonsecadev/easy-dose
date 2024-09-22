const express = require('express');
const path = require('path'); // Adicione esta linha
const { Client } = require('pg');

const app = express();
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'easy-database',
  password: 'easy#123456',
  port: 5432,
});

app.use(express.json()); // para analisar corpos de solicitação JSON

app.post('/medicamentos', (req, res) => {
  const { nome, concentracoes, dosagemMinima, dosagemMaxima } = req.body;
  
  client.query(`
    INSERT INTO medicamentos (nome, concentracoes, dosagem_minima, dosagem_maxima)
    VALUES ($1, $2, $3, $4)
  `, [nome, concentracoes, dosagemMinima, dosagemMaxima], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao adicionar medicamento');
    } else {
      res.status(201).send('Medicamento adicionado com sucesso!');
    }
  });
});

// Depois de todas as outras rotas...
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));