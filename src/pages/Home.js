import SearchBar from '../components/SearchBar';

const Home = () => {
  // Contenido de ejemplo para las tarjetas
  const trendingContent = `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      ${Array(5).fill('').map(() => `
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/300x450/111827/808080?text=Poster" alt="Placeholder" class="w-full h-auto">
        </div>
      `).join('')}
    </div>
  `;

  return `
    <!-- Hero Section -->
    <section class="text-center py-12 md:py-20">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Welcome to MovieMatch</h1>
      <p class="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">Discover, track, and find your next favorite movie or series. All in one place.</p>
      ${SearchBar()}
    </section>

    <!-- Trending Movies Section -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Trending Movies</h2>
      ${trendingContent}
    </section>

    <!-- Trending Series Section -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Trending Series</h2>
      ${trendingContent}
    </section>
  `;
};

export default Home;