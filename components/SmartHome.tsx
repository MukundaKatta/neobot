'use client';

import { useStore } from '@/lib/store';
import { Lightbulb, Thermometer, Speaker, Camera, Lock, Tv, ToggleLeft, ToggleRight } from 'lucide-react';

const icons: Record<string, any> = { light: Lightbulb, thermostat: Thermometer, speaker: Speaker, camera: Camera, lock: Lock, appliance: Tv };

export default function SmartHome() {
  const { devices, rooms, setDevices } = useStore();

  const toggleDevice = (id: string) => {
    setDevices(devices.map((d) => d.id === id ? { ...d, status: d.status === 'on' ? 'off' : 'on' } : d));
  };

  return (
    <div className="space-y-6">
      <div><h2 className="text-xl font-bold">Smart Home Integration</h2><p className="text-sm text-gray-400">Control all connected devices</p></div>

      <div className="grid grid-cols-3 gap-4">
        {devices.map((dev) => {
          const Icon = icons[dev.type] || Tv;
          const room = rooms.find((r) => r.id === dev.roomId);
          return (
            <div key={dev.id} className={`bg-gray-900/50 border rounded-xl p-4 transition-all ${dev.status === 'on' ? 'border-neo-500/30' : 'border-gray-800'}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${dev.status === 'on' ? 'bg-neo-600/20' : 'bg-gray-800/50'}`}>
                    <Icon size={18} className={dev.status === 'on' ? 'text-neo-400' : 'text-gray-500'} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{dev.name}</p>
                    <p className="text-xs text-gray-500">{room?.name}</p>
                  </div>
                </div>
                <button onClick={() => toggleDevice(dev.id)}>
                  {dev.status === 'on' ? <ToggleRight size={28} className="text-neo-400" /> : <ToggleLeft size={28} className="text-gray-600" />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${dev.status === 'on' ? 'bg-neo-500' : dev.status === 'standby' ? 'bg-yellow-500' : 'bg-gray-500'}`} />
                <span className="text-xs text-gray-400 capitalize">{dev.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
