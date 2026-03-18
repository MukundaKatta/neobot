'use client';

import { useStore } from '@/lib/store';
import { Smile, Volume2, Gauge, Globe, Sparkles } from 'lucide-react';

export default function PersonalityConfig() {
  const { personality, setPersonality } = useStore();

  return (
    <div className="space-y-6">
      <div><h2 className="text-xl font-bold">Personality Settings</h2><p className="text-sm text-gray-400">Customize NeoBot&apos;s personality and behavior</p></div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Smile size={18} className="text-neo-400" /> Voice Tone</h3>
            <div className="grid grid-cols-2 gap-3">
              {(['formal', 'casual', 'playful', 'professional'] as const).map((tone) => (
                <button key={tone} onClick={() => setPersonality({ ...personality, voiceTone: tone })}
                  className={`p-3 rounded-lg border text-sm capitalize ${
                    personality.voiceTone === tone ? 'bg-neo-600/20 border-neo-600/30 text-neo-400' : 'bg-gray-800/30 border-gray-700 text-gray-400'
                  }`}>{tone}</button>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Volume2 size={18} className="text-neo-400" /> Volume</h3>
            <input type="range" min={0} max={100} value={personality.volume}
              onChange={(e) => setPersonality({ ...personality, volume: parseInt(e.target.value) })}
              className="w-full accent-neo-500" />
            <div className="flex justify-between text-xs text-gray-500 mt-1"><span>Quiet</span><span>{personality.volume}%</span><span>Loud</span></div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Gauge size={18} className="text-neo-400" /> Speech Speed</h3>
            <input type="range" min={0.5} max={2} step={0.1} value={personality.speed}
              onChange={(e) => setPersonality({ ...personality, speed: parseFloat(e.target.value) })}
              className="w-full accent-neo-500" />
            <div className="flex justify-between text-xs text-gray-500 mt-1"><span>Slow</span><span>{personality.speed}x</span><span>Fast</span></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Globe size={18} className="text-neo-400" /> Language</h3>
            <select value={personality.language} onChange={(e) => setPersonality({ ...personality, language: e.target.value })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm">
              {['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese', 'Korean'].map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Sparkles size={18} className="text-neo-400" /> Humor</h3>
            <button onClick={() => setPersonality({ ...personality, humor: !personality.humor })}
              className={`w-full p-3 rounded-lg border text-sm ${
                personality.humor ? 'bg-neo-600/20 border-neo-600/30 text-neo-400' : 'bg-gray-800/30 border-gray-700 text-gray-400'
              }`}>
              {personality.humor ? 'Humor Enabled' : 'Humor Disabled'}
            </button>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Proactiveness</h3>
            <input type="range" min={0} max={100} value={personality.proactiveness}
              onChange={(e) => setPersonality({ ...personality, proactiveness: parseInt(e.target.value) })}
              className="w-full accent-neo-500" />
            <div className="flex justify-between text-xs text-gray-500 mt-1"><span>Reactive Only</span><span>{personality.proactiveness}%</span><span>Highly Proactive</span></div>
            <p className="text-xs text-gray-500 mt-2">Controls how often NeoBot offers suggestions unprompted.</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-3">Preview</h3>
            <div className="bg-gray-800/50 rounded-lg p-4 text-sm text-gray-300 italic">
              {personality.voiceTone === 'formal' && '"Good evening. Your scheduled tasks have been completed successfully."'}
              {personality.voiceTone === 'casual' && '"Hey! Everything\'s done for today. Want me to play some music?"'}
              {personality.voiceTone === 'playful' && '"Ta-da! All tasks complete! Shall we celebrate with your favorite playlist?"'}
              {personality.voiceTone === 'professional' && '"Status update: All scheduled tasks completed. Standing by for further instructions."'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
