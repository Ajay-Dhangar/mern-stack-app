const express = require('express');
const router = express.Router();

const { getGoals, getGoalById, createGoal, updateGoal, deleteGoal } = require('../controllers/GoalController');

router.route('/').get(getGoals).post(createGoal);
router.route('/:id').get(getGoalById).put(updateGoal).delete(deleteGoal);


module.exports = router;