import styled from "styled-components";

import {StyledTypography, StyledButton} from "../../../../generalElements"

export const AboutGeneralBlock = styled.div`
	display: flex;
	flex: 1 1 30%;
	flex-direction:column;	
	justify-content:space-between;
	padding: 25px 0px 100px;
	margin:0px 20px 0px 0px ;
`

export const AboutTextBlock = styled.div`
	display: flex;
	flex-direction:column;	
	justify-content:space-between;
	padding:0px 0px 43px;
					
`

export const AboutButtonBlock = styled.div`
	display: flex;	
	justify-content:flex-start;			
`

export const AboutTypography = styled(StyledTypography)`
${(props) => props.padding && `padding: ${props.padding}`};
`

export const AboutButton = styled(StyledButton)`
	margin: 0px 45px 0px 0px;
`