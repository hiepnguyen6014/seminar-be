import express from 'express'
import http from 'http'

import loader from './loader'
import logger from './utils/logger'

const PORT = process.env.PORT || 5000

let server

async function initServer() {
	const app = express()
	server = http.createServer(app)

	await loader(app)

	server.listen(PORT, () => {
		logger.info(`Server listening at: http://localhost:${PORT}`)
	})
}

initServer()

export default server
