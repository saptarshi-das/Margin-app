import { Minus, Plus, Trash2 } from 'lucide-react';
import { Course } from '../App';
import { useState } from 'react';

interface CourseListProps {
  courses: Course[];
  onUpdateLeaves: (id: string, delta: number) => void;
  onDeleteCourse: (id: string) => void;
  isDark: boolean;
}

export function CourseList({ courses, onUpdateLeaves, onDeleteCourse, isDark }: CourseListProps) {
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    onDeleteCourse(id);
    setDeleteConfirm(null);
  };

  if (courses.length === 0) {
    return (
      <div className={`rounded-2xl shadow-md p-8 text-center ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>
          No courses added yet. Add your first course!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={`rounded-2xl shadow-md p-5 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h2 className={`mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>My Courses</h2>
        <div className="space-y-3">
          {courses.map((course) => {
            const isOverLimit = course.leaves > course.maxLeaves;
            return (
              <div
                key={course.id}
                className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                  isOverLimit
                    ? 'bg-red-500/90 hover:bg-red-600/90'
                    : isDark 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className={`break-words ${isOverLimit ? 'text-white' : isDark ? 'text-white' : 'text-gray-800'}`}>
                    {course.name}
                  </h3>
                  <p className={`text-sm ${isOverLimit ? 'text-white/90' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {course.leaves} {course.leaves === 1 ? 'leave' : 'leaves'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateLeaves(course.id, -1)}
                    disabled={course.leaves === 0}
                    className="p-2.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors active:scale-95"
                  >
                    <Minus size={18} />
                  </button>

                  <button
                    onClick={() => onUpdateLeaves(course.id, 1)}
                    className="p-2.5 rounded-lg bg-green-100 hover:bg-green-200 text-green-600 transition-colors active:scale-95"
                  >
                    <Plus size={18} />
                  </button>

                  <button
                    onClick={() => setDeleteConfirm(course.id)}
                    className={`p-2.5 rounded-lg transition-colors active:scale-95 ${
                      isDark 
                        ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                    }`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`rounded-2xl p-6 max-w-sm w-full shadow-xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Delete Course?
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Are you sure you want to delete this course? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className={`flex-1 py-2.5 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}