import { create } from 'zustand';

export interface Room {
  id: string;
  name: string;
  type: 'living' | 'bedroom' | 'kitchen' | 'bathroom' | 'office' | 'garage';
  x: number; y: number; w: number; h: number;
  devices: SmartDevice[];
}

export interface SmartDevice {
  id: string;
  name: string;
  type: 'light' | 'thermostat' | 'speaker' | 'camera' | 'lock' | 'appliance';
  status: 'on' | 'off' | 'standby';
  roomId: string;
}

export interface ScheduledTask {
  id: string;
  name: string;
  description: string;
  schedule: string;
  enabled: boolean;
  lastRun: string | null;
  nextRun: string;
}

export interface FamilyProfile {
  id: string;
  name: string;
  role: 'admin' | 'adult' | 'child' | 'guest';
  avatar: string;
  preferences: Record<string, any>;
}

export interface Skill {
  id: string;
  name: string;
  category: 'household' | 'entertainment' | 'education' | 'health' | 'security';
  description: string;
  installed: boolean;
  rating: number;
  icon: string;
}

export interface MaintenanceItem {
  id: string;
  component: string;
  status: 'good' | 'warning' | 'critical';
  lastCheck: string;
  nextCheck: string;
  health: number;
}

export interface PersonalitySettings {
  voiceTone: 'formal' | 'casual' | 'playful' | 'professional';
  volume: number;
  speed: number;
  language: string;
  humor: boolean;
  proactiveness: number;
}

interface NeoBotState {
  activeTab: string;
  setupComplete: boolean;
  rooms: Room[];
  devices: SmartDevice[];
  tasks: ScheduledTask[];
  profiles: FamilyProfile[];
  skills: Skill[];
  maintenance: MaintenanceItem[];
  personality: PersonalitySettings;
  voiceMessages: { role: 'user' | 'bot'; text: string }[];
  setActiveTab: (tab: string) => void;
  setSetupComplete: (v: boolean) => void;
  setRooms: (rooms: Room[]) => void;
  setDevices: (devices: SmartDevice[]) => void;
  setTasks: (tasks: ScheduledTask[]) => void;
  setProfiles: (profiles: FamilyProfile[]) => void;
  setSkills: (skills: Skill[]) => void;
  setMaintenance: (m: MaintenanceItem[]) => void;
  setPersonality: (p: PersonalitySettings) => void;
  addVoiceMessage: (msg: { role: 'user' | 'bot'; text: string }) => void;
  toggleSkill: (id: string) => void;
  toggleTask: (id: string) => void;
}

export const useStore = create<NeoBotState>((set) => ({
  activeTab: 'home',
  setupComplete: true,
  rooms: [],
  devices: [],
  tasks: [],
  profiles: [],
  skills: [],
  maintenance: [],
  personality: { voiceTone: 'casual', volume: 70, speed: 1, language: 'English', humor: true, proactiveness: 60 },
  voiceMessages: [],
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSetupComplete: (v) => set({ setupComplete: v }),
  setRooms: (rooms) => set({ rooms }),
  setDevices: (devices) => set({ devices }),
  setTasks: (tasks) => set({ tasks }),
  setProfiles: (profiles) => set({ profiles }),
  setSkills: (skills) => set({ skills }),
  setMaintenance: (m) => set({ maintenance: m }),
  setPersonality: (personality) => set({ personality }),
  addVoiceMessage: (msg) => set((s) => ({ voiceMessages: [...s.voiceMessages, msg] })),
  toggleSkill: (id) => set((s) => ({ skills: s.skills.map((sk) => sk.id === id ? { ...sk, installed: !sk.installed } : sk) })),
  toggleTask: (id) => set((s) => ({ tasks: s.tasks.map((t) => t.id === id ? { ...t, enabled: !t.enabled } : t) })),
}));
