import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from '../ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images, onItemClick }) => {
	return (
		<ImageGalleryList>
		{images.map(image => (
			<ImageGalleryItem
			key={image.id}
			image={image}
			onItemClick={onItemClick}
			/>
))}
		</ImageGalleryList>
);
}