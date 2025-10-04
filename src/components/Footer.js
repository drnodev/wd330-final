const Footer = () => {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-sm text-gray-400">
          &copy; ${currentYear} MovieMatch. All rights reserved. (WDD330 Final Project - Nelson Ortega)
        </div>
      </div>
    </footer>
  `;
};

export default Footer;