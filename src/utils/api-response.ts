class ApiResponse {
	success(data: object) {
		return {
			status: 'success',
			data,
		}
	}

	error(code: Number, message: String) {
		return {
			status: 'error',
			code,
			message,
		}
	}

	fail(data: object) {
		return {
			status: 'fail',
			data,
		}
	}
}

export default new ApiResponse()
