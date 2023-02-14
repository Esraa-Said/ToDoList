const jwt = require("jsonwebtoken")
const { UnauthenticaterdError } = require("../errors/customErrors")
const authentication = async (req, res, next) => {
	const authHeader = req.headers["authorization"]
	const token = authHeader && authHeader.startsWith("Bearer") && authHeader.split(" ")[1]
	if (!token) {
		throw new UnauthenticaterdError("authentication failed")
	}
	try {
		const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY)
		req.user = { userId: payload.userId, name: payload.name }
	} catch (err) {
		throw new UnauthenticaterdError("authentication failed")
	}
}

module.exports = authentication
