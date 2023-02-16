require("dotenv").config()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { BadRequestError } = require("../errors/customErrors")
const userSchma = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "please provide a name"],
		minLength: 3,
	},
	email: {
		type: String,
		required: [true, "please provide a email"],
		match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "please provide valid email "],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "please provide a password"],
		minLength: 6,
	},
})

userSchma.statics.checkUserNameExistance = async function (username) {
	try {
		const user = await this.findOne({ username: username })
		return user ? true : false
	} catch (err) {
		throw new BadRequestError("bad request")
	}
}
userSchma.pre("save", async function () {
	this.password = await bcrypt.hash(this.password, 10)
})

userSchma.methods.createJWT = function () {
	return jwt.sign({ userId: this._id, name: this.username }, process.env.SECRET_JWT_KEY, {
		expiresIn: process.env.JWT_LIFETIME,
	})
}

userSchma.methods.comparePassword = function (candidatePassword) {
	return bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("User", userSchma)
