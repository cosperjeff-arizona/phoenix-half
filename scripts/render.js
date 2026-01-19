// render.js — Renders week data to DOM
// Pure presentation logic. Does not decide or reason.

export function renderWeek(week, container) {
  if (!container) return;
  
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