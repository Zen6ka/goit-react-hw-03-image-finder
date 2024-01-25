import React from 'react';
import { LoadWrapper } from '../Loader/Loader.styled';
import { DNA } from 'react-loader-spinner';

export const Loader = () => {
	return (
		<LoadWrapper>
			<DNA
			visible={true}
			height="80"
			width="80"
			ariaLabel="dna-loading"
			wrapperStyle={{}}
			wrapperClass="dna-wrapper"
/>
		</LoadWrapper>
);
};