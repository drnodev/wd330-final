export const API_URL = import.meta.env.VITE_API_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchHome = async (query, genre) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    let url = '';
    if (!query || query === '') {
        url = `${API_URL}/3/trending/all/week?language=en-US`
    }else{
        url = `${API_URL}/3/search/multi?include_adult=false&language=en-US&page=1&query=${query}`
    }
    const response = await fetch(url, options);
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

    const type = gen === "movie" ? "movie" : "tv";
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


export const fetchGenres = async() => {
    const genresKey = `genres`;
    let genres      = [];
    const storedGenres = localStorage.getItem(genresKey);
    if (storedGenres) {
        genres = JSON.parse(storedGenres);
        return genres;
    }else {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };

        
        const fetchMoviesGenres = await fetch(`${API_URL}/3/genre/movie/list?language=en-US`, options)
        const moviesResponse    = await fetchMoviesGenres.json();
        const movieGenres       = moviesResponse.genres;

        
        const fetchTvGenres = await fetch(`${API_URL}/3/genre/tv/list?language=en-US`, options)
        const tvResponse    = await fetchTvGenres.json();
        const tvGenres       = tvResponse.genres;

        const allGenres = [...movieGenres, ...tvGenres];
        const uniqueGenresMap = new Map();
        
        allGenres.forEach(genre => {
            uniqueGenresMap.set(genre.id, genre);
        });
        genres = Array.from(uniqueGenresMap.values());
        const sortedGenres = genres.sort((a, b) => a.name.localeCompare(b.name));
        console.log('Fetched and stored genres:', sortedGenres);
        localStorage.setItem(`${genresKey}`, JSON.stringify(sortedGenres));
        return sortedGenres;
    }
};


export const fetchDetail = async (id, type) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    const res = await fetch(`${API_URL}/3/${type}/${id}?language=en-US`, options);
    const data = await res.json();
    return data;
}

export const fetchCredits = async (id, type) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    const res = await fetch(`${API_URL}/3/${type}/${id}/credits?language=en-US`, options);
    const data = await res.json();
    return data.cast;
}

export const fetchVideos = async (id, type) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    const res = await fetch(`${API_URL}/3/${type}/${id}/videos?language=en-US`, options);
    const data = await res.json();
    return data.results;
}