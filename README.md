# NeoBot

**Your Intelligent Home Companion Robot Platform**

NeoBot is a control and management platform for AI-powered home companion robots. Configure your robot's personality, manage smart home devices, schedule tasks, monitor cameras, and customize skills through an intuitive dashboard.

## Features

- **Home Map** -- Interactive floor plan with robot location tracking and room management
- **Task Scheduler** -- Schedule and automate robot tasks throughout the day
- **Voice Interaction** -- Natural language voice command interface and conversation
- **Camera View** -- Live camera feeds from the robot's onboard cameras
- **Smart Home Control** -- Integrate and control smart home devices from a unified panel
- **Personality Configuration** -- Customize the robot's behavior, tone, and interaction style
- **Skill Store** -- Browse and install additional capabilities and skills
- **Maintenance Dashboard** -- Monitor battery, sensors, and hardware status
- **Family Profiles** -- Create personalized profiles for each household member
- **Setup Wizard** -- Guided onboarding for first-time robot configuration

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Backend:** Supabase
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd neobot
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── page.tsx                # Main application (tabbed interface)
components/
├── Sidebar.tsx             # Navigation sidebar
├── HomeMap.tsx             # Interactive floor plan
├── TaskScheduler.tsx       # Task automation
├── VoiceInteraction.tsx    # Voice commands
├── CameraView.tsx          # Robot camera feeds
├── SmartHome.tsx           # Smart device control
├── PersonalityConfig.tsx   # Robot personality settings
├── SkillStore.tsx          # Skill marketplace
├── MaintenanceDashboard.tsx
├── FamilyProfiles.tsx      # User profiles
└── SetupWizard.tsx         # Onboarding flow
lib/
├── store.ts                # Zustand state
└── mock-data.ts            # Sample data
```

## License

MIT
