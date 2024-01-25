import React from 'react';
import { ImageGalleryLi, ImageGalleryItemImage } from '../ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onItemClick }) => {
	const handleClick = () => {
	onItemClick(image);
};

return (
	<ImageGalleryLi onClick={handleClick}>
		<ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
	</ImageGalleryLi>
);
};