import mongoose from 'mongoose'
import dotenv from 'dotenv'

import log from './logger'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'MONGODB_URI'

const connect = async () => {
	try {
		await mongoose.connect(MONGODB_URI)
		log.info('Connected database')
	} catch (error) {
		log.error("Can't connect database")
	}
}

export default connect
