'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import { mockRooms, mockDevices, mockTasks, mockProfiles, mockSkills, mockMaintenance } from '@/lib/mock-data';
import Sidebar from '@/components/Sidebar';
import HomeMap from '@/components/HomeMap';
import TaskScheduler from '@/components/TaskScheduler';
import VoiceInteraction from '@/components/VoiceInteraction';
import CameraView from '@/components/CameraView';
import SmartHome from '@/components/SmartHome';
import PersonalityConfig from '@/components/PersonalityConfig';
import SkillStore from '@/components/SkillStore';
import MaintenanceDashboard from '@/components/MaintenanceDashboard';
import FamilyProfiles from '@/components/FamilyProfiles';
import SetupWizard from '@/components/SetupWizard';

export default function HomePage() {
  const { activeTab, setupComplete, setRooms, setDevices, setTasks, setProfiles, setSkills, setMaintenance, setSetupComplete } = useStore();

  useEffect(() => {
    setRooms(mockRooms);
    setDevices(mockDevices);
    setTasks(mockTasks);
    setProfiles(mockProfiles);
    setSkills(mockSkills);
    setMaintenance(mockMaintenance);
  }, [setRooms, setDevices, setTasks, setProfiles, setSkills, setMaintenance]);

  if (!setupComplete) return <SetupWizard onComplete={() => setSetupComplete(true)} />;

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeMap />;
      case 'tasks': return <TaskScheduler />;
      case 'voice': return <VoiceInteraction />;
      case 'camera': return <CameraView />;
      case 'smarthome': return <SmartHome />;
      case 'personality': return <PersonalityConfig />;
      case 'skills': return <SkillStore />;
      case 'maintenance': return <MaintenanceDashboard />;
      case 'family': return <FamilyProfiles />;
      default: return <HomeMap />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-neo-300 to-neo-500 bg-clip-text text-transparent">NeoBot</h1>
          <p className="text-gray-400 mt-1">Your Intelligent Home Companion</p>
        </div>
        {renderContent()}
      </main>
    </div>
  );
}
