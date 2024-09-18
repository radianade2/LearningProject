// src/api/tmdbApi.ts
import apiConfig from './apiConfig';

export const category = {
    movie: 'movie',
    tv: 'tv'
};

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
};

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
};

const tmdbApi = {
    getMoviesList: async (type: keyof typeof movieType) => {
        const url = `${apiConfig.baseUrl}movie/${movieType[type]}`;
        return fetcher(url);
    },
    getTvList: async (type: keyof typeof tvType) => {
        const url = `${apiConfig.baseUrl}tv/${tvType[type]}`;
        return fetcher(url);
    },
    getVideos: async (cate: keyof typeof category, id: number) => {
        const url = `${apiConfig.baseUrl}${category[cate]}/${id}/videos`;
        return fetcher(url);
    },
    search: async (cate: keyof typeof category, params: Record<string, number>) => { //ini tadinya number tu any, aku coba ganti jadi number karena error
        const url = `${apiConfig.baseUrl}search/${category[cate]}`;
        const queryParams = new URLSearchParams({ ...params, api_key: apiConfig.apiKey }).toString();
        return fetch(`${url}?${queryParams}`).then(handleResponse);
    },
    detail: async (cate: keyof typeof category, id: number) => {
        const url = `${apiConfig.baseUrl}${category[cate]}/${id}`;
        return fetcher(url);
    },
    credits: async (cate: keyof typeof category, id: number) => {
        const url = `${apiConfig.baseUrl}${category[cate]}/${id}/credits`;
        return fetcher(url);
    },
    similar: async (cate: keyof typeof category, id: number) => {
        const url = `${apiConfig.baseUrl}${category[cate]}/${id}/similar`;
        return fetcher(url);
    }
};

// Fungsi untuk melakukan fetch data
const fetcher = async (url: string) => {
    const response = await fetch(`${url}?api_key=${apiConfig.apiKey}`);
    return handleResponse(response);
};

// Fungsi untuk menangani respons
const handleResponse = async (response: Response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default tmdbApi;