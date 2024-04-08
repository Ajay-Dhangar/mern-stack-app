// const Goal = require('../models/Goal');

// @desc GET all goals
// @route GET /api/goals
// @access Private

const getGoals = (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: 'Get all goals' });
}

// @desc GET goal by id
// @route GET /api/goals/:id
// @access Private

const getGoalById = (req, res) => {
    res.status(200).json({ message: `Get goal with id ${req.params.id}` });
}

// @desc Create new goal
// @route POST /api/goals
// @access Private

const createGoal = (req, res) => {
    res.status(200).json({ message: 'Create new goal' });
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal with id ${req.params.id}` });
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal with id ${req.params.id}` });
}


module.exports = { getGoals, getGoalById, createGoal, updateGoal, deleteGoal };