import { SquareContainer, SquareLink,SquareButton } from "./styles";




export default function Square(props){
                return(
                      <SquareContainer borderStyle={props.borderStyle}>
													<SquareLink color={props.colorStyle} href="https://styled-components.com/" target="_blank"> 	
														{props.borderStyle ? props.borderStyle : 'Adicione a props no Square'}
													</SquareLink>
													<SquareButton background={props.backGroundStyle}>Botão</SquareButton>
												</SquareContainer>    
												      
                )
}