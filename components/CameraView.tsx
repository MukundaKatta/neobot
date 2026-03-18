'use client';

import { useState } from 'react';
import { Camera, Maximize2, Grid, ZoomIn } from 'lucide-react';

export default function CameraView() {
  const [activeCamera, setActiveCamera] = useState('front');
  const cameras = [
    { id: 'front', name: 'Front Camera', resolution: '1080p', status: 'active' },
    { id: 'rear', name: 'Rear Camera', resolution: '720p', status: 'active' },
    { id: 'depth', name: 'Depth Sensor', resolution: '640x480', status: 'active' },
    { id: 'nav', name: 'Navigation Camera', resolution: '480p', status: 'standby' },
  ];

  return (
    <div className="space-y-6">
      <div><h2 className="text-xl font-bold">Camera View</h2><p className="text-sm text-gray-400">Live feeds from NeoBot&apos;s cameras</p></div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden" style={{ height: '400px' }}>
            <div className="relative w-full h-full bg-gray-800/50 flex items-center justify-center">
              <div className="text-center">
                <Camera size={48} className="mx-auto text-gray-600 mb-3" />
                <p className="text-gray-500">Live Camera Feed</p>
                <p className="text-xs text-gray-600 mt-1">{cameras.find((c) => c.id === activeCamera)?.name} - {cameras.find((c) => c.id === activeCamera)?.resolution}</p>
              </div>
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs text-red-400">LIVE</span>
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-1.5 bg-black/50 rounded text-white/70 hover:text-white"><ZoomIn size={16} /></button>
                <button className="p-1.5 bg-black/50 rounded text-white/70 hover:text-white"><Grid size={16} /></button>
                <button className="p-1.5 bg-black/50 rounded text-white/70 hover:text-white"><Maximize2 size={16} /></button>
              </div>
              <div className="absolute bottom-3 left-3 text-xs text-white/50">
                {new Date().toLocaleString()} | FPS: 30
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Cameras</h3>
          {cameras.map((cam) => (
            <button key={cam.id} onClick={() => setActiveCamera(cam.id)}
              className={`w-full text-left p-3 rounded-xl border transition-all ${
                activeCamera === cam.id ? 'bg-neo-600/20 border-neo-600/30' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
              }`}>
              <div className="flex items-center gap-2 mb-1">
                <Camera size={14} className="text-neo-400" />
                <span className="text-sm font-medium">{cam.name}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{cam.resolution}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${cam.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                <span>{cam.status}</span>
              </div>
            </button>
          ))}

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mt-4">
            <h3 className="font-semibold text-sm mb-2">Detection</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between"><span className="text-gray-400">Objects</span><span className="text-neo-400">12</span></div>
              <div className="flex justify-between"><span className="text-gray-400">People</span><span className="text-blue-400">2</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Pets</span><span className="text-green-400">1</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
