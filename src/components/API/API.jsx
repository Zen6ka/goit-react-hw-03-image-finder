import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '40728420-bc103c040fbb3ac6f510e1808';
const perPage = 28;

export const getImages = async (query, page) => {
	const response = await axios.get(
	`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
);
	return response.data;
};

