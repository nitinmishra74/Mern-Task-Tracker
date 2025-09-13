const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/TaskController');

const router = require('express').Router();

//To get all the tasks
router.get('/',fetchAllTasks);
// To create task 
router.post('/', createTask); 

//To update the task
router.put('/:id',updateTaskById);

//To delete a task
router.delete('/:id',deleteTaskById);

module.exports = router;