'use client';

import { useStore } from '@/lib/store';
import { Home, Lightbulb, Thermometer, Speaker, Camera, Lock, Tv } from 'lucide-react';

const roomColors: Record<string, string> = {
  living: '#9c27b0', kitchen: '#e91e63', bedroom: '#3f51b5', office: '#00bcd4', bathroom: '#009688', garage: '#795548',
};

const deviceIcons: Record<string, any> = {
  light: Lightbulb, thermostat: Thermometer, speaker: Speaker, camera: Camera, lock: Lock, appliance: Tv,
};

export default function HomeMap() {
  const { rooms, devices } = useStore();
  const scale = 60;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Home Map</h2>
        <p className="text-sm text-gray-400">Interactive floorplan of your home</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Rooms</p>
          <p className="text-3xl font-bold text-neo-400">{rooms.length}</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Devices</p>
          <p className="text-3xl font-bold text-blue-400">{devices.length}</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Active</p>
          <p className="text-3xl font-bold text-green-400">{devices.filter((d) => d.status === 'on').length}</p>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <div className="relative" style={{ height: '450px' }}>
          <svg className="w-full h-full" viewBox="-0.5 -0.5 10 8">
            {rooms.map((room) => {
              const color = roomColors[room.type] || '#888';
              const roomDevices = devices.filter((d) => d.roomId === room.id);
              return (
                <g key={room.id}>
                  <rect
                    x={room.x} y={room.y} width={room.w} height={room.h}
                    fill={color} fillOpacity={0.1} stroke={color} strokeWidth={0.05}
                    rx={0.1} ry={0.1}
                  />
                  <text x={room.x + room.w / 2} y={room.y + 0.5} textAnchor="middle" fill={color} fontSize="0.35" fontWeight="bold">
                    {room.name}
                  </text>
                  {roomDevices.map((dev, i) => {
                    const dx = room.x + 0.5 + (i % 3) * 1.2;
                    const dy = room.y + 1 + Math.floor(i / 3) * 0.8;
                    return (
                      <g key={dev.id}>
                        <circle cx={dx} cy={dy} r={0.2}
                          fill={dev.status === 'on' ? color : '#333'} fillOpacity={0.3}
                          stroke={dev.status === 'on' ? color : '#555'} strokeWidth={0.02}
                        />
                        <text x={dx} y={dy + 0.45} textAnchor="middle" fill="#999" fontSize="0.18">
                          {dev.name.substring(0, 8)}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
            {/* Robot position */}
            <circle cx={2.5} cy={2} r={0.25} fill="#9c27b0" opacity={0.8} />
            <circle cx={2.5} cy={2} r={0.35} fill="none" stroke="#9c27b0" strokeWidth={0.03} opacity={0.4} />
            <text x={2.5} y={2.08} textAnchor="middle" fill="white" fontSize="0.2" fontWeight="bold">N</text>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {rooms.map((room) => {
          const roomDevices = devices.filter((d) => d.roomId === room.id);
          const activeCount = roomDevices.filter((d) => d.status === 'on').length;
          return (
            <div key={room.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Home size={14} className="text-neo-400" />
                <span className="text-sm font-medium">{room.name}</span>
              </div>
              <div className="text-xs text-gray-500">
                {roomDevices.length} devices &middot; {activeCount} active
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
