import { Course } from '../App';
import { Star } from 'lucide-react';

interface DashboardProps {
  courses: Course[];
  isDark: boolean;
}

export function Dashboard({ courses, isDark }: DashboardProps) {
  const totalCourses = courses.length;
  const totalLeaves = courses.reduce((sum, course) => sum + course.leaves, 0);
  const avgLeaves = totalCourses > 0 ? (totalLeaves / totalCourses).toFixed(1) : '0';
  const mostLeaves = courses.length > 0
    ? courses.reduce((max, course) => course.leaves > max.leaves ? course : max, courses[0])
    : null;

  return (
    <div className={`rounded-2xl p-5 ${isDark
        ? 'bg-white shadow-lg'
        : 'bg-gradient-to-br from-gray-900 to-black'
      } shadow-lg`}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className={`text-lg ${isDark ? 'text-gray-900' : 'text-white'}`}><b>Dashboard</b></h2>
          <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-white/70'}`}>Your attendance overview</p>
        </div>
        <div className={`px-3 py-1.5 rounded-full backdrop-blur-md border flex items-center gap-2 ${isDark
            ? 'bg-white/20 border-white/30'
            : 'bg-white/10 border-white/20'
          }`}>
          <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-white/70'}`}>Total Courses:</span>
          <span className={`text-sm ${isDark ? 'text-gray-900' : 'text-white'}`}>{totalCourses}</span>
        </div>
      </div>

      {/* Course Overview */}
      {courses.length > 0 && (
        <div className={`rounded-xl p-4 mb-4 backdrop-blur-md border shadow-lg ${isDark
            ? 'bg-white/20 border-white/30 shadow-black/5'
            : 'bg-white/10 border-white/20 shadow-black/10'
          }`}>
          <p className={`text-xs mb-3 ${isDark ? 'text-gray-600' : 'text-white/70'}`}>Recent Courses</p>
          <div className="space-y-3">
            {courses.map((course) => {
              const isOverLimit = course.leaves > course.maxLeaves;
              return (
                <div key={course.id} className={`flex items-center gap-3 p-2 rounded-lg ${isOverLimit ? 'bg-red-500/20' : ''
                  }`}>
                  {/* Course name */}
                  <span className={`text-sm min-w-[60px] ${isOverLimit
                      ? 'text-red-600 font-semibold'
                      : isDark ? 'text-gray-900' : 'text-white'
                    }`}>
                    {course.shortName || course.name}
                  </span>

                  {/* Star icon for over limit */}
                  {isOverLimit && (
                    <Star size={14} className="text-red-600 fill-red-600" />
                  )}

                  {/* Visual bars */}
                  <div className="flex gap-1 flex-1">
                    {Array.from({ length: course.maxLeaves }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-6 rounded-full flex-1 ${index < course.leaves
                            ? 'bg-red-500'
                            : isDark
                              ? 'bg-gray-300'
                              : 'bg-white/40'
                          }`}
                      />
                    ))}
                  </div>

                  {/* Leave count */}
                  <span className={`text-sm min-w-[20px] text-right ${isOverLimit
                      ? 'text-red-600 font-semibold'
                      : isDark ? 'text-gray-900' : 'text-white'
                    }`}>
                    {course.leaves}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`rounded-xl p-3 backdrop-blur-md border shadow-lg ${isDark
            ? 'bg-white/20 border-white/30 shadow-black/5'
            : 'bg-white/15 border-white/20 shadow-black/10'
          }`}>
          <p className={`text-xs mb-1 ${isDark ? 'text-gray-600' : 'text-white/70'}`}>Average</p>
          <p className={`text-2xl ${isDark ? 'text-gray-900' : 'text-white'}`}>{avgLeaves}</p>
        </div>
        <div className={`rounded-xl p-3 backdrop-blur-md border shadow-lg ${isDark
            ? 'bg-white/20 border-white/30 shadow-black/5'
            : 'bg-white/15 border-white/20 shadow-black/10'
          }`}>
          <p className={`text-xs mb-1 ${isDark ? 'text-gray-600' : 'text-white/70'}`}>Highest</p>
          <p className={`text-2xl ${isDark ? 'text-gray-900' : 'text-white'}`}>{mostLeaves?.leaves || 0}</p>
        </div>
      </div>
    </div>
  );
}