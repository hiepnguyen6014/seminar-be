"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../utils/logger"));
const MONGO_URI = process.env.MONGO_URI || 'localhost';
// Log error and exit app if mongodb connection fail
const exitProcessWhenError = (error) => {
    logger_1.default.error(`Connection error: ${error}`);
    // Stop process without app crash
    process.exitCode = 1;
};
const mongooseLoader = () => {
    mongoose_1.default.connect(MONGO_URI);
    mongoose_1.default.connection
        .once('open', () => logger_1.default.info('MongoDB connected'))
        .on('error', (err) => exitProcessWhenError(err));
};
exports.default = mongooseLoader;
