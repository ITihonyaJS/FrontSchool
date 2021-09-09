import styled from "styled-components";


export const LinkBlock = styled.div`	
	display:flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;		
	border-radius: 4px;	
	color: #05000B;
	font-size: 20px;		
	font-weight: 600;
	line-height: 32px;
	box-sizing: border-box;
	margin: 0px 35px 0px 15px;
`

export const ButtonBlock = styled.div`	
	display:flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	width: 172px;
	height: 62px;	
	padding: 15px 30px;	
	background-color: ${props => props.type_background === "primary" ? '#FF5A05' : props.type_background === 'secondary' ? 'rgba(255, 90, 5, 0.1)' : 'transparent' };		
	border: ${props => props.type_border === 'border' ? '1px solid #808080' : props.type_border ? '' : 'transparent' };
	border-radius: 4px;	
	color: #FFFFFF;
	font-size: 20px;		
	font-weight: 500;
	box-sizing: border-box;
	margin: 0px 40px 0px 0px;
`

export const GalkaBlock = styled.div`	
	display:flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	
`







// export const ViewBlock = styled.div`
//   display: ${(props) => (props.displayView ? props.displayView : 'flex')};
//   ${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
//   ${(props) => props.align && `align-items: ${props.align}`};
//   ${(props) => props.flex && `flex: ${props.flex}`};
//   ${(props) => props.justify && `justify-content: ${props.justify}`};
//   ${(props) => props.positionView && `position: ${props.positionView}`};
//   ${(props) => props.top && `top: ${props.top}`};
//   ${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
//   ${(props) => props.outer && `margin: ${props.outer}`};
//   ${(props) => props.inner && `padding: ${props.inner}`};
//   ${(props) => props.width && `width: ${props.width}`};
//   ${(props) => props.zIndex && `z-index: ${props.zIndex}`};
//   ${(props) => props.isPointer && 'cursor: pointer'};
//   ${(props) => props.boxSizing && `box-sizing: ${props.boxSizing}`};
// `

// export const Button = styled.div`
//   cursor: pointer;
//   background: ${props => props.primary ? '#FF5A05' : props.secondary ? 'rgba(255, 90, 5, 0,1)' : 'transparent' };
// `