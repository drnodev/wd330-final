import { fetchGenres } from '../services/api.js';

const SearchBar = async () => {
  
  
  const genres = await fetchGenres()

  const params = new URLSearchParams(window.location.search);
  const selectedGenre = params.get('genre') || '';
  const searchQuery    = params.get('query') || '';

  const genreOptions = genres.map(genre => {
    
    const isSelected = genre.id.toString() === selectedGenre;
    return `
        <option value="${genre.id}" ${isSelected? 'selected' : ''}>${genre.name}</option>
    `;
  }).join('');
    
  return `
    <div class="max-w-3xl mx-auto mt-6">
      <form class="flex flex-wrap items-center gap-2 bg-gray-800 p-3 rounded-xl shadow-md">
        
        <div class="relative flex-grow">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <input 
            name="query"
            type="text" 
            id="search-input"
            placeholder="Type to search for movies or series..." 
            class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5 placeholder-gray-400"
            value="${searchQuery}"
          >
        </div>
        <div>
          <label for="genre-select" class="sr-only">Género</label>
          <select 
            name="genre"
            id="genre-select"
            class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
          >
            <option value="">All Genres</option>
            ${genreOptions}
          </select>
        </div>

        <button 
          type="submit"
          class="p-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-800"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </form>
    </div>
  `;
};

export default SearchBar;
