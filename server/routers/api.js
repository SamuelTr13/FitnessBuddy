const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

router.get('/chest', workoutController.getHistory, (req, res) => {
    res.status(200).json(res.locals.history)
});

router.post('/chest', workoutController.addHistory, (req, res) => {
    res.status(200)
});

module.exports = router;