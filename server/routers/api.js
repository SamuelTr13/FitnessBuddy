const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

router.get('/chest', workoutController.getHistory, (req, res) => {
    // console.log('histories', res.locals.histories)
    res.status(200).json(res.locals.histories)
});

router.post('/chest', workoutController.addHistory, (req, res) => {
    res.status(200).json([{"success": "success"}])
});

module.exports = router;