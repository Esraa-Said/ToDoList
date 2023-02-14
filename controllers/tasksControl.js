const getAllTasks = async (req, res) => {
	res.send("all tasks")
}
const getTaskById = async (req, res) => {
	res.send("task")
}

const updateTask = async (req, res) => {
	res.send("update")
}
const deleteTask = async (req, res) => {
	res.send("delete")
}

const createTask = async (req, res) => {
	res.send("create task")
}

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	deleteTask,
	updateTask,
}
