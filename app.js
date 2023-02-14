require("express-async-errors")
require("dotenv").config()
const express = require("express")
const app = express()
const authRouter = require("./routes/authRoutes")
const tasksRouter = require("./routes/tasksRoutes")
const connectDB = require("./dataBase/connectDB")
const notFoundRoute = require("./middleware/notFoundRoute")
const middlewareErrorhandler = require("./middleware/errorHandler")
const authentication = require("./middleware/authentication")

app.use(express.json())
app.use(express.static("./puplic"))
app.use("/api/users", authRouter)
app.use("/api/tasks", authentication, tasksRouter)

//error middleware handling
app.use(middlewareErrorhandler)
app.use(notFoundRoute)

const start = async (req, res) => {
	try {
		// connect db
		await connectDB(process.env.MONGO_URI)
		app.listen(process.env.PORT, () => console.log(`server is listening on ${process.env.PORT}......`))
	} catch (err) {
		console.log(err)
	}
}

start()
