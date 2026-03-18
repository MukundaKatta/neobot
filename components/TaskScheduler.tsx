'use client';

import { useStore } from '@/lib/store';
import { Calendar, Clock, ToggleLeft, ToggleRight, Plus } from 'lucide-react';

export default function TaskScheduler() {
  const { tasks, toggleTask } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-xl font-bold">Task Scheduler</h2><p className="text-sm text-gray-400">Automate NeoBot&apos;s daily routines</p></div>
        <button className="flex items-center gap-2 px-4 py-2 bg-neo-600 hover:bg-neo-700 rounded-lg text-sm"><Plus size={16} /> Add Task</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Tasks</p><p className="text-3xl font-bold">{tasks.length}</p>
        </div>
        <div className="bg-gray-900/50 border border-neo-500/20 rounded-xl p-4">
          <p className="text-sm text-neo-400">Active</p><p className="text-3xl font-bold text-neo-400">{tasks.filter((t) => t.enabled).length}</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Disabled</p><p className="text-3xl font-bold text-gray-500">{tasks.filter((t) => !t.enabled).length}</p>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className={`bg-gray-900/50 border rounded-xl p-4 transition-all ${task.enabled ? 'border-gray-800' : 'border-gray-800 opacity-50'}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neo-600/20 rounded-lg">
                  <Calendar size={18} className="text-neo-400" />
                </div>
                <div>
                  <h3 className="font-semibold">{task.name}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{task.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Clock size={12} /> {task.schedule}</span>
                    {task.lastRun && <span>Last: {new Date(task.lastRun).toLocaleString()}</span>}
                    <span>Next: {new Date(task.nextRun).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => toggleTask(task.id)} className="mt-1">
                {task.enabled ? <ToggleRight size={28} className="text-neo-400" /> : <ToggleLeft size={28} className="text-gray-600" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
