import React from 'react';
import { Btn } from './Button.styled'

export const Button = ({ onClick }) => {  
	return (
		<Btn type="button" onClick={onClick}>Load more</Btn>
);
}