import { Room, SmartDevice, ScheduledTask, FamilyProfile, Skill, MaintenanceItem } from './store';

export const mockRooms: Room[] = [
  { id: 'rm1', name: 'Living Room', type: 'living', x: 0, y: 0, w: 5, h: 4, devices: [] },
  { id: 'rm2', name: 'Kitchen', type: 'kitchen', x: 5, y: 0, w: 4, h: 4, devices: [] },
  { id: 'rm3', name: 'Master Bedroom', type: 'bedroom', x: 0, y: 4, w: 4, h: 3, devices: [] },
  { id: 'rm4', name: 'Office', type: 'office', x: 4, y: 4, w: 3, h: 3, devices: [] },
  { id: 'rm5', name: 'Bathroom', type: 'bathroom', x: 7, y: 4, w: 2, h: 3, devices: [] },
];

export const mockDevices: SmartDevice[] = [
  { id: 'd1', name: 'Ceiling Light', type: 'light', status: 'on', roomId: 'rm1' },
  { id: 'd2', name: 'Smart TV', type: 'appliance', status: 'off', roomId: 'rm1' },
  { id: 'd3', name: 'Thermostat', type: 'thermostat', status: 'on', roomId: 'rm1' },
  { id: 'd4', name: 'Kitchen Light', type: 'light', status: 'on', roomId: 'rm2' },
  { id: 'd5', name: 'Fridge', type: 'appliance', status: 'on', roomId: 'rm2' },
  { id: 'd6', name: 'Security Camera', type: 'camera', status: 'on', roomId: 'rm2' },
  { id: 'd7', name: 'Bedroom Light', type: 'light', status: 'off', roomId: 'rm3' },
  { id: 'd8', name: 'Smart Speaker', type: 'speaker', status: 'standby', roomId: 'rm3' },
  { id: 'd9', name: 'Front Door Lock', type: 'lock', status: 'on', roomId: 'rm1' },
];

export const mockTasks: ScheduledTask[] = [
  { id: 'st1', name: 'Morning Patrol', description: 'Check all rooms and report status', schedule: '07:00 Daily', enabled: true, lastRun: '2024-04-01T07:00:00Z', nextRun: '2024-04-02T07:00:00Z' },
  { id: 'st2', name: 'Vacuum Living Room', description: 'Full vacuum of the living room floor', schedule: '10:00 Mon/Wed/Fri', enabled: true, lastRun: '2024-04-01T10:00:00Z', nextRun: '2024-04-03T10:00:00Z' },
  { id: 'st3', name: 'Evening Security Check', description: 'Lock doors, check windows, arm security', schedule: '22:00 Daily', enabled: true, lastRun: '2024-04-01T22:00:00Z', nextRun: '2024-04-02T22:00:00Z' },
  { id: 'st4', name: 'Water Plants', description: 'Water indoor plants with measured amounts', schedule: '09:00 Tue/Sat', enabled: false, lastRun: null, nextRun: '2024-04-06T09:00:00Z' },
  { id: 'st5', name: 'Bedtime Routine', description: 'Dim lights, set temperature, play relaxing music', schedule: '21:30 Daily', enabled: true, lastRun: '2024-04-01T21:30:00Z', nextRun: '2024-04-02T21:30:00Z' },
];

export const mockProfiles: FamilyProfile[] = [
  { id: 'fp1', name: 'Alex', role: 'admin', avatar: 'A', preferences: { wakeTime: '06:30', tempPreference: 72 } },
  { id: 'fp2', name: 'Jordan', role: 'adult', avatar: 'J', preferences: { wakeTime: '07:00', tempPreference: 70 } },
  { id: 'fp3', name: 'Sam', role: 'child', avatar: 'S', preferences: { bedtime: '20:30', screenTime: 120 } },
  { id: 'fp4', name: 'Guest', role: 'guest', avatar: 'G', preferences: {} },
];

export const mockSkills: Skill[] = [
  { id: 'sk1', name: 'Recipe Assistant', category: 'household', description: 'Helps plan meals and provides cooking instructions', installed: true, rating: 4.5, icon: 'chef' },
  { id: 'sk2', name: 'Story Time', category: 'entertainment', description: 'Reads bedtime stories with voice acting', installed: true, rating: 4.8, icon: 'book' },
  { id: 'sk3', name: 'Homework Helper', category: 'education', description: 'Assists children with homework and learning', installed: false, rating: 4.2, icon: 'pencil' },
  { id: 'sk4', name: 'Fitness Coach', category: 'health', description: 'Guides exercises and tracks fitness goals', installed: false, rating: 4.0, icon: 'heart' },
  { id: 'sk5', name: 'Home Guard', category: 'security', description: 'Advanced security monitoring and alerts', installed: true, rating: 4.7, icon: 'shield' },
  { id: 'sk6', name: 'Plant Care', category: 'household', description: 'Monitors plant health and watering schedules', installed: false, rating: 3.9, icon: 'leaf' },
  { id: 'sk7', name: 'Music DJ', category: 'entertainment', description: 'Creates playlists based on mood and activity', installed: true, rating: 4.3, icon: 'music' },
  { id: 'sk8', name: 'Language Tutor', category: 'education', description: 'Interactive language learning sessions', installed: false, rating: 4.1, icon: 'globe' },
];

export const mockMaintenance: MaintenanceItem[] = [
  { id: 'm1', component: 'Battery', status: 'good', lastCheck: '2024-04-01', nextCheck: '2024-04-15', health: 92 },
  { id: 'm2', component: 'Motors', status: 'good', lastCheck: '2024-03-28', nextCheck: '2024-04-28', health: 88 },
  { id: 'm3', component: 'Cameras', status: 'good', lastCheck: '2024-04-01', nextCheck: '2024-05-01', health: 95 },
  { id: 'm4', component: 'Speakers', status: 'warning', lastCheck: '2024-03-15', nextCheck: '2024-04-05', health: 72 },
  { id: 'm5', component: 'Wheels', status: 'good', lastCheck: '2024-03-20', nextCheck: '2024-04-20', health: 85 },
  { id: 'm6', component: 'Sensors', status: 'good', lastCheck: '2024-04-01', nextCheck: '2024-04-30', health: 90 },
  { id: 'm7', component: 'Software', status: 'good', lastCheck: '2024-04-01', nextCheck: '2024-04-08', health: 100 },
];
