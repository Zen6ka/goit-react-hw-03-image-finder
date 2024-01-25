import React, { Component } from 'react';
import { Overlay, ModalWrapper } from './Modal.styled'

export class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);    
}

componentWillUnmount() {
	window.removeEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = event => {
	if (event.code === 'Escape') {
		this.props.onClose();
}
};

handleClick = event => {
	if (event.target === event.currentTarget) {
		this.props.onClose();
}
};

render() {
	const { image } = this.props;

return (
	<Overlay onClick={this.handleClick}>
		<ModalWrapper>
		<img src={image.largeImageURL} alt={ image.tags } />
		</ModalWrapper>
	</Overlay>
);
}
}