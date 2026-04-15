import { useState, useEffect } from 'react'
import './App.css'

type Course = {
  id: number
  title: string
  instructor: string
  duration: number
  level: string
}

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [courses, setCourses] = useState<Course[]>([])
  const [title, setTitle] = useState('')
  const [instructor, setInstructor] = useState('')
  const [duration, setDuration] = useState('')
  const [level, setLevel] = useState('Beginner')

  const fetchCourses = async () => {
    const res = await fetch(`${API_URL}/api/courses`)
    const data = await res.json()
    setCourses(data)
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch(`${API_URL}/api/courses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, instructor, duration: Number(duration), level })
    })
    setTitle(''); setInstructor(''); setDuration('')
    fetchCourses()
  }

  return (
    <div className="container">
      <h1>Course Manager</h1>
      
      <form onSubmit={handleAdd}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input placeholder="Instructor" value={instructor} onChange={e => setInstructor(e.target.value)} required />
        <input type="number" placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} required />
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <button type="submit">Add Course</button>
      </form>

      <table>
        <thead>
          <tr><th>ID</th><th>Title</th><th>Instructor</th><th>Duration</th><th>Level</th></tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td><td>{c.title}</td><td>{c.instructor}</td><td>{c.duration}h</td><td>{c.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App