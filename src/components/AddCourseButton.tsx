import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface AddCourseButtonProps {
  onAddCourse: (name: string, shortName: string, maxLeaves: number) => void;
  isDark: boolean;
}

export function AddCourseButton({ onAddCourse, isDark }: AddCourseButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [shortName, setShortName] = useState('');
  const [maxLeaves, setMaxLeaves] = useState('10');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (courseName.trim() && maxLeaves) {
      onAddCourse(courseName.trim(), shortName.trim(), parseInt(maxLeaves));
      setCourseName('');
      setShortName('');
      setMaxLeaves('10');
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(true)}
          className={`rounded-xl shadow-md px-5 py-2.5 flex items-center gap-2 transition-all ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-white hover:bg-gray-50 text-gray-800'
          }`}
        >
          <Plus size={18} />
          <span>Add Course</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl shadow-md p-6 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={isDark ? 'text-white' : 'text-gray-800'}>New Course</h3>
        <button
          onClick={() => {
            setIsOpen(false);
            setCourseName('');
            setShortName('');
            setMaxLeaves('10');
          }}
          className={`p-1 rounded-lg transition-colors ${
            isDark 
              ? 'hover:bg-gray-700 text-gray-400' 
              : 'hover:bg-gray-100 text-gray-500'
          }`}
        >
          <X size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className={`block text-sm mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Course Name *
          </label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="e.g., Indian Economy and Marketing"
            autoFocus
            required
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#e50914] ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Short Name <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
            placeholder="e.g., FSAFA"
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#e50914] ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Maximum Leaves Permitted *
          </label>
          <input
            type="number"
            value={maxLeaves}
            onChange={(e) => setMaxLeaves(e.target.value)}
            placeholder="10"
            min="1"
            required
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#e50914] ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setCourseName('');
              setShortName('');
              setMaxLeaves('10');
            }}
            className={`flex-1 px-4 py-2.5 rounded-xl transition-colors ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-[#e50914] hover:bg-[#b8070f] text-white px-4 py-2.5 rounded-xl transition-colors"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
}