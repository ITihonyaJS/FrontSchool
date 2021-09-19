import styled from "styled-components";

import {StyledTypography,Wrapper,StyledBlock,StyledButton} from "../../generalElements"

import Image4L from "./image/4L.png"
import Image4R from "./image/4R.png"


export const ReviewsContainer = styled.div`
background: #FFFFFF;
`

export const ReviewsBody = styled(Wrapper)`
padding: 3% 0;
`

export const ReviewsTitleBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 0 5% 0;
max-width: 494px;
margin: 0 auto;
`

export const TitleText = styled(StyledTypography)`
padding: 0 0 10%;
`

export const SubTitleText = styled(StyledTypography)`
text-align: center;
`

export const ReviewsBlock = styled(StyledBlock)`

`



export const TitleReviews = styled(StyledTypography)`
padding: 0px 0px 5% 10%;
`

export const NameUsers = styled(StyledTypography)`
background: #FFFFFF;
box-shadow: 13px 13px 31px rgba(0, 0, 0, 0.05);
position: absolute;
top: -20px;
left: 30px;
padding: 0 20% 5% 0;
`

export const TextReviews = styled.div`
background: #FFFFFF;
display: flex;
position: relative;
left: 30px;
padding: 20% 20% 5% 5%;
max-width: 655px;
font-style: italic;
font-size: 16px;
font-weight: 400;
line-height: 25px;
color: #05000B;
box-shadow: 13px 13px 31px rgba(0, 0, 0, 0.05);
z-index: 2;
`

export const RatingRevievs = styled.div`
display: flex;
position: absolute;
top: 10px;
right: 10px;
`

export const TextBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const ImageBlock = styled.div`
`

export const SliderBlock = styled.div`
display: flex;
justify-content: center;
`
export const ButtonLeftBlock = styled.div`
margin-right: 15px;
`
export const ButtonRightBlock = styled.div`

`

export const ButtonLeft = styled(StyledButton)`
width: 46px;
height: 46px;
background: url(${Image4L});
`

export const ButtonRight = styled(StyledButton)`
width: 46px;
height: 46px;
background: url(${Image4R});
`

// export const ArrowBlock = styled.div`
// position: absolute;
// top: 40%;
// left: 45%;
// `

export const UsersBlock = styled.div`
position: relative;
`

export const QuotesBlock = styled.div`
position: absolute;
top: 10px;
right: 10px;
`

export const QuotesItem = styled.div`
position: absolute;
top: 45px;
right: 40px;
z-index: 2;
`


