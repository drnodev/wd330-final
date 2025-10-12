import SearchBar from '../components/SearchBar';
import { fetchHome } from '../services/api';

const Home = async () => {


  const params = new URLSearchParams(window.location.search);


  const query = params.get('query') || '';
  const genre = params.get('genre') || '';

  const trendingMovies = await fetchHome(query, genre);
  const filteredMovies = trendingMovies.filter(movie => {
    if (!movie.poster_path) {
      return false;
    }
    if (!genre || genre === '') {
      return true;
    }
    if (movie.genre_ids && movie.genre_ids.includes(parseInt(genre))) {
      return true;
    }
    return false;
  });

  console.log('Filtered Movies:', filteredMovies);

  const container = (filteredMovies && filteredMovies.length > 0) ?
    `
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            ${filteredMovies.map(movie => {
      return `<a href="/detail/${movie.id}?type=${movie.media_type}" >
                <div data-id="${movie.id}" class="card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300 group relative cursor-pointer">
                    <div class="relative w-full h-auto bg-gray-700 flex items-center justify-center">
                      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title || movie.name}" class="w-full h-auto">
                      <div class="absolute inset-0 bg-black bg-opacity-70 text-white p-3 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p class="text-center line-clamp-10">
                          ${movie.overview || 'No description available.'}
                        </p>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="font-bold text-lg">${movie.title || movie.name}</h3>
                      <p class="text-sm text-gray-400">${(movie.release_date || movie.first_air_date || '').substring(0, 4)}</p>
                      <p class="text-sm text-gray-400 mt-2">${movie.media_type === 'movie' ? 'Movie' : movie.media_type === 'tv' ? 'TV Series' : 'Unknown'}</p>
                    </div>
                  </div>        
                  </a>
              `;
    }).join('')}
          </div>
        `
    : '<p class="text-gray-400">No trending movies found.</p>';


  const search = await SearchBar();

  return `
    <!-- Hero Section -->
    <section class="text-center py-12 md:py-20">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Welcome to MovieMatch</h1>
      <p class="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">Discover, track, and find your next favorite movie or series. All in one place.</p>
      ${search}
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Trending</h2>
      <div id="trending-movies" class="min-h-[200px] flex items-center justify-center text-gray-500">
      ${container}
      </div>
    </section>
  `;
};

export default Home;