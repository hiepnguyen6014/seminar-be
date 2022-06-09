import { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express'

require('dotenv').config()

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import noteRoute from '../api/note/note.route'
import apiResponse from '../utils/api-response'

const expressLoader = async (app: Application) => {
	// Middlewares
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	app.use(cors())
	app.use(morgan('tiny'))

	// Routes
	app.use('/api/note', noteRoute)

	// Handle 404
	// eslint-disable-next-line no-unused-vars
	app.use((req: Request, res: Response, next: NextFunction) => {
		res.json(apiResponse.error(404, 'not found'))
	})

	// Handle 500
	app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
		res.json(apiResponse.error(500, error.toString()))
	})
}

export default expressLoader
