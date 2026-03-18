'use client';

import { useState } from 'react';
import { useStore, Skill } from '@/lib/store';
import { Store, Star, Download, Check, Search } from 'lucide-react';

const categoryColors: Record<string, string> = {
  household: 'text-orange-400 bg-orange-500/10', entertainment: 'text-pink-400 bg-pink-500/10',
  education: 'text-blue-400 bg-blue-500/10', health: 'text-green-400 bg-green-500/10', security: 'text-red-400 bg-red-500/10',
};

export default function SkillStore() {
  const { skills, toggleSkill } = useStore();
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('all');

  const filtered = skills.filter((s) =>
    (filterCat === 'all' || s.category === filterCat) && s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div><h2 className="text-xl font-bold">Skill Store</h2><p className="text-sm text-gray-400">Expand NeoBot&apos;s capabilities</p></div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input type="text" placeholder="Search skills..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-sm" />
        </div>
        <div className="flex gap-2">
          {['all', 'household', 'entertainment', 'education', 'health', 'security'].map((cat) => (
            <button key={cat} onClick={() => setFilterCat(cat)}
              className={`px-3 py-1.5 text-xs rounded-lg border capitalize ${
                filterCat === cat ? 'bg-neo-600/20 border-neo-600/30 text-neo-400' : 'bg-gray-900/50 border-gray-800 text-gray-400'
              }`}>{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((skill) => (
          <div key={skill.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${categoryColors[skill.category] || 'bg-gray-800/50'}`}>
                <Store size={20} />
              </div>
              {skill.installed && <Check size={16} className="text-neo-400" />}
            </div>
            <h3 className="font-semibold text-sm">{skill.name}</h3>
            <p className="text-xs text-gray-500 mt-1 mb-3">{skill.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs">{skill.rating}</span>
              </div>
              <button onClick={() => toggleSkill(skill.id)}
                className={`px-3 py-1 rounded text-xs ${
                  skill.installed ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-neo-600/20 text-neo-400 hover:bg-neo-600/30'
                }`}>
                {skill.installed ? 'Uninstall' : 'Install'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
