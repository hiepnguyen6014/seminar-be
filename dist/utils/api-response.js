"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    success(data) {
        return {
            status: 'success',
            data,
        };
    }
    error(code, message) {
        return {
            status: 'error',
            code,
            message,
        };
    }
    fail(data) {
        return {
            status: 'fail',
            data,
        };
    }
}
exports.default = new ApiResponse();
