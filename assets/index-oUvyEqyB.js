(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const g=(e=!1,t="/")=>{const r=`
    <div class="flex items-center space-x-4">
      <a href="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Log In
      </a>
      <a href="/register" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium">
        Sign Up
      </a>
    </div>
  `,i=`
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
          <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">My Profile</a>
          <a href="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
          <a href="/logout" id="logout-button" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign Out</a>
        </div>
      </div>
    </div>
  `,o=[{href:"/",text:"Home"},{href:"/movies",text:"Movies"},{href:"/series",text:"Series"}],s="bg-gray-900 text-white",n="text-gray-300 hover:bg-gray-700 hover:text-white";return`
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <!-- Logo -->
              <a href="/" class="flex items-center space-x-2">
                <img class="h-8 w-8" src="logo.webp" alt="Logo">
                <span class="text-white text-xl font-bold">MovieMatch</span>
              </a>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                ${o.map(a=>`
    <a href="${a.href}" class="${a.href===t?s:n} px-3 py-2 rounded-md text-sm font-medium" ${a.href===t?'aria-current="page"':""}>${a.text}</a>
  `).join("")}
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            ${e?i:r}
          </div>
        </div>
      </div>
    </nav>
  `},u=()=>`
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-sm text-gray-400">
          &copy; ${new Date().getFullYear()} MovieMatch. All rights reserved.
        </div>
      </div>
    </footer>
  `,m=()=>`
    <div class="max-w-2xl mx-auto">
      <form class="flex items-center">
        <label for="search-input" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="search-input" class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5" placeholder="Search movies or series..." required>
        </div>
        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-indigo-600 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </form>
    </div>
  `,f=()=>{const e=`
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      ${Array(5).fill("").map(()=>`
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/300x450/111827/808080?text=Poster" alt="Placeholder" class="w-full h-auto">
        </div>
      `).join("")}
    </div>
  `;return`
    <!-- Hero Section -->
    <section class="text-center py-12 md:py-20">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Welcome to MovieMatch</h1>
      <p class="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">Discover, track, and find your next favorite movie or series. All in one place.</p>
      ${m()}
    </section>

    <!-- Trending Movies Section -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Trending Movies</h2>
      ${e}
    </section>

    <!-- Trending Series Section -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Trending Series</h2>
      ${e}
    </section>
  `},p=e=>`
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
    <img src="https://via.placeholder.com/300x450/111827/808080?text=${encodeURIComponent(e)}" alt="${e}" class="w-full h-auto">
    <div class="p-4">
      <h3 class="font-bold text-lg">${e}</h3>
    </div>
  </div>
`,v=()=>`
    <h1 class="text-3xl font-bold mb-6">Movies</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      ${["Inception","The Dark Knight","Interstellar","Parasite","The Matrix","Forrest Gump","Pulp Fiction","The Godfather","Dune","Blade Runner 2049"].map(t=>p(t)).join("")}
    </div>
  `,h=e=>`
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
    <img src="https://via.placeholder.com/300x450/111827/808080?text=${encodeURIComponent(e)}" alt="${e}" class="w-full h-auto">
    <div class="p-4">
      <h3 class="font-bold text-lg">${e}</h3>
    </div>
  </div>
`,x=()=>`
    <h1 class="text-3xl font-bold mb-6">Series</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      ${["Breaking Bad","Game of Thrones","Stranger Things","The Office","Friends","The Mandalorian","Chernobyl","Fleabag","The Crown","Black Mirror"].map(t=>h(t)).join("")}
    </div>
  `,d=(e,t)=>`
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
    <img src="https://via.placeholder.com/300x450/111827/808080?text=${encodeURIComponent(e)}" alt="${e}" class="w-full h-auto">
    <div class="p-4">
      <h3 class="font-bold text-lg">${e}</h3>
      <p class="text-sm text-gray-400">${t}</p>
    </div>
  </div>
`,b=()=>{const e=["Inception","The Matrix","Dune"],t=["Breaking Bad","The Office","Stranger Things"];return`
    <h1 class="text-3xl font-bold mb-8">My Favorites</h1>

    <section>
      <h2 class="text-2xl font-bold mb-4">Favorite Movies</h2>
      ${e.length>0?`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
               ${e.map(r=>d(r,"Movie")).join("")}
             </div>`:`<p class="text-gray-400">You haven't added any favorite movies yet.</p>`}
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Favorite Series</h2>
      ${t.length>0?`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
               ${t.map(r=>d(r,"Series")).join("")}
             </div>`:`<p class="text-gray-400">You haven't added any favorite series yet.</p>`}
    </section>
  `},y=()=>`
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-t-md" placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-b-md" placeholder="Password">
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 bg-gray-700 rounded">
              <label for="remember-me" class="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-400 hover:text-indigo-300">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  `,w=()=>`
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
            Create a new account
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input id="username" name="username" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-t-md" placeholder="Username">
            </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
            <div>
              <label for="confirm-password" class="sr-only">Confirm Password</label>
              <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-b-md" placeholder="Confirm Password">
            </div>
          </div>

          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  `,M=!1,c={"/":f,"/movies":v,"/series":x,"/favorites":b,"/login":y,"/register":w},l=()=>{const e=window.location.pathname,t=document.getElementById("page-content"),r=document.getElementById("header-container"),i=c[e]||c["/"];r&&(r.innerHTML=g(M,e)),t&&(t.innerHTML=i())};function S(){const e=document.getElementById("footer-container");e&&(e.innerHTML=u()),l(),$()}function $(){document.body.addEventListener("click",e=>{e.target.matches('[href^="/"]')&&(e.preventDefault(),history.pushState(null,"",e.target.href),l())})}document.addEventListener("DOMContentLoaded",S);window.addEventListener("popstate",l);
