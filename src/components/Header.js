import { logOut } from "../services/api";

const Header = async (isLoggedIn = false, currentPath = '/') => {

  setTimeout(() => {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        logOut();
      });
    }
  }, 200);
  const loggedOutMenu = `
    <div class="flex items-center space-x-4">
      <a href="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Log In
      </a>
      <a href="/register" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium">
        Sign Up
      </a>
    </div>
  `;

  const loggedInMenu = `
    <div class="flex items-center space-x-4">
      <a href="/favorites" class="text-gray-300 hover:text-white" title="My Favorites">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </a>
      <div class="relative">
        <button id="user-menu-button" class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">Open user menu</span>
          <img class="h-8 w-8 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar">
        </button>
        <!-- Menú desplegable -->
        <div id="user-menu" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
          <span id="logout-button" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400" role="menuitem">Sign Out</span>
        </div>
      </div>
    </div>
  `;

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/movies', text: 'Movies' },
    { href: '/series', text: 'Series' },
  ];

  const activeClasses = 'bg-gray-900 text-white';
  const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  const linkHTML = navLinks.map(link => `
    <a href="${link.href}" class="${link.href === currentPath ? activeClasses : inactiveClasses} px-3 py-2 rounded-md text-sm font-medium" ${link.href === currentPath ? 'aria-current="page"' : ''}>${link.text}</a>
  `).join('');

  return `
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <!-- Logo -->
              <a href="/" class="flex items-center space-x-2">
                <img class="h-8 w-8" src="/logo.webp" alt="Logo">
                <span class="text-white text-xl font-bold">MovieMatch</span>
              </a>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                ${linkHTML}
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            ${isLoggedIn ? loggedInMenu : loggedOutMenu}
          </div>
        </div>
      </div>
    </nav>
  `;
};

export default Header;