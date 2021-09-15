import styled from "styled-components";

import {Wrapper} from "../../generalElements"



export const PartnersContainer = styled.div`
  background: #FFFFFF;
  height: 450px;
  padding: 121px 0px;  
`

export const PartnersWrapper = styled(Wrapper)`
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