import styled from "styled-components";

export const HeaderWrapper = styled.div`
  max-width: 1134px;
  margin: 0 auto;
`

export const HeaderContainer = styled.div`
  background: linear-gradient(264.47deg, #2E43F0 29.39%, #6677FF 93.49%);
  padding: 60px 0 70px;  
`

export const HeaderBlock1 = styled.div`
	display: flex;	
	justify-content:space-between;
	align-items:center;	
	margin: 0px 0px 48px 0px;
	font-family: "Inter"
`

export const HeaderBlock2 = styled.div`
	display: flex;
	justify-content:space-between;	
	margin: 0px 0px 82px 0px;
	font-family: "Inter";	
`

export const ButtonBlock = styled.div`
	cursor: pointer;
	max-width: 172px;
	max-height: 62px;	
	padding: 15px 30px 15px 30px;	
	background-color: ${props => props.type_background === "primary" ? '#FF5A05' : props.type_background === 'secondary' ? 'rgba(255, 90, 5, 0.1)' : 'transparent' };		
	border: ${props => props.type_border === 'border' ? '1px solid #808080' : props.type_border ? '' : 'transparent' };
	border-radius: 4px;
	text-align: center;	
	color: #FFFFFF;
	font-size: 20px;	
	font-weight: 500;
`
export const NavContainer = styled.ul`
	display: flex;
	width: 495px;
	height: 32px;
	justify-content:space-between;
	align-items: center;
	font-size: 20px;	
	font-weight: 500;
	color: #FFFFFF;			
`

export const AboutBlock = styled.div`
	display: flex;
	flex-direction:column;	
	justify-content:space-between;
	width: 465px;
	height: 475px;				
`

export const AboutTypographyContainer = styled.div`
	display: flex;
	flex-direction:column;	
	justify-content:space-between;
	font-size: 20px;
	color: #FFFFFF;
	font-weight: 500;
	width: 465px;
	height: 370px;
	margin: 0px 0px 43px 0px;			
`

export const AboutButtonContainer = styled.div`
	display: flex;	
	justify-content:space-between;
	align-items:center;				
`

export const Typography = styled.p`	
	color: ${props => props.type_color === "white" ? '#FFFFFF' :			  	
	   'black' };
	font-size: ${props => props.type_fz === "average" ? '20px' : 
		props.type_fz === 'big' ? '50px' :
		props.type_fz === 'super big' ? '61px':
	 	'16px' };	
	font-weight: ${props => props.type_fw === "average" ? '600' :
		props.type_fw === 'big' ? '700' :	  	
	   '500' };	
	font-style: ${props => props.type_fs === "italic" ? 'italic' :			  	
	   'normal' };	
	text-transform: ${props => props.type_tt === "uppercase" ? 'uppercase' :			  	
	   'transparent' };
	line-height: ${props => props.type_lh === "average" ? '32px' :
		props.type_lh === 'big' ? '60px' :
		props.type_lh === 'super big' ? '73px':	  	
	   '26px' };		
	letter-spacing: ${props => props.type_ls === "yes" ? '3px' :			  	
	   'transparent' };		
	opacity: ${props => props.type_op === "yes" ? '0.7' :			  	
	   'transparent' };
`