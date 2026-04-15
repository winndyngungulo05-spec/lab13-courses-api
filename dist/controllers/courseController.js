"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = exports.getCourseById = exports.getAllCourses = void 0;
const courses_1 = require("../data/courses");
const getAllCourses = (req, res) => {
    res.json(courses_1.courses);
};
exports.getAllCourses = getAllCourses;
const getCourseById = (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses_1.courses.find(c => c.id === id);
    if (!course) {
        res.status(404).json({ message: "Curso não encontrado" });
        return;
    }
    res.json(course);
};
exports.getCourseById = getCourseById;
const createCourse = (req, res) => {
    const { title, instructor, duration, level } = req.body;
    if (!title || !instructor || !duration || !level) {
        res.status(400).json({ message: "Campos faltando" });
        return;
    }
    const newCourse = {
        id: courses_1.courses.length + 1,
        title,
        instructor,
        duration,
        level
    };
    courses_1.courses.push(newCourse);
    res.status(201).json(newCourse);
};
exports.createCourse = createCourse;
