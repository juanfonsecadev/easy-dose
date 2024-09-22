const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'easy#123456',
  database: 'easy-database'
});

client.connect();

function insertMedicamento(nome, concentracoes, dosagem_minima, dosagem_maxima) {
  client.query(`
    INSERT INTO medicamentos (nome, concentracoes, dosagem_minima, dosagem_maxima)
    VALUES ($1, $2, $3, $4)
  `, [nome, concentracoes, dosagem_minima, dosagem_maxima], (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Dados inseridos com sucesso!');
    }
  });
}

module.exports = { insertMedicamento }; // Exportando a função para que possa ser usada em outros arquivos