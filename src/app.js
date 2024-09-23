const express = require('express');
const dotenv = require('dotenv');
const emotionRoutes = require('./routes/emotions');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/emotions', emotionRoutes);

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Diário de Emoções API!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});