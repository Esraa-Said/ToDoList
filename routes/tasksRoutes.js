const express = require("express")
const router = express.Router()
const { getAllTasks, getTaskById, createTask, deleteTask, updateTask } = require("../controllers/tasksControl")

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTaskById).delete(deleteTask).patch(updateTask)

module.exports = router
