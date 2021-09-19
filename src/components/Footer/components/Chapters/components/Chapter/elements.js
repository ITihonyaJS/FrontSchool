import styled from "styled-components";

import {StyledTypography} from "../../../../../../generalElements"

export const GeneralChapterBlock = styled.div`
display: flex;
flex-direction: column;
`
export const TextBlock = styled.div`
padding: 0 0 25px;
`
export const TextTitle = styled(StyledTypography)``
export const LinkBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const Link = styled.a`
color: #FFFFFF;
font-size: 16px;
line-height: 25px;
font-weight: 500;
opacity: 0.5;
padding-bottom: 10px;
`