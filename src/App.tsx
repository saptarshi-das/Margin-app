import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { CourseList } from './components/CourseList';
import { AddCourseButton } from './components/AddCourseButton';
import { Dashboard } from './components/Dashboard';
import { PWAPrompt } from './components/PWAPrompt';

export interface Course {
  id: string;
  name: string;
  shortName?: string;
  leaves: number;
  maxLeaves: number;
}

export default function App() {
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('courses');
    return saved ? JSON.parse(saved) : [];
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered:', registration);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    }
  }, []);

  const addCourse = (name: string, shortName: string, maxLeaves: number) => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name,
      shortName: shortName.trim() || undefined,
      leaves: 0,
      maxLeaves,
    };
    setCourses([...courses, newCourse]);
  };

  const updateLeaves = (id: string, delta: number) => {
    setCourses(courses.map(course => 
      course.id === id 
        ? { ...course, leaves: Math.max(0, course.leaves + delta) }
        : course
    ));
  };

  const deleteCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className={`min-h-screen transition-colors ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Mobile-optimized container */}
      <div className="max-w-2xl mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 backdrop-blur-lg bg-white/10 px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className={`text-xl ${isDark ? 'text-white' : 'text-gray-800'}`}>
              <b>Margin</b>
            </h1>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Maximise your Leaves
            </p>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-full transition-all active:scale-95 ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                : 'bg-white hover:bg-gray-100 text-gray-700'
            } shadow-md`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 space-y-4 pb-6">
          {/* PWA Install Prompt */}
          <PWAPrompt isDark={isDark} />

          {/* Dashboard */}
          <Dashboard courses={courses} isDark={isDark} />

          {/* Add Course Button */}
          <AddCourseButton onAddCourse={addCourse} isDark={isDark} />

          {/* Course List */}
          <CourseList 
            courses={courses} 
            onUpdateLeaves={updateLeaves}
            onDeleteCourse={deleteCourse}
            isDark={isDark}
          />
        </main>
      </div>
    </div>
  );
}