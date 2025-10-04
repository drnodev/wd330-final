
import { suggestion } from "../services/api";


export const Notification = async (type) => {

    const content = await suggestion(type);
    
  




  return `
    <div id="suggestion-notification" class="fixed bottom-4 right-4 md:top-20 md:bottom-auto w-full max-w-sm bg-gray-800 rounded-lg shadow-lg p-4 flex items-start space-x-4 z-50 transform transition-all duration-500 ease-out translate-y-full md:translate-y-0 md:translate-x-full opacity-0">

    <button id="close-notification-btn" class="absolute top-2 right-2 text-gray-400 hover:text-white" aria-label="Close">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex-shrink-0">
        <img class="h-24 w-16 rounded object-cover" src="https://image.tmdb.org/t/p/w500${content.poster_path}" alt="img ${content.title}">
      </div>

      <div class="flex-1">
        <p class="text-sm text-gray-400">Here's a suggestion for you.</p>
        <h3 class="font-bold text-white">${content.title}</h3>
        <p class="text-sm text-gray-300"> ${content.vote_average.toFixed(1)}</p>
        <a href="/detail/${content.id}" class="mt-2 inline-block text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
          Watch now &rarr;
        </a>
      </div>
    </div>
  `;
};



export const showNotification = (type)=> {
  const notificationContainer = document.getElementById('notification-container');
  if (!notificationContainer) return;


  setTimeout(async () => {

   const notification = await Notification(type)

    notificationContainer.innerHTML = notification
    const notificationElement = document.getElementById('suggestion-notification');
  
    notificationElement.classList.remove('opacity-0', 'translate-y-full', 'md:translate-x-full');
    const closeBtn = document.getElementById('close-notification-btn');
    const closeNotification = () => {
        notificationElement.classList.add('opacity-0', 'translate-y-full', 'md:translate-x-full');
    };
    closeBtn.addEventListener('click', closeNotification);
  }, 1000);

  
}