const express = require('express');
const path = require('path');
const { Client } = require('pg');
const bodyparser = require('body-parser');


const app = express();

app.use(bodyparser.json())

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'easy-database',
  password: 'easy#123456',
  port: 5432,
});

client.connect()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

app.post('/medicamentos', (req, res) => {
  console.log('Rota /medicamentos chamada');
  const { nome, concentracoes, dosagemMinima, dosagemMaxima } = req.body;

  client.query(`
    INSERT INTO medicamentos (nome, concentracoes, dosagem_minima, dosagem_maxima)
    VALUES ($1, $2, $3, $4)
  `, [nome, concentracoes, dosagemMinima, dosagemMaxima], (err, result) => {
    if (err) {
      console.error('Erro ao executar a query:', err);
      res.status(500).send('Erro ao adicionar medicamento');
    } else {
      console.log('Medicamento adicionado com sucesso!');
      res.status(201).send('Medicamento adicionado com sucesso!');
    }
  });
});

app.get('/medicamentos', (req, res) => { 
  client.query('SELECT * FROM medicamentos', (err, result) => { 
    if (err) {
      console.error('Erro ao buscar medicamentos:', err);
      res.status(500).send('Erro ao buscar medicamentos');
    } else {
      res.json(result.rows); // Envia os medicamentos como resposta em formato JSON
    }
  })
});

app.use(express.static(path.join(__dirname, '../build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));