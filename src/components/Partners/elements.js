import styled from "styled-components";



export const PartnersContainer = styled.div`
  background: #E5E5E5;
  height: 450px;
  padding: 121px 0px;  
`

export const PartnersWrapper = styled.div`
max-width: 1134px;
margin: 0 auto;
`


export const ListPartnersBlock = styled.ul`
height: 205px;
display: flex;
flex-wrap: wrap;
justify-content:center;
align-content: space-evenly;
margin: 0px auto;		
`

export const ItemBlock = styled.div`
box-sizing: border-box;
margin: 0px 10px;
display:flex;
justify-content: center;
align-items: center;
width: 261px;
height: 82px;	
padding: 17px 48px;	
background: #FFFFFF;	
border-radius: 4px; 
box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.2); 
`


// export const Typography = styled.p`	
// 	color: ${props => props.type_color === "white" ? '#FFFFFF' :			  	
// 	   'black' };
// 	font-size: ${props => props.type_fz === "average" ? '20px' : 
// 		props.type_fz === 'big' ? '50px' :
// 		props.type_fz === 'super big' ? '61px':
// 	 	'16px' };	
// 	font-weight: ${props => props.type_fw === "average" ? '600' :
// 		props.type_fw === 'big' ? '700' :	  	
// 	   '500' };	
// 	font-style: ${props => props.type_fs === "italic" ? 'italic' :			  	
// 	   'normal' };	
// 	text-transform: ${props => props.type_tt === "uppercase" ? 'uppercase' :			  	
// 	   'transparent' };
// 	line-height: ${props => props.type_lh === "average" ? '32px' :
// 		props.type_lh === 'big' ? '60px' :
// 		props.type_lh === 'super big' ? '73px':	  	
// 	   '26px' };		
// 	letter-spacing: ${props => props.type_ls === "yes" ? '3px' :			  	
// 	   'transparent' };		
// 	opacity: ${props => props.type_op === "yes" ? '0.7' :			  	
// 	   'transparent' };
// `