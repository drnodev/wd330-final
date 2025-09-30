import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';

// --- Authentication Status Simulation ---
// Change this value to see how the header changes
const isLoggedIn = false;
// ---------------------------------------------

// Simple router
const routes = {
  '/': Home,
  '/movies': Movies,
  '/series': Series,
  '/favorites': Favorites,
  '/login': Login,
  '/register': Register,
};

const router = () => {
  const path = window.location.pathname;
  const pageContent = document.getElementById('page-content');
  const headerContainer = document.getElementById('header-container');
  
  // Find the component for the current path, or default to Home
  const page = routes[path] || routes['/'];
  
  // Re-render header with the current path to update active link
  if (headerContainer) {
    headerContainer.innerHTML = Header(isLoggedIn, path);
    // If logged in, re-attach the user menu listener after re-rendering the header
    if (isLoggedIn) {
      addUserMenuListener();
    }
  }
  if (pageContent) {
    pageContent.innerHTML = page();
  }
};

function renderLayout() {
  const footerContainer = document.getElementById('footer-container');

  // Initial render
  if (footerContainer) {
    footerContainer.innerHTML = Footer();
  }
  router();
  
  // Set up navigation listener once
  addNavigationListener();
}

function addUserMenuListener() {
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');

  // This check is important because the menu button only exists when logged in
  if (!userMenuButton) return;

  userMenuButton.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
  });
}

function addNavigationListener() {
  // Handle navigation clicks
  document.body.addEventListener('click', e => {    
    if (e.target.matches('[href^="/"]')) {
      e.preventDefault();
      history.pushState(null, '', e.target.href);
      router();
    }
  });
}

// Render the layout when the DOM is ready
document.addEventListener('DOMContentLoaded', renderLayout);

// Handle back/forward browser buttons
window.addEventListener('popstate', router);