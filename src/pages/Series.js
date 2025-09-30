const SeriesCard = (title) => `
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
    <img src="https://via.placeholder.com/300x450/111827/808080?text=${encodeURIComponent(title)}" alt="${title}" class="w-full h-auto">
    <div class="p-4">
      <h3 class="font-bold text-lg">${title}</h3>
    </div>
  </div>
`;

const Series = () => {
  const seriesTitles = ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Office", "Friends", "The Mandalorian", "Chernobyl", "Fleabag", "The Crown", "Black Mirror"];

  return `
    <h1 class="text-3xl font-bold mb-6">Series</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      ${seriesTitles.map(title => SeriesCard(title)).join('')}
    </div>
  `;
};

export default Series;