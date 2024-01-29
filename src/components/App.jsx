import React, { Component } from 'react';
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Button} from './Button/Button';
import {Modal} from './Modal/Modal';
import {Loader} from './Loader/Loader';
import { AppWrapper } from './App.styled';
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getImages} from './API/API';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalImages: 0,
    isLoading: false,
  };

async componentDidUpdate(prevProps, prevState) {
	if (
		prevState.query !== this.state.query ||
		prevState.page !== this.state.page
	) {
		try {
			this.setState({ isLoading: true });
			
			const trimmedQuery = this.state.query.split('/').pop().trim();

			if (trimmedQuery === '') {
				toast.error('Please enter key words for search');
				return;
			}

			const initialParams = {
				q: trimmedQuery,
				image_type: 'photo',
				orientation: 'horizontal',
				page: this.state.page,
				per_page: 12,
			};

			const initialImages = await getImages(initialParams.q);
			if (initialImages.total === 0) {
				toast.error(
					'Sorry, there are no images matching your search query. Please try again.'
				);
				return;
			}
			 else {
				this.setState(prevState => ({
					images: [...prevState.images, ...initialImages.hits],
					totalImages: initialImages.totalHits,
				}));
				this.setState({ error: false });
			}
		} catch (error) {
			toast.error('Oops! Something went wrong. Please try again later.');
		} finally {
			this.setState({ isLoading: false });
		}
	}
}

addQuery = newQuery => {
	this.setState({
		query: `${Date.now()}/${newQuery.query}`,
		page: 1,
		images: [],
	});
};

handleLoadMore = () => {
	this.setState(prevState => {
		return {
			page: prevState.page + 1,
		};
	});
};

// componentDidUpdate(_prevProps, prevState) { 
// 	if (prevState.query !== this.state.query) {       
// 		this.setState({ images: [], page: 1, isLastPage: false }, () => {
// 		this.fetchImages();
// });
// }
// }

// fetchImages = async() => {
// 	const { query, page } = this.state;
// 		try {
// 			this.setState({ isLoading: true });
// 			const response = await getImages(query, page);
// 			const { hits, totalHits } = response;

// if (hits.length === 0) { 
// return toast('Sorry, there are no images matching your request...', {type: "info", position: toast.POSITION.TOP_CENTER});
// }

// const modifiedHits = hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
// 	id,
// 	tags,
// 	webformatURL,
// 	largeImageURL
// }));

// this.setState(prevState => ({
// 	images: [...prevState.images, ...modifiedHits],
// 	page: prevState.page + 1,
// 	isLastPage: prevState.images.length + modifiedHits.length >= totalHits,
// }));
// } 
// 	catch (error) {
// 	this.setState({ error: error.message });
// }
// 	finally{
// 	this.setState({ isLoading: false });
// };
// };

handleSearchSubmit = query => {
	if (this.state.query === query) {
	return;
}
		this.setState({ query: query, page: 1, images: [], error: null, isLastPage: false });
};

// handleImageClick = image => {
// 	this.setState({ selectedImage: image, showModal: true });
// 	document.body.style.overflow = 'hidden';
// };

// handleModalClose = () => {
// 	this.setState({ selectedImage: null, showModal: false });
// 	document.body.style.overflow = 'auto';
// };

render() {
	const { images, isLoading, error, showModal, selectedImage, isLastPage } = this.state;

return (
	<AppWrapper>
		<ToastContainer
			transition={Bounce}
			role={alert}
			autoClose={3000}
			theme="light"
		/>
				<Searchbar onSubmit={this.handleSearchSubmit} />
{error && <p>Error: {error}</p>}

					<ImageGallery images={images} onItemClick={this.handleImageClick} />
						{isLoading && <Loader />}

						{!isLoading && images.length > 0 && !isLastPage && (
							<Button onClick={this.fetchImages} />
)}
						{showModal && (
						<Modal image={selectedImage} onClose={this.handleModalClose} />
)}
	</AppWrapper>
);
}
}