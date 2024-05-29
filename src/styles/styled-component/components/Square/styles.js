

import styled from 'styled-components';

export const SquareContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 2px ${props => props.borderStyle ? props.borderStyle : 'solid'} green;
	width: 200px;
	height: 200px;
	gap: 20px;
`   

export const SquareLink = styled.a`
	text-decoration: none;
	font-size: 30px;
	color: ${props => props.colorStyle ? props.color : 'prink'};
`

export const SquareButton = styled.button`
	width: 150px;
	height: 40px;
	border: none;
	background-color: ${props => props.backGroundStyle ? props.color : 'purple'}; 
	color: white;
	border-radius: 5px;
	font-size: 16px;
`