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
        deadLine:{
            type:new Date()
        }
	},
	{ timestamps: true }
)




module.exports = mongoose.model("Task", taskSchema)
