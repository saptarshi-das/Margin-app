import { Course } from '../App';

interface IOSWidgetProps {
  courses: Course[];
}

export function IOSWidget({ courses }: IOSWidgetProps) {
  const topCourses = courses.slice(0, 5);
  const totalLeaves = courses.reduce((sum, course) => sum + course.leaves, 0);

  return (
    <div className="inline-block">
      {/* iOS Widget Container - Medium Size (329x155 points) */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl p-3 w-[329px] h-[155px] relative overflow-hidden">
        {/* Widget Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-95"></div>
        
        {/* Widget Content */}
        <div className="relative h-full flex flex-col p-[5px]">
          {/* Course List */}
          <div className="flex-1 flex flex-col gap-1">
            {topCourses.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-white/60 text-xs">No courses added</p>
              </div>
            ) : (
              topCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex-1 flex items-center justify-between bg-white/15 backdrop-blur-sm rounded-md px-2.5"
                >
                  <span className="text-white text-xs truncate flex-1 pr-2">
                    {course.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm min-w-[1.25rem] text-right">
                      {course.leaves}
                    </span>
                    <span className="text-white/70 text-[9px]">
                      {course.leaves === 1 ? 'leave' : 'leaves'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer - Show if more courses */}
          {courses.length > 5 && (
            <div className="mt-0.5 text-center">
              <p className="text-white/60 text-[8px]">
                +{courses.length - 5} more {courses.length - 5 === 1 ? 'course' : 'courses'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Label */}
      <p className="text-center mt-4 text-sm text-gray-600">
        Medium iOS Widget (329x155)
      </p>
    </div>
  );
}