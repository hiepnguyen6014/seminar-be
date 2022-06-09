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
const api_response_1 = __importDefault(require("../../utils/api-response"));
const note_service_1 = require("./note.service");
/**
 * class NoteController*/
class NoteController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield (0, note_service_1.getNotes)();
            res.json(api_response_1.default.success(notes));
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content } = req.body;
            const result = yield (0, note_service_1.saveNote)(content);
            res.json(api_response_1.default.success(result));
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { result } = yield (0, note_service_1.deleteNote)(id);
            res.json(api_response_1.default.success(result));
        });
    }
}
exports.default = new NoteController();
