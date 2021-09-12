
import styled from "styled-components";



export const HeaderContainer = styled.div`
  background: linear-gradient(264.47deg, #2E43F0 29.39%, #6677FF 93.49%);
  height: 820px;
  padding: 60px 0 70px;  
`

export const HeaderWrapper = styled.div`
  max-width: 1134px;
  margin: 0 auto;
`

export const HeaderBlock1 = styled.div`
	display: flex;	
	justify-content:space-between;
	align-items:center;	
	margin: 0px 0px 48px 0px;	
`

export const HeaderBlock2 = styled.div`
	display: flex;
	justify-content:space-between;	
	margin: 0px 0px 82px 0px;		
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

export const AboutTypographyBlock = styled.div`
	box-sizing: border-box;
	border-bottom: ${props => props.type_border === "yes" ? '1px solid #FFFFFF' :			  	
	   'transparent' };
	margin: ${props => props.type_margin === "yes" ? '0px 0px 20px 0px' :			  	
	   'transparent' };
	padding: ${props => props.type_padding === "yes" ? '20px 0px 20px 0px' :			  	
	   'transparent' };			
`

export const AboutButtonContainer = styled.div`
	display: flex;	
	justify-content:flex-start;				
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