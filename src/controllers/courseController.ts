import { Request, Response } from 'express';
import { courses } from '../data/courses';
import { Course, CourseCreate } from '../types/Course';

export const getAllCourses = (req: Request, res: Response) => {
  res.json(courses);
};

export const getCourseById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    res.status(404).json({ message: "Curso não encontrado" });
    return;
  }
  res.json(course);
};

export const createCourse = (req: Request<{}, {}, CourseCreate>, res: Response) => {
  const { title, instructor, duration, level } = req.body;

  if (!title || !instructor || !duration || !level) {
    res.status(400).json({ message: "Campos faltando" });
    return;
  }

  const newCourse: Course = {
    id: courses.length + 1,
    title,
    instructor,
    duration,
    level
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
};