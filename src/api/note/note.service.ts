import Note from './Model/Note'

export const getNotes = async () => {
	return await Note.find()
}

export const saveNote = async (content: string) => {
	return await Note.create({ content })
}

export const deleteNote = async (id: string) => {
	return await Note.findByIdAndDelete(id)
}
