import styled from 'styled-components';

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 1500;
`;

export const ModalWrapper = styled.div`
	max-width: 130vh;
	max-height: 60vw;
`;