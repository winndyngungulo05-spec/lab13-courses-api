"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 5001;
// importa as funções do controller
const courseController_1 = require("./controllers/courseController");
app.get('/api/courses', courseController_1.getAllCourses);
app.get('/api/courses/:id', courseController_1.getCourseById);
app.post('/api/courses', courseController_1.createCourse);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
