const MovieCard = (title) => `
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
    <img src="https://via.placeholder.com/300x450/111827/808080?text=${encodeURIComponent(title)}" alt="${title}" class="w-full h-auto">
    <div class="p-4">
      <h3 class="font-bold text-lg">${title}</h3>
    </div>
  </div>
`;

const Movies = () => {
  const movieTitles = ["Inception", "The Dark Knight", "Interstellar", "Parasite", "The Matrix", "Forrest Gump", "Pulp Fiction", "The Godfather", "Dune", "Blade Runner 2049"];

  return `
    <h1 class="text-3xl font-bold mb-6">Movies</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      ${movieTitles.map(title => MovieCard(title)).join('')}
    </div>
  `;
};

export default Movies;