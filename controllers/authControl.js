const User = require("../models/userModel")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticaterdError } = require("../errors/customErrors")
const register = async (req, res) => {
	const check = await User.checkUserNameExistance(req.body.username)
	if (check) {// checking existence of username
		return res.status(StatusCodes.BAD_REQUEST).json({ msg: "this user is already exist" })
	}
	const user = await User.create(req.body)
	const token = user.createJWT()
	res.status(StatusCodes.CREATED).json({ user: { username: req.body.username }, token })
}

const login = async (req, res) => {
	const { username, password } = req.body
	if (!username || !password) {
		throw new BadRequestError("please provide a username and password")
	}
	const user = await User.findOne({ username: username })
	if (!user || !user.comparePassword(password)) {
		throw new UnauthenticaterdError("invalid credentials")
	}
	const token = user.createJWT()
	res.status(StatusCodes.OK).json({ user: { username: username }, token })
}

module.exports = {
	register,
	login,
}
