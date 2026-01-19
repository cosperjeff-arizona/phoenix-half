// schedule.js — Weekly schedule with physical and system work
// Last updated: 2025-01-19

export const currentWeek = {
  weekId: "2025-W04",
  weekOf: "2025-01-20",
  phase: "Week 0 - On-Ramp",
  
  days: {
    monday: {
      date: "2025-01-20",
      physical: null,
      system: {
        id: "w0-s1",
        duration: "30-45 min",
        window: "evening-after-bedtime",
        tasks: [
          "Review generated files",
          "Confirm directory structure works locally",
          "Identify any immediate friction"
        ],
        status: "planned"
      },
      notes: "Holiday - family day. System work only if energy permits after bedtime."
    },

    tuesday: {
      date: "2025-01-21",
      physical: {
        ref: "w0-p1",
        window: "lunch",
        duration: "10-15 min",
        type: "walk",
        status: "planned"
      },
      system: null,
      notes: "Office day. Physical session during lunch if possible."
    },

    wednesday: {
      date: "2025-01-22",
      physical: {
        ref: "w0-p2",
        window: "grocery-run",
        duration: "10-15 min", 
        type: "walk",
        status: "planned"
      },
      system: {
        id: "w0-s2",
        duration: "30 min",
        window: "evening-after-bedtime",
        tasks: [
          "Review data files for accuracy",
          "Make any needed corrections",
          "Test basic HTML rendering"
        ],
        status: "planned"
      },
      notes: "Grocery run is the physical window."
    },

    thursday: {
      date: "2025-01-23",
      physical: null,
      system: null,
      notes: "Rest day. Schedule too constrained. Therapy + swim lessons."
    },

    friday: {
      date: "2025-01-24",
      physical: {
        ref: "w0-p3",
        window: "afternoon-post-1100",
        duration: "15-20 min",
        type: "walk-or-run-walk",
        status: "planned"
      },
      system: {
        id: "w0-s3",
        duration: "45-60 min",
        window: "evening-after-bedtime",
        tasks: [
          "Refine UI if time permits",
          "Document any friction encountered",
          "Prepare week 1 planning notes"
        ],
        status: "planned"
      },
      notes: "More flexible day. Best physical opportunity of weekdays."
    },

    saturday: {
      date: "2025-01-25",
      physical: {
        ref: "w0-p4",
        window: "family-block",
        duration: "15-20 min",
        type: "family-integrated-walk",
        status: "planned"
      },
      system: {
        id: "w0-s4",
        duration: "30 min max",
        window: "nap-time-or-evening",
        tasks: [
          "Light refinement only",
          "Do not start new work"
        ],
        status: "optional"
      },
      notes: "Family priority. Physical integrated with park/activity."
    },

    sunday: {
      date: "2025-01-26",
      physical: {
        ref: "w0-p4-alt",
        window: "family-block",
        duration: "15-20 min",
        type: "family-integrated-walk",
        status: "planned",
        note: "If Saturday physical didn't happen"
      },
      system: {
        id: "w0-s5",
        duration: "30 min",
        window: "evening",
        tasks: [
          "Week 0 review",
          "Record what worked and what didn't",
          "Input for Week 1 planning"
        ],
        status: "planned"
      },
      notes: "Week wrap-up. Capture friction data."
    }
  }
};

export const scheduleRules = {
  substitution: "System work may substitute for physical work when energy is low",
  priority: "Family and work obligations always override planned sessions",
  rescheduling: "Do not reschedule missed sessions; absorb and continue",
  weekend: "One physical session across Sat/Sun is sufficient"
};