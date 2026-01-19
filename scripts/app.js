// app.js — Main application entry point
// Loads current week data and renders to DOM

import { week } from '../data/weeks/2025-W04.js';
import { renderWeek } from './render.js';

function init() {
  console.log('Phoenix Half Marathon System');
  console.log(`Loading: ${week.name} · ${week.subtitle}`);
  
  renderWeek(week, document.body);
  
  console.log('Render complete');
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}