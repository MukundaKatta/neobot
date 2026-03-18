'use client';

import { useStore } from '@/lib/store';
import { Wrench, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

const statusConfig: Record<string, { color: string; bg: string; icon: any }> = {
  good: { color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', icon: CheckCircle },
  warning: { color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', icon: AlertTriangle },
  critical: { color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20', icon: AlertCircle },
};

export default function MaintenanceDashboard() {
  const { maintenance } = useStore();
  const avgHealth = maintenance.reduce((a, m) => a + m.health, 0) / maintenance.length;

  return (
    <div className="space-y-6">
      <div><h2 className="text-xl font-bold">Maintenance Dashboard</h2><p className="text-sm text-gray-400">Monitor NeoBot&apos;s health and schedule maintenance</p></div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Overall Health</p>
          <p className="text-3xl font-bold text-neo-400">{avgHealth.toFixed(0)}%</p>
        </div>
        <div className="bg-gray-900/50 border border-green-500/20 rounded-xl p-4">
          <p className="text-sm text-green-400">Good</p>
          <p className="text-3xl font-bold text-green-400">{maintenance.filter((m) => m.status === 'good').length}</p>
        </div>
        <div className="bg-gray-900/50 border border-yellow-500/20 rounded-xl p-4">
          <p className="text-sm text-yellow-400">Warning</p>
          <p className="text-3xl font-bold text-yellow-400">{maintenance.filter((m) => m.status === 'warning').length}</p>
        </div>
        <div className="bg-gray-900/50 border border-red-500/20 rounded-xl p-4">
          <p className="text-sm text-red-400">Critical</p>
          <p className="text-3xl font-bold text-red-400">{maintenance.filter((m) => m.status === 'critical').length}</p>
        </div>
      </div>

      <div className="space-y-3">
        {maintenance.map((item) => {
          const config = statusConfig[item.status];
          const Icon = config.icon;
          return (
            <div key={item.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border ${config.bg}`}>
                    <Icon size={18} className={config.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.component}</h3>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span>Last check: {item.lastCheck}</span>
                      <span>Next check: {item.nextCheck}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${config.color}`}>{item.health}%</p>
                  <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden mt-1">
                    <div className={`h-full rounded-full ${item.health > 80 ? 'bg-green-500' : item.health > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${item.health}%` }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
