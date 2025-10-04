
const Detail = (params) => {
  const { id } = params;
  
  return `
    <section class="py-12">
      <h1 class="text-4xl font-extrabold mb-4">Detail Page</h1>
      <p class="text-lg text-gray-300">Showing details for ID: <span class="font-bold text-indigo-400">${id}</span></p>
      <div class="mt-8 text-gray-400">Content for this item will be loaded here...</div>
    </section>
  `;
};

export default Detail;