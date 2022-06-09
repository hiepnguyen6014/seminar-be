import { Response, Router, Request } from 'express'

import NoteController from './note.controller'

const router = Router()

router.delete('/:id', NoteController.remove)
router.post('/', NoteController.store)
router.get('/', NoteController.index)

export default router
