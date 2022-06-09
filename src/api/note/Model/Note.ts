import mongoose from 'mongoose'

const Note = new mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export default mongoose.model('Notes', Note)
