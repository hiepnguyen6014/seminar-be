"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const note_route_1 = __importDefault(require("../api/note/note.route"));
const api_response_1 = __importDefault(require("../utils/api-response"));
const expressLoader = (app) => __awaiter(void 0, void 0, void 0, function* () {
    // Middlewares
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)('tiny'));
    // Routes
    app.use('/api/note', note_route_1.default);
    // Handle 404
    // eslint-disable-next-line no-unused-vars
    app.use((req, res, next) => {
        res.json(api_response_1.default.error(404, 'not found'));
    });
    // Handle 500
    app.use((error, req, res, next) => {
        res.json(api_response_1.default.error(500, error.toString()));
    });
});
exports.default = expressLoader;
