const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "please provide a title"],
			minLength: 1,
		},
		priority: {
			type: String,
			enum: ["low", "middle", "high"],
			default: "middle",
		},
		completed: {
			type: Boolean,
			default: false,
		},
		deadLine: {
			type: Date,
			default: Date.now(),
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: [true, "please provide a user"],
		},
	},
	{ timestamps: true }
)




module.exports = mongoose.model("Task", taskSchema)
