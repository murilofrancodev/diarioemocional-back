const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    const { emotion, note } = req.body;
    res.status(201).json({ message: 'Emoção registrada com sucesso!', emotion, note });
});

module.exports = router;