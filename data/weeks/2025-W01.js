// 2025-W04.js — Week 0 On-Ramp
// Jan 20–26, 2025

export const week = {
  id: "2025-W04",
  name: "Week 0",
  subtitle: "On-Ramp",
  startDate: "2025-01-20",
  endDate: "2025-01-26",
  
  days: [
    {
      day: "Mon",
      date: 20,
      fullDate: "2025-01-20",
      work: [
        { description: "1:1 Mieko · SOF meeting", time: "11am, 12pm" }
      ],
      physical: null,
      system: [
        { description: "Review files, confirm directory, note friction", duration: "30–45m", window: "evening" }
      ],
      note: "Holiday. Car detailed 10:30am. System work only if energy permits."
    },
    {
      day: "Tue",
      date: 21,
      fullDate: "2025-01-21",
      work: [
        { description: "In office all day", time: "7:15am – 4:30pm" }
      ],
      physical: [
        { description: "Walk outside during lunch", duration: "10–15m", window: "lunch" }
      ],
      system: null,
      note: "No running required."
    },
    {
      day: "Wed",
      date: 22,
      fullDate: "2025-01-22",
      work: [
        { description: "Office hours · 1:1 Cameron", time: "9am, 1pm" }
      ],
      physical: [
        { description: "Extra loop at store or parking area", duration: "10–15m", window: "grocery run" }
      ],
      system: [
        { description: "Review data, test HTML", duration: "30m", window: "evening" }
      ],
      note: null
    },
    {
      day: "Thu",
      date: 23,
      fullDate: "2025-01-23",
      work: [
        { description: "SOF meeting", time: "10am" }
      ],
      physical: null,
      system: null,
      rest: true,
      note: "Therapy 2pm · Swim 4:30pm. No capacity."
    },
    {
      day: "Fri",
      date: 24,
      fullDate: "2025-01-24",
      work: [
        { description: "EPSI Training · ANES meeting", time: "9:30am, 11am" }
      ],
      physical: [
        { description: "Walk or run-walk. Run segments optional.", duration: "15–20m", window: "afternoon" }
      ],
      system: [
        { description: "Document friction, prep Week 1", duration: "45–60m", window: "evening" }
      ],
      note: "Best weekday window after meetings."
    },
    {
      day: "Sat",
      date: 25,
      fullDate: "2025-01-25",
      work: null,
      physical: [
        { description: "Walk with family at park/zoo", duration: "15–20m", window: "family block" }
      ],
      system: [
        { description: "Light refinement only", duration: "30m max", window: null, optional: true }
      ],
      note: null
    },
    {
      day: "Sun",
      date: 26,
      fullDate: "2025-01-26",
      work: null,
      physical: [
        { description: "Family walk (if Sat missed)", duration: "15–20m", window: "family block" }
      ],
      system: [
        { description: "Week 0 review, record friction", duration: "30m", window: "evening" }
      ],
      note: "Capture friction data for Week 1."
    }
  ],

  targets: {
    physical: {
      minimum: "2 sessions",
      ideal: "3–4 sessions",
      maximum: "4 sessions",
      note: "Walking counts. Period."
    },
    system: {
      budget: "2–3 hours total",
      sessionCap: "60 min max",
      focus: "Clarity, durability",
      note: "System work is first-class work."
    }
  },

  rules: [
    { term: "Substitution", definition: "System work may replace physical when energy is low" },
    { term: "Priority", definition: "Family and work always override planned sessions" },
    { term: "Missed", definition: "Absorb and continue. Do not reschedule." },
    { term: "Weekend", definition: "One physical session across Sat/Sun is sufficient" }
  ]
};