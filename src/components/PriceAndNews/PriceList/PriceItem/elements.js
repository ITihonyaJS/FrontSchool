import styled from "styled-components";

import Drop from "./image/1.png"
import Gaz from "./image/2.png"
import Vector from "./image/4.png"


import {StyledTypography} from "../../../../generalElements"

export const GeneralBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #FFFFFF;
border: 1px solid rgba(31, 55, 255, 0.1);
border-radius: 10px;
width: 455px;
height: 670px;
padding: 0 5% 5%5%;
margin:0 10px ;
`
export const TextBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
&:before {
	content: '';
	background: url(${Drop})center no-repeat;
	width: 200px;
	height: 85px;	
	display: inline-block;	
}

`
export const Title = styled(StyledTypography)``
export const Price = styled(StyledTypography)``
export const SubTitle = styled(StyledTypography)``
export const DescriptionBlock = styled.div`

`
export const Description = styled(StyledTypography)`
padding-left: 25%;
&:before {
	content: '';
	background: url(${Vector})center no-repeat;	
	width: 25px;
	height: 25px;	
	display: inline-block;
	margin-right: 15px;	
	}
`
export const ButtonBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Icon = styled.div`
color:green;
`