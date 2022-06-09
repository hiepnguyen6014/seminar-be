import mongoose from 'mongoose'
import logger from '../utils/logger'

const MONGO_URI = process.env.MONGO_URI || 'localhost'

// Log error and exit app if mongodb connection fail
const exitProcessWhenError = (error: Error) => {
	logger.error(`Connection error: ${error}`)

	// Stop process without app crash
	process.exitCode = 1
}

const mongooseLoader = () => {
	mongoose.connect(MONGO_URI)

	mongoose.connection
		.once('open', () => logger.info('MongoDB connected'))
		.on('error', (err) => exitProcessWhenError(err))
}

export default mongooseLoader
