
import styled from "styled-components";




export const CommunityContainer = styled.div`
  background: #E5E5E5;
  height: 540px;    
`

export const CommunityWrapper = styled.div`
position: relative;
  max-width: 1134px;
  margin: 0 auto;
`

export const CommunityBlock = styled.div`
position: absolute;
left: -168px;
display: flex;
justify-content: flex-start;
`

export const CommunityBlockСhapter1 = styled.div`
	display: flex;	
	justify-content:flex-start;
	align-items:flex-start;
	width	: 691px;
	height: 491px;
	margin: 0px 0px 50px 0px ;
	font-family: "Inter";	
	box-sizing: border-box;
`

export const CommunityBlockСhapter2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:space-between;	
	padding: 25px 0px 100px 80px;
	font-family: "Inter";	
	box-sizing: border-box;	
`

export const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:space-between;	
	margin: 0px 0px 25px 0px ;
	font-family: "Inter";		
`
export const TypographyBlock = styled.div`
	box-sizing: border-box;
	border-bottom: ${props => props.type_border === "yes" ? '1px solid #FFFFFF' :			  	
	   'transparent' };
	margin: ${props => props.type_margin === "yes" ? '0px 0px 20px 0px' :			  	
	   props.type_margin };
	padding: ${props => props.type_padding === "yes" ? '10px 0px 10px 0px' :			  	
	   props.type_padding };			
`

export const Typography = styled.p`	
	color: ${props => props.type_color === "white" ? '#FFFFFF' :			  	
	   props.type_color };
	font-size: ${props => props.type_fz === "average" ? '20px' : 
		props.type_fz === 'big' ? '50px' :
		props.type_fz === 'super big' ? '61px':
		props.type_fz };	
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

export const LinkBox = styled.div`
	display: flex;
	justify-content:flex-start;	
	margin: 0px 0px 35px 0px ;
	font-family: "Inter";
	font-size: 20px;		
`





/* export const ButtonBlock = styled.div`	
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
	justify-content:flex-start;				
` */


