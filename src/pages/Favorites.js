const FavoriteItemCard = (title, type) => `
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
    <img src="https://via.placeholder.com/300x450/111827/808080?text=${encodeURIComponent(title)}" alt="${title}" class="w-full h-auto">
    <div class="p-4">
      <h3 class="font-bold text-lg">${title}</h3>
      <p class="text-sm text-gray-400">${type}</p>
    </div>
  </div>
`;

const Favorites = () => {
  // Contenido de ejemplo
  const favoriteMovies = ["Inception", "The Matrix", "Dune"];
  const favoriteSeries = ["Breaking Bad", "The Office", "Stranger Things"];

  return `
    <h1 class="text-3xl font-bold mb-8">My Favorites</h1>

    <section>
      <h2 class="text-2xl font-bold mb-4">Favorite Movies</h2>
      ${
        favoriteMovies.length > 0
          ? `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
               ${favoriteMovies.map(title => FavoriteItemCard(title, 'Movie')).join('')}
             </div>`
          : `<p class="text-gray-400">You haven't added any favorite movies yet.</p>`
      }
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Favorite Series</h2>
      ${
        favoriteSeries.length > 0
          ? `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
               ${favoriteSeries.map(title => FavoriteItemCard(title, 'Series')).join('')}
             </div>`
          : `<p class="text-gray-400">You haven't added any favorite series yet.</p>`
      }
    </section>
  `;
};

export default Favorites;