// systemBuild.js — Week 0 system construction schedule
// Last updated: 2025-01-19

export const systemBuildPhilosophy = {
  status: "first-class-work",
  relationship: "equal-to-physical-training",
  substitutionPolicy: "may-replace-physical-when-energy-limited",
  timeBudget: "intentionally-limited",
  focus: ["clarity", "durability", "simplicity"],
  notFocus: ["completeness", "features", "aesthetics"]
};

export const week0SystemBuild = {
  weekId: "2025-W04",
  weekOf: "2025-01-20",
  
  totalBudget: "2-3 hours across week",
  sessionCap: "60 min max per session",
  
  sessions: [
    {
      id: "w0-s1",
      day: "monday",
      date: "2025-01-20",
      duration: "30-45 min",
      window: "evening-after-bedtime",
      priority: 1,
      tasks: [
        {
          task: "Review generated data files",
          purpose: "Verify accuracy against stated reality",
          status: "pending"
        },
        {
          task: "Clone/setup local directory",
          purpose: "Confirm structure works on local machine",
          status: "pending"
        },
        {
          task: "Note immediate friction",
          purpose: "Capture what feels wrong or missing",
          status: "pending"
        }
      ],
      substitutesFor: null,
      status: "planned"
    },
    {
      id: "w0-s2",
      day: "wednesday",
      date: "2025-01-22",
      duration: "30 min",
      window: "evening-after-bedtime",
      priority: 2,
      tasks: [
        {
          task: "Correct any data file errors",
          purpose: "Keep source of truth accurate",
          status: "pending"
        },
        {
          task: "Test index.html renders",
          purpose: "Verify basic app loads",
          status: "pending"
        }
      ],
      substitutesFor: null,
      status: "planned"
    },
    {
      id: "w0-s3",
      day: "friday", 
      date: "2025-01-24",
      duration: "45-60 min",
      window: "evening-after-bedtime",
      priority: 1,
      tasks: [
        {
          task: "Document encountered friction",
          purpose: "Record for future iteration",
          status: "pending"
        },
        {
          task: "Minimal UI refinement",
          purpose: "Only if prior tasks complete",
          status: "pending"
        },
        {
          task: "Draft Week 1 planning notes",
          purpose: "Prepare for next cycle",
          status: "pending"
        }
      ],
      substitutesFor: null,
      status: "planned"
    },
    {
      id: "w0-s4",
      day: "saturday",
      date: "2025-01-25",
      duration: "30 min max",
      window: "nap-time-or-evening",
      priority: 3,
      tasks: [
        {
          task: "Light refinement only",
          purpose: "Do not start new work",
          status: "pending"
        }
      ],
      substitutesFor: null,
      status: "optional"
    },
    {
      id: "w0-s5",
      day: "sunday",
      date: "2025-01-26",
      duration: "30 min",
      window: "evening",
      priority: 1,
      tasks: [
        {
          task: "Week 0 review",
          purpose: "Assess what worked",
          status: "pending"
        },
        {
          task: "Record friction points",
          purpose: "Input for system iteration",
          status: "pending"
        },
        {
          task: "Prepare Week 1 data",
          purpose: "Enable continuity",
          status: "pending"
        }
      ],
      substitutesFor: null,
      status: "planned"
    }
  ],

  week0Goals: [
    "Local environment working",
    "Data files reviewed and corrected",
    "Basic HTML renders",
    "Friction documented",
    "Week 1 planning seeded"
  ],

  notGoals: [
    "Beautiful UI",
    "Complete feature set",
    "Deployment",
    "Automation"
  ]
};