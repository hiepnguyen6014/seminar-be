import { Response, Request } from 'express'

import ApiResponse from '../../utils/api-response'
import { getNotes, saveNote, deleteNote } from './note.service'

/**
 * class NoteController*/
class NoteController {
	async index(req: Request, res: Response) {
		const notes = await getNotes()

		res.json(ApiResponse.success(notes))
	}

	async store(req: Request, res: Response) {
		const { content } = req.body

		const result = await saveNote(content)

		res.json(ApiResponse.success(result))
	}

	async remove(req: Request, res: Response) {
		const { id } = req.params

		const { result } = await deleteNote(id)

		res.json(ApiResponse.success(result))
	}
}

export default new NoteController()
