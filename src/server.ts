import 'dotenv/config';
import express from 'express';
import cors from 'cors'

app.use(cors()) // libera geral, ok pra lab
app.use(express.json())

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

// importa as funções do controller
import { getAllCourses, getCourseById, createCourse } from './controllers/courseController';

app.get('/api/courses', getAllCourses);
app.get('/api/courses/:id', getCourseById);
app.post('/api/courses', createCourse);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});