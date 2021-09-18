import styled from "styled-components";

import {StyledTypography,StyledButton,StyledBlock} from "../../../generalElements"


export const GeneralBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5% 23%;
background: #FDEEE7;
border-radius: 30px;
position: relative;
z-index: 3;
`

export const Title = styled.div``
export const TextTitle = styled(StyledTypography)``
export const SubTitle = styled.div`
padding: 35px 0;
`
export const TextSubTitle = styled(StyledTypography)``
export const EmailForm = styled(StyledBlock)`
border: 1px solid rgba(5, 0, 11, 0.1);
box-sizing: border-box;
border-radius: 4px;
`
export const Email = styled.input`
background: #FDEEE7;
width: 50%;
outline: none;
padding-left: 10px;  
  ::placeholder {
   color: #A6A6A6;    
  }
`
export const Button = styled(StyledButton)``
export const ButtonText = styled(StyledTypography)``

export const NearShadow = styled(StyledBlock)`
background: #FDEEE7;
opacity: 0.4;
border-radius: 30px;
width: 90%;
height: 90%;
position: absolute;
top: -10%;
z-index: -1;
`
export const DistantShadow = styled(StyledBlock)`
background: #FDEEE7;
opacity: 0.3;
border-radius: 30px;
width: 80%;
height: 80%;
position: absolute;
top: -20%;
z-index:-2;
`