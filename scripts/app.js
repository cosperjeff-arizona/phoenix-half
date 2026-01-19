// app.js — Bundled version (no ES module imports)

// ============================================
// WEEK DATA — Edit this section to update weeks
// ============================================

const week = {
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

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderWeek(week) {
  // Header
  const header = document.querySelector('.header');
  if (header) {
    header.innerHTML = `
      <p class="header__eyebrow">${week.name} · ${week.subtitle}</p>
      <h1 class="header__title">Phoenix Half Marathon</h1>
      <div class="header__meta">
        <span class="header__meta-item">${formatDateRange(week.startDate, week.endDate)}</span>
        <span class="header__meta-item">
          <span class="legend__marker legend__marker--work"></span>
          Work
        </span>
        <span class="header__meta-item">
          <span class="legend__marker legend__marker--physical"></span>
          Physical
        </span>
        <span class="header__meta-item">
          <span class="legend__marker legend__marker--system"></span>
          System
        </span>
      </div>
    `;
  }
  
  // Week grid
  const weekGrid = document.getElementById('week-grid');
  if (weekGrid) {
    weekGrid.innerHTML = week.days.map(day => renderDayCard(day)).join('');
  }
  
  // Targets
  const targetsGrid = document.getElementById('targets-grid');
  if (targetsGrid && week.targets) {
    targetsGrid.innerHTML = renderTargets(week.targets);
  }
  
  // Rules
  const rulesContainer = document.getElementById('rules-container');
  if (rulesContainer && week.rules) {
    rulesContainer.innerHTML = renderRules(week.rules);
  }
  
  // Footer
  const footer = document.querySelector('.footer__content');
  if (footer) {
    footer.innerHTML = `
      <span>${week.name} · ${week.subtitle}</span>
      <span>Updated ${new Date().toISOString().split('T')[0]}</span>
    `;
  }
}

function renderDayCard(day) {
  const sessions = [];
  
  // Work sessions first (constraints)
  if (day.work) {
    day.work.forEach(w => {
      sessions.push(renderSession('work', w.description, w.time, null));
    });
  }
  
  // Physical sessions
  if (day.physical) {
    day.physical.forEach(p => {
      sessions.push(renderSession('physical', p.description, p.duration, p.window));
    });
  }
  
  // System sessions
  if (day.system) {
    day.system.forEach(s => {
      sessions.push(renderSession('system', s.description, s.duration, s.window, s.optional));
    });
  }
  
  // Rest day
  if (day.rest || sessions.length === 0) {
    if (!day.work) {
      sessions.push('<div class="session session--rest">Rest</div>');
    } else if (day.rest) {
      sessions.push('<div class="session session--rest">Rest</div>');
    }
  }
  
  const note = day.note ? `<p class="note">${day.note}</p>` : '';
  
  return `
    <article class="day-card">
      <header class="day-card__header">
        <span class="day-card__day">${day.day}</span>
        <span class="day-card__date">${day.date}</span>
      </header>
      <div class="day-card__sessions">
        ${sessions.join('')}
      </div>
      ${note}
    </article>
  `;
}

function renderSession(type, description, duration, window, optional = false) {
  const optionalBadge = optional ? '<span class="status status--planned">Optional</span>' : '';
  const windowSpan = window ? `<span class="session__window">${window}</span>` : '';
  
  return `
    <div class="session session--${type}">
      <div class="session__header">
        <span class="session__type">${capitalize(type)}</span>
        ${optionalBadge}
      </div>
      <p class="session__description">${description}</p>
      <div class="session__meta">
        <span class="session__duration">${duration}</span>
        ${windowSpan}
      </div>
    </div>
  `;
}

function renderTargets(targets) {
  return `
    <div class="summary-card">
      <h3 class="summary-card__title">Physical</h3>
      <div class="summary-card__list">
        <div class="summary-card__item">
          <span class="summary-card__label">Minimum</span>
          <span class="summary-card__value">${targets.physical.minimum}</span>
        </div>
        <div class="summary-card__item">
          <span class="summary-card__label">Ideal</span>
          <span class="summary-card__value">${targets.physical.ideal}</span>
        </div>
        <div class="summary-card__item">
          <span class="summary-card__label">Maximum</span>
          <span class="summary-card__value">${targets.physical.maximum}</span>
        </div>
      </div>
      <p class="summary-card__note">${targets.physical.note}</p>
    </div>
    <div class="summary-card">
      <h3 class="summary-card__title">System</h3>
      <div class="summary-card__list">
        <div class="summary-card__item">
          <span class="summary-card__label">Budget</span>
          <span class="summary-card__value">${targets.system.budget}</span>
        </div>
        <div class="summary-card__item">
          <span class="summary-card__label">Session cap</span>
          <span class="summary-card__value">${targets.system.sessionCap}</span>
        </div>
        <div class="summary-card__item">
          <span class="summary-card__label">Focus</span>
          <span class="summary-card__value">${targets.system.focus}</span>
        </div>
      </div>
      <p class="summary-card__note">${targets.system.note}</p>
    </div>
  `;
}

function renderRules(rules) {
  const items = rules.map(r => `
    <div class="rules__item">
      <dt class="rules__term">${r.term}</dt>
      <dd class="rules__definition">${r.definition}</dd>
    </div>
  `).join('');
  
  return `
    <div class="rules">
      <dl class="rules__list">
        ${items}
      </dl>
    </div>
  `;
}

function formatDateRange(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const options = { month: 'short', day: 'numeric' };
  const startStr = startDate.toLocaleDateString('en-US', options);
  const endStr = endDate.toLocaleDateString('en-US', { day: 'numeric' });
  const year = startDate.getFullYear();
  return `${startStr}–${endStr}, ${year}`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================
// INIT
// ============================================

function init() {
  console.log('Phoenix Half Marathon System');
  console.log(`Loading: ${week.name} · ${week.subtitle}`);
  renderWeek(week);
  console.log('Render complete');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}