import { fetchDetail } from "../services/api";

const Detail = async (params) => {
  const { id } = params;
  const queryParams = new URLSearchParams(window.location.search);
  const type = queryParams.get('type') || 'movie';


  const data = await fetchDetail(id, type);

  console.log('Detail Data:', data);

  return `
    <section class="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
    
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-gray-800 rounded-xl shadow-2xl p-6">
        
        <div class="flex-shrink-0 w-full md:w-80">
            ${data.poster_path ? 
                `<img 
                    src="https://image.tmdb.org/t/p/w500${data.poster_path}" 
                    alt="${data.title || data.name || 'Poster'}" 
                    class="w-full h-auto rounded-lg shadow-lg"
                >` 
                : 
                `<div class="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-lg">
                    No Poster Available
                </div>`
            }
            
            ${data.homepage ? 
                `<a 
                    href="${data.homepage}" 
                    target="_blank" 
                    class="mt-4 block w-full text-center py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition duration-200"
                >
                    Visit Official Website
                </a>` 
                : ''
            }
        </div>
        
        <div class="flex-grow">
            <h1 class="text-4xl sm:text-5xl font-extrabold text-indigo-400 mb-2">${data.title || data.name || 'Title Unknown'}</h1>
            ${data.tagline ? `<p class="text-xl italic text-gray-400 mb-6">"${data.tagline}"</p>` : ''}

            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-sm">
                
                <div class="p-3 bg-gray-700 rounded-md">
                    <p class="font-bold text-gray-300">Status</p>
                    <p class="text-indigo-300">${data.status || 'N/A'}</p>
                </div>
                
                <div class="p-3 bg-gray-700 rounded-md">
                    <p class="font-bold text-gray-300">${data.release_date ? 'Release Date' : 'First Air Date'}</p>
                    <p>${data.release_date || data.first_air_date || 'N/A'}</p>
                </div>

                <div class="p-3 bg-gray-700 rounded-md">
                    <p class="font-bold text-gray-300">${data.runtime ? 'Runtime' : 'Episodes / Seasons'}</p>
                    <p>
                        ${data.runtime 
                            ? `${data.runtime} min.` 
                            : `${data.number_of_episodes || '?'} Episodes in ${data.number_of_seasons || '?'} Seasons`
                        }
                    </p>
                </div>

                ${data.revenue ? 
                    `<div class="p-3 bg-gray-700 rounded-md">
                        <p class="font-bold text-gray-300">Revenue</p>
                        <p class="text-green-400">${data.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || 'N/A'}</p>
                    </div>`
                    : data.budget ? 
                    `<div class="p-3 bg-gray-700 rounded-md">
                        <p class="font-bold text-gray-300">Budget</p>
                        <p>${data.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || 'N/A'}</p>
                    </div>`
                    : ''
                }
            </div>

            <h2 class="text-2xl font-bold mb-3 text-indigo-300">Overview</h2>
            <p class="text-gray-300 leading-relaxed mb-8">
                ${data.overview || 'Sorry, no overview is available for this production.'}
            </p>

            ${data.created_by && data.created_by.length > 0 ? 
                `
                <h2 class="text-xl font-bold mb-2">Created By</h2>
                <p class="text-lg text-gray-300 mb-6">
                    ${data.created_by.map(creator => `
                        <span class="inline-block bg-gray-700 text-sm py-1 px-3 rounded-full mr-2 mb-2">
                            ${creator.name}
                        </span>
                    `).join('')}
                </p>
                ` 
                : ''
            }
            
            ${data.genres && data.genres.length > 0 ? 
                `
                <h2 class="text-xl font-bold mb-2">Genres</h2>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${data.genres.map(genre => `
                        <span class="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md hover:bg-red-700 cursor-default">
                            ${genre.name}
                        </span>
                    `).join('')}
                </div>
                `
                : ''
            }
            
        </div>
    </div>

    <hr class="my-8 border-gray-700 max-w-7xl mx-auto">
    
    ${data.belongs_to_collection ? 
        `
        <div class="max-w-7xl mx-auto mt-8 p-6 bg-gray-800 rounded-xl shadow-2xl text-center">
            <h2 class="text-3xl font-bold text-indigo-400 mb-2">Part of the Collection</h2>
            <p class="text-xl text-gray-300">${data.belongs_to_collection.name || 'Movie Collection'}</p>
        </div>
        `
        : data.last_episode_to_air ? 
        `
        <div class="max-w-7xl mx-auto mt-8 p-6 bg-gray-800 rounded-xl shadow-2xl">
            <h2 class="text-3xl font-bold text-indigo-400 mb-4">Last Episode Aired</h2>
            <div class="flex flex-col sm:flex-row gap-6">
                <div>
                    <h3 class="text-xl font-semibold">${data.last_episode_to_air.name || 'Untitled Episode'}</h3>
                    <p class="text-gray-400 mb-3">S${data.last_episode_to_air.season_number} E${data.last_episode_to_air.episode_number} | Aired On: ${data.last_episode_to_air.air_date || 'N/A'}</p>
                    <p class="text-gray-300">
                        ${data.last_episode_to_air.overview || 'No overview is available for this episode.'}
                    </p>
                    <div class="mt-3 flex items-center gap-4">
                        <span class="text-lg font-bold">Rating:</span>
                        <span class="text-yellow-400 font-bold">${data.last_episode_to_air.vote_average ? data.last_episode_to_air.vote_average.toFixed(1) : '0.0'}</span> / 10
                    </div>
                </div>
            </div>
        </div>
        ` 
        : ''
    }
</section>
  `;
};

export default Detail;