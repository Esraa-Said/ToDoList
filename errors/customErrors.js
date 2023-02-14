const { StatusCodes } = require("http-status-codes")

class NotFoundError extends Error {
	constructor(message) {
		super(message)
		this.statusCodes = StatusCodes.NOT_FOUND
	}
}

class UnauthenticaterdError extends Error {
	constructor(message) {
		super(message)
		this.statusCodes = StatusCodes.UNAUTHORIZED
	}
}

class BadRequestError extends Error {
	constructor(message) {
		super(message)
		this.statusCodes = StatusCodes.BAD_REQUEST
	}
}

module.exports = {
	NotFoundError,
	UnauthenticaterdError,
	BadRequestError,
}
