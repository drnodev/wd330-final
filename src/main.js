import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import {showNotification} from './components/Notification';


const isLoggedIn = false;



const routes = {
  '/': Home,
  '/movies': Movies,
  '/series': Series,
  '/favorites': Favorites,
  '/login': Login,
  '/register': Register,
  '/detail/:id': Detail,
};

const router = async () => {
  const path            = window.location.pathname;
  const pageContent     = document.getElementById('page-content');
  const headerContainer = document.getElementById('header-container');
  
  let page = routes['/']; 
  let params = {};


  for (const routePath in routes) {
    const routeParts = routePath.split('/').filter(p => p);
    const pathParts = path.split('/').filter(p => p);

    if (routeParts.length === pathParts.length) {
      const match = routeParts.every((part, i) => {
        if (part.startsWith(':')) {
          params[part.substring(1)] = pathParts[i];
          return true;
        }
        return part === pathParts[i];
      });

      if (match) {
         page = await routes[routePath];
        break;
      }
    }
  }
  
  if (headerContainer) {
    headerContainer.innerHTML = await Header(isLoggedIn, path);
    if (isLoggedIn) {
      addUserMenuListener();
    }
  }
  if (pageContent) {
    pageContent.innerHTML = await page(params);
  }
};

async function renderLayout() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = await Footer();
  }
  router();
  addNavigationListener();
  showNotification('movie');
}

function addUserMenuListener() {
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');
  if (!userMenuButton) return;
  userMenuButton.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
  });
}

function addNavigationListener() {
  document.body.addEventListener('click', e => {    
    if (e.target.matches('[href^="/"]')) {
      e.preventDefault();
      history.pushState(null, '', e.target.href);
      router();
    }
  });
}
document.addEventListener('DOMContentLoaded', renderLayout);
window.addEventListener('popstate', router);