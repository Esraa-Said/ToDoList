const { StatusCodes } = require("http-status-codes")

const middlewareErrorhandler = (err, req, res, next) => {
	let message = err.message || "there is a server error try again later"
	let statusCode = StatusCodes.INTERNAL_SERVER_ERROR
	if (err.name === "CastError") {
		statusCode = StatusCodes.NOT_FOUND
		message = `this id is not exist. id: ${err.value}`
	}
	res.status(statusCode).json({ msg: message })
}

module.exports = middlewareErrorhandler
