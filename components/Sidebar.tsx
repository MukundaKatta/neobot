'use client';

import { useStore } from '@/lib/store';
import { Home, Calendar, Mic, Camera, Plug, Smile, Store, Wrench, Users, ChevronRight, Bot } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home Map', icon: Home },
  { id: 'tasks', label: 'Task Scheduler', icon: Calendar },
  { id: 'voice', label: 'Voice Interaction', icon: Mic },
  { id: 'camera', label: 'Camera View', icon: Camera },
  { id: 'smarthome', label: 'Smart Home', icon: Plug },
  { id: 'personality', label: 'Personality', icon: Smile },
  { id: 'skills', label: 'Skill Store', icon: Store },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'family', label: 'Family Profiles', icon: Users },
];

export default function Sidebar() {
  const { activeTab, setActiveTab } = useStore();
  return (
    <aside className="w-64 bg-gray-900/50 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neo-600 rounded-lg flex items-center justify-center"><Bot size={18} /></div>
          <span className="font-bold text-lg">NeoBot</span>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive ? 'bg-neo-600/20 text-neo-300 border border-neo-600/30' : 'text-gray-400 hover:bg-gray-800/50'
              }`}>
              <Icon size={18} /><span className="flex-1 text-left">{item.label}</span>
              {isActive && <ChevronRight size={14} />}
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-xs text-green-400">NeoBot Online</span>
        </div>
        <p className="text-xs text-gray-500">Battery: 92% | v2.1.0</p>
      </div>
    </aside>
  );
}
