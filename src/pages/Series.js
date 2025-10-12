
import { fetchTvSeries } from '../services/api';

const Series = () => {

  setTimeout(async () => { // I am using a timeout to simulate loading time to show the loading state
    const trendingMovies = await fetchTvSeries();
    const container = document.getElementById('trending-movies');
    if (container) {
      if (trendingMovies && trendingMovies.length > 0) {
        container.innerHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            ${trendingMovies.map(movie => `
            <a href="/detail/${movie.id}?type=tv" >
              <div data-id="${movie.id}" class="card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300 group relative cursor-pointer">
                <div class="relative w-full h-auto bg-gray-700 flex items-center justify-center">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title || movie.name}" class="w-full h-auto">
                  <p class="absolute top-0 right-0 w-8 h-8 text-center font-bold rounded-full bg-white flex items-center justify-center">${movie.vote_average.toFixed(1)}</p>
                  <div class="absolute inset-0 bg-black bg-opacity-70 text-white p-3 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p class="text-center line-clamp-10">
                      ${movie.overview || 'No description available.'}
                    </p>
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="font-bold text-lg">${movie.title || movie.name}</h3>
                  <p class="text-sm text-gray-400">${(movie.release_date || movie.first_air_date || '').substring(0, 4)}</p>
                </div>
              </div>        
              </a>
            `).join('')}
          </div>
        `;
      } else {
        container.innerHTML = '<p class="text-gray-400">No trending movies found.</p>';
      }
    }
  }, 1000);


  return `
    
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Series</h2>
      <div id="trending-movies" class="min-h-[200px] flex items-center justify-center text-gray-500">Loading...</div>
    </section>
  `;
};

export default Series;