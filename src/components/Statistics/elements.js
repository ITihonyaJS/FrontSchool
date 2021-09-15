import styled from "styled-components";

import {Wrapper,StyledBlock,StyledTypography} from "../../generalElements"


export const ContainerBlock = styled.div`
${(props) => props.backG && `background: ${props.backG}`};
`

export const WrapperBlock = styled(Wrapper)`
`

export const StatisticsBlock = styled(StyledBlock)`
justify-content: space-between;
align-items: center;
margin: 10% 0px 10% 0px;
`

export const StatisticsItem = styled(StyledBlock)`
width: 100% ;
max-width: 261px;
height:100%;
max-height:371px;
`
export const AbsoluteBlock = styled(StyledBlock)`
flex-direction: column;
justify-content: center;
align-items:center;
position:absolute;
top:40px;
`

export const TextBlock = styled.div`
`



export const Typography = styled(StyledTypography)`
`