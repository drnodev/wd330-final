import { createClient } from "@supabase/supabase-js";
import { data } from "autoprefixer";

export const API_URL = import.meta.env.VITE_API_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

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
    } else {
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


export const fetchGenres = async () => {
    const genresKey = `genres`;
    let genres = [];
    const storedGenres = localStorage.getItem(genresKey);
    if (storedGenres) {
        genres = JSON.parse(storedGenres);
        return genres;
    } else {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };


        const fetchMoviesGenres = await fetch(`${API_URL}/3/genre/movie/list?language=en-US`, options)
        const moviesResponse = await fetchMoviesGenres.json();
        const movieGenres = moviesResponse.genres;


        const fetchTvGenres = await fetch(`${API_URL}/3/genre/tv/list?language=en-US`, options)
        const tvResponse = await fetchTvGenres.json();
        const tvGenres = tvResponse.genres;

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



export const isLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}

export const logIn = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('favorites');
    window.location.href = '/';
}

export const signUpUser = async (email, password) => {
    //check if user already exists
    const { data: users } = await supabase
        .from('users')
        .select("*")
        .eq('email', email)

    if (users && users.length > 0) {
        return { error: { message: 'User already exists' } };
    }

    const { data, error } = await supabase
        .from('users')
        .insert([
            { email: email, password: password },
        ])
        .select()
    return { data, error };
}


export const singInUser = async (email, password) => {

    const { data, error } = await supabase
        .from('users')
        .select("*")
        .eq('email', email)
        .eq('password', password)

    if (data && data.length > 0) {
        logIn(data[0]);
        return {data: data[0], error: { message: 'Ok' } };
    }
    
    return {data: null, error: { message: 'Invalid credentials' } };
}

export const addFavorite = async (userId, movieId, movieType, title, poster_path) => {
    console.log('Adding favorite:', { userId, movieId, movieType });
    const { data, error } = await supabase
        .from('favorites')
        .insert([
            { user: userId, mtdbid: movieId, type: movieType, title, poster_path },
        ])
        .select()
    return { data, error };
}

export const removeFavorite = async (userId, movieId) => {
    const { data, error } = await supabase
        .from('favorites')
        .delete()
        .eq('user', userId)
        .eq('mtdbid', movieId)

    return { data, error };
}

export const getFavorites = async (userId, mtype) => {
    const { data, error } = await supabase
        .from('favorites')
        .select("*")
        .eq('user', userId)
        .eq('type' , mtype);

        console.log('Fetched favorites for user', userId, ':', data, error);

    return { data, error };
}