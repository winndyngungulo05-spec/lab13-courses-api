export interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export type CourseCreate = Omit<Course, 'id'>;