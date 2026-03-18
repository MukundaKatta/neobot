'use client';

import { useState } from 'react';
import { Bot, Wifi, Home, User, CheckCircle } from 'lucide-react';

const steps = [
  { id: 1, title: 'Welcome', icon: Bot, description: 'Welcome to NeoBot! Let\'s set up your companion robot.' },
  { id: 2, title: 'WiFi Setup', icon: Wifi, description: 'Connect NeoBot to your home network.' },
  { id: 3, title: 'Home Map', icon: Home, description: 'Map your home so NeoBot can navigate.' },
  { id: 4, title: 'Profile', icon: User, description: 'Create your family profile.' },
  { id: 5, title: 'Complete', icon: CheckCircle, description: 'Setup complete! NeoBot is ready.' },
];

export default function SetupWizard({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1);
  const current = steps.find((s) => s.id === step)!;
  const Icon = current.icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0a14]">
      <div className="w-full max-w-lg">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s) => (
            <div key={s.id} className={`w-10 h-1 rounded-full ${s.id <= step ? 'bg-neo-500' : 'bg-gray-800'}`} />
          ))}
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-neo-600/20 rounded-2xl flex items-center justify-center">
            <Icon size={32} className="text-neo-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{current.title}</h2>
          <p className="text-gray-400 mb-8">{current.description}</p>

          {step === 2 && (
            <div className="space-y-3 mb-6 text-left">
              {['HomeNetwork_5G', 'NeighborWiFi', 'IoT_Network'].map((net) => (
                <button key={net} className="w-full flex items-center gap-3 p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-sm hover:border-neo-500/50">
                  <Wifi size={16} className="text-neo-400" />{net}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="bg-gray-800/30 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-3 gap-2 text-xs">
                {['Living Room', 'Kitchen', 'Bedroom', 'Office', 'Bathroom', 'Hallway'].map((room) => (
                  <div key={room} className="p-3 bg-gray-800/50 rounded border border-gray-700 text-gray-400">{room}</div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">Auto-detected rooms from initial scan</p>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 mb-6 text-left">
              <input placeholder="Your Name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm" />
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm">
                <option>Admin</option><option>Adult</option><option>Child</option>
              </select>
            </div>
          )}

          <div className="flex gap-3">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="flex-1 px-6 py-3 border border-gray-700 rounded-lg text-sm hover:bg-gray-800">Back</button>
            )}
            <button
              onClick={() => step < 5 ? setStep(step + 1) : onComplete()}
              className="flex-1 px-6 py-3 bg-neo-600 hover:bg-neo-700 rounded-lg text-sm font-medium"
            >
              {step < 5 ? 'Continue' : 'Get Started'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
