const { StatusCodes } = require("http-status-codes")
const Task = require("../models/tasksModel")
const { BadRequestError, NotFoundError } = require("../errors/customErrors")
const getAllTasks = async (req, res) => {
	const tasks = await Task.find({ createdBy: req.user.userId }).sort("createdAt")
	res.status(StatusCodes.OK).json({ tasks, length: tasks.length })
}
const getTaskById = async (req, res) => {
	const searchObj = { createdBy: req.user.userId, _id: req.params.id }
	const task = await Task.findOne(searchObj)
	if (!task) {
		throw new NotFoundError(`this task does not exist with id : ${req.params.id}`)
	}
	res.status(StatusCodes.OK).json(task)
}

const updateTask = async (req, res) => {
	const searchObj = { createdBy: req.user.userId, _id: req.params.id }
	const updated = await Task.findOneAndUpdate(searchObj, req.body, { runValidators: true, new: true })
	if (updated) res.status(StatusCodes.OK).json(updated)
	else throw new BadRequestError(`this task does not exist with id : ${req.params.id}`)
}
const deleteTask = async (req, res) => {
	const searchObj = { createdBy: req.user.userId, _id: req.params.id }
	const deleted = await Task.findOneAndRemove(searchObj)
	if (deleted) res.status(StatusCodes.OK).json({ task: deleted, status: "deleted" })
	else throw new BadRequestError(`this task does not exist with id : ${req.params.id}`)
}

const createTask = async (req, res) => {
	const rqObj = { ...req.body }
	rqObj.createdBy = req.user.userId
	const newTask = await Task.create(rqObj)
	res.status(StatusCodes.CREATED).json(newTask)
}

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	deleteTask,
	updateTask,
}
