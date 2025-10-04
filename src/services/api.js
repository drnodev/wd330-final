


export const API_URL = import.meta.env.VITE_API_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchHome = async (query) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    const response = await fetch(`${API_URL}/3/trending/all/week?language=en-US`, options);
    const data = await response.json();
    return data.results;
}


export const fetchTvSeries = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    const res = await fetch(`${API_URL}/3/discover/tv?language=en-US&sort_by=popularity.desc&vote_average.gte=5`, options);
    const data = await res.json();
    return data.results;
}

export const fetchMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    const res = await fetch(`${API_URL}/3/discover/movie?language=en-US&sort_by=popularity.desc&vote_average.gte=5`, options);
    const data = await res.json();
    return data.results;
}



export const suggestion = async (gen) => {

    const type = gen === "movie"? "movie" : "tv";
    const randomPage = Math.floor(Math.random() * 20) + 1;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    const res = await fetch(`${API_URL}/3/discover/${type}?language=en-US&sort_by=popularity.desc&vote_average.gte=5&page=${randomPage}`, options);
    const data = await res.json();
    const randomItem = data.results[Math.floor(Math.random() * data.results.length)];
    return randomItem
}
