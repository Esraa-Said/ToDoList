const { StatusCodes } = require("http-status-codes")

const middlewareErrorhandler = (err, req, res, next) => {
	const messege = err.message
	if (messege) res.status(200).json({ msg: err.message })
	else res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "there is a server error try again later" })
}

module.exports = middlewareErrorhandler
