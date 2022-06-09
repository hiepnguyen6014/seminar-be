import { Application } from 'express'

import expressLoader from './express'
import mongooseLoader from './mongoose'

const loader = async (app: Application) => {
	mongooseLoader()

	await expressLoader(app)
}

export default loader
