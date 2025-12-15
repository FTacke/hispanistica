/**
 * Theme Manager
 * Handles dark/light mode switching with localStorage persistence
 */

const STORAGE_KEY = 'hispanistica-theme';
const THEME_ATTR = 'data-theme';

/**
 * Get the current theme from localStorage or system preference
 */
function getInitialTheme() {
  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  
  // Fall back to system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

/**
 * Apply theme to document
 */
function applyTheme(theme) {
  document.documentElement.setAttribute(THEME_ATTR, theme);
  localStorage.setItem(STORAGE_KEY, theme);
  
  // Update both toggle buttons if they exist
  const toggleMobile = document.getElementById('theme-toggle');
  const toggleDesktop = document.getElementById('theme-toggle-desktop');
  
  [toggleMobile, toggleDesktop].forEach(toggle => {
    if (toggle) {
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  });
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute(THEME_ATTR) || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

// Initialize theme immediately (before page renders)
(function() {
  const theme = getInitialTheme();
  document.documentElement.setAttribute(THEME_ATTR, theme);
})();

// Setup toggle button after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const toggleMobile = document.getElementById('theme-toggle');
  const toggleDesktop = document.getElementById('theme-toggle-desktop');
  
  [toggleMobile, toggleDesktop].forEach(toggle => {
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
      
      // Set initial aria-label
      const current = document.documentElement.getAttribute(THEME_ATTR) || 'light';
      toggle.setAttribute('aria-label', `Switch to ${current === 'dark' ? 'light' : 'dark'} mode`);
    }
  });
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't explicitly set a preference
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
});

// Export for potential use in other scripts
if (typeof window !== 'undefined') {
  window.themeManager = {
    toggle: toggleTheme,
    set: applyTheme,
    get: () => document.documentElement.getAttribute(THEME_ATTR)
  };
}
