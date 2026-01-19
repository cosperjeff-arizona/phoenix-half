# Phoenix Half Marathon — Life-Compatible System

A durable, inspectable web application for managing training toward the Phoenix Half Marathon while preserving family stability, work performance, and mental health.

## Philosophy

- **Plans are hypotheses, not commitments**
- **Data is authoritative, presentation is downstream**
- **Missed sessions are absorbed, not corrected**
- **System work counts as legitimate progress**

## Directory Structure

```
/phoenix-half/
├── index.html              # Main view (presentation only)
├── /styles/
│   ├── reset.css           # CSS reset
│   ├── base.css            # Typography and colors
│   ├── layout.css          # Page structure
│   └── components.css      # Cards and sessions
├── /scripts/
│   ├── app.js              # Application entry point
│   ├── state.js            # State aggregation
│   ├── scheduler.js        # (placeholder)
│   ├── training.js         # (placeholder)
│   └── ui.js               # Rendering functions
├── /data/
│   ├── project.js          # Goals and success criteria
│   ├── constraints.js      # Reality and limitations
│   ├── trainingPlan.js     # Physical training data
│   ├── schedule.js         # Weekly schedule
│   ├── systemBuild.js      # System construction schedule
│   ├── meals.js            # Meal planning
│   ├── weather.js          # Weather adaptation
│   └── history.js          # Session history and friction log
├── /assets/
│   └── icons/
└── README.md
```

## Data vs. Presentation

- `/data/` files are the **source of truth**
- `index.html` displays current state but does not decide
- Updates happen in data files; presentation follows

## Current Phase

**Week 0 — On-Ramp**
- Purpose: Test adherence, surface friction, begin system construction
- Physical: 2-4 sessions, walk-dominant
- System: 2-3 hours of architecture work

## Rules

1. **Substitution:** System work may replace physical work when energy is low
2. **Priority:** Family and work obligations always override
3. **Missed sessions:** Absorb and continue; do not reschedule
4. **Compensation:** Never "make up" missed work

## Local Development

Serve with any static server:
```bash
npx serve .
# or
python -m http.server 8000
```

## Deployment

Designed for private hosting on Vercel or similar static hosts.

---

*This system adapts to reality; reality is never asked to submit to the system.*