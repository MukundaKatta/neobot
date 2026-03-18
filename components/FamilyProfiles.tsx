'use client';

import { useState } from 'react';
import { useStore, FamilyProfile } from '@/lib/store';
import { Users, Plus, Shield, User, Baby, UserCheck } from 'lucide-react';

const roleConfig: Record<string, { color: string; icon: any }> = {
  admin: { color: 'text-neo-400', icon: Shield },
  adult: { color: 'text-blue-400', icon: User },
  child: { color: 'text-green-400', icon: Baby },
  guest: { color: 'text-gray-400', icon: UserCheck },
};

export default function FamilyProfiles() {
  const { profiles, setProfiles } = useStore();
  const [selected, setSelected] = useState<FamilyProfile | null>(profiles[0] || null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-xl font-bold">Family Profiles</h2><p className="text-sm text-gray-400">Manage household members and permissions</p></div>
        <button className="flex items-center gap-2 px-4 py-2 bg-neo-600 hover:bg-neo-700 rounded-lg text-sm"><Plus size={16} /> Add Member</button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {profiles.map((profile) => {
          const config = roleConfig[profile.role];
          const Icon = config.icon;
          return (
            <button key={profile.id} onClick={() => setSelected(profile)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selected?.id === profile.id ? 'bg-neo-600/20 border-neo-600/30' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
              }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-neo-600/20 rounded-full flex items-center justify-center text-xl font-bold text-neo-400">
                  {profile.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{profile.name}</h3>
                  <div className="flex items-center gap-1">
                    <Icon size={12} className={config.color} />
                    <span className={`text-xs capitalize ${config.color}`}>{profile.role}</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4">{selected.name}&apos;s Preferences</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(selected.preferences).map(([key, value]) => (
              <div key={key} className="bg-gray-800/30 rounded-lg p-3">
                <span className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <p className="text-sm font-medium mt-1">{String(value)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Permissions</h4>
            <div className="grid grid-cols-3 gap-2">
              {['Full Control', 'View Cameras', 'Modify Schedule', 'Install Skills', 'Smart Home Control', 'Voice Commands'].map((perm) => {
                const allowed = selected.role === 'admin' || (selected.role === 'adult' && perm !== 'Full Control') || (selected.role === 'child' && perm === 'Voice Commands');
                return (
                  <div key={perm} className={`flex items-center gap-2 p-2 rounded text-xs ${allowed ? 'text-green-400 bg-green-500/10' : 'text-gray-500 bg-gray-800/30'}`}>
                    <div className={`w-2 h-2 rounded-full ${allowed ? 'bg-green-500' : 'bg-gray-600'}`} />
                    {perm}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
