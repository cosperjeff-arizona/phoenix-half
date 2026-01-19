// trainingPlan.js — Training plan data
// Last updated: 2025-01-19

export const trainingPhilosophy = {
  format: "time-based",
  dominantMode: "walk-and-run-walk",
  progressionPriority: "adherence-over-fitness",
  missedSessionPolicy: "absorb-and-continue",
  compensationPolicy: "none"
};

export const week0 = {
  weekId: "2025-W04",
  weekOf: "2025-01-20",
  phase: "on-ramp",
  
  purpose: [
    "Test adherence mechanisms",
    "Surface friction points", 
    "Establish baseline patterns",
    "Keep system alive for seven days"
  ],
  
  notPurpose: [
    "Build fitness",
    "Establish training load",
    "Hit mileage targets"
  ],

  physicalSessions: [
    {
      id: "w0-p1",
      day: "tuesday",
      date: "2025-01-21",
      type: "walk",
      duration: "10-15 min",
      context: "Lunch break at office",
      description: "Walk outside during lunch. No running required.",
      fallback: "Walk to/from parking lot counts",
      required: false
    },
    {
      id: "w0-p2", 
      day: "wednesday",
      date: "2025-01-22",
      type: "walk",
      duration: "10-15 min",
      context: "Integrated with grocery run",
      description: "Extra loop at store or walk around parking area",
      fallback: "Walking in store counts",
      required: false
    },
    {
      id: "w0-p3",
      day: "friday",
      date: "2025-01-24",
      type: "walk-or-run-walk",
      duration: "15-20 min",
      context: "Afternoon, post-meetings",
      description: "Walk or run-walk. Run segments optional (30-60 sec max).",
      fallback: "Walk only is fine",
      required: false
    },
    {
      id: "w0-p4",
      day: "saturday-or-sunday",
      date: "2025-01-25 or 2025-01-26",
      type: "family-integrated-walk",
      duration: "15-20 min",
      context: "During park or zoo family block",
      description: "Walking with family. Brisk pace when possible. No separate session needed.",
      fallback: "Any sustained walking during family activity",
      required: false
    }
  ],

  weeklyTarget: {
    minimum: "2 sessions of any kind",
    ideal: "3-4 sessions",
    maximum: "4 sessions (do not exceed)"
  },

  notes: [
    "Monday intentionally blank - holiday constraints",
    "Thursday intentionally blank - tight schedule",
    "All sessions are optional; showing up is the goal",
    "System build work can substitute for physical sessions",
    "Walking counts. Period."
  ]
};