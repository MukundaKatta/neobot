'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';
import { Mic, MicOff, Send, Volume2, Bot, User } from 'lucide-react';

const botResponses: Record<string, string> = {
  'hello': 'Hi there! How can I help you today?',
  'weather': 'It looks like a sunny day! Currently 72°F with clear skies.',
  'lights': 'I can control the lights for you. Which room would you like?',
  'music': 'I can play some music! What genre are you in the mood for?',
  'schedule': 'Your next scheduled task is the Evening Security Check at 10:00 PM.',
  'status': 'All systems are running smoothly. Battery at 92%, all sensors operational.',
};

export default function VoiceInteraction() {
  const { voiceMessages, addVoiceMessage } = useStore();
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    addVoiceMessage({ role: 'user', text: input });
    const key = Object.keys(botResponses).find((k) => input.toLowerCase().includes(k));
    setTimeout(() => {
      addVoiceMessage({ role: 'bot', text: key ? botResponses[key] : "I understand! Let me look into that for you. Is there anything specific you'd like me to do?" });
    }, 500);
    setInput('');
  };

  return (
    <div className="space-y-6">
      <div><h2 className="text-xl font-bold">Voice Interaction</h2><p className="text-sm text-gray-400">Talk to NeoBot naturally</p></div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-gray-900/50 border border-gray-800 rounded-xl flex flex-col" style={{ height: '500px' }}>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {voiceMessages.length === 0 && (
              <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                Say &quot;Hello&quot; to start a conversation!
              </div>
            )}
            {voiceMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-2 max-w-md ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600/20' : 'bg-neo-600/20'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-blue-400" /> : <Bot size={14} className="text-neo-400" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600/20 text-blue-100' : 'bg-gray-800/50 text-gray-200'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsListening(!isListening)}
                className={`p-3 rounded-full ${isListening ? 'bg-red-600 animate-pulse' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <input
                type="text" value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type or speak to NeoBot..."
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-neo-500"
              />
              <button onClick={handleSend} className="p-3 bg-neo-600 hover:bg-neo-700 rounded-full">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-3">Quick Commands</h3>
            <div className="space-y-2">
              {['Turn on living room lights', 'What\'s the weather?', 'Play some music', 'Check my schedule', 'System status'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => { setInput(cmd); }}
                  className="w-full text-left px-3 py-2 bg-gray-800/30 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-gray-800/50"
                >
                  &quot;{cmd}&quot;
                </button>
              ))}
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-3">Voice Settings</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400">Volume</label>
                <input type="range" className="w-full accent-neo-500" defaultValue={70} />
              </div>
              <div>
                <label className="text-xs text-gray-400">Speech Rate</label>
                <input type="range" className="w-full accent-neo-500" defaultValue={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
