import styled from "styled-components";
import Romb from "./components/Statistics/image/romb.png"

// export const HeaderContainer = styled.div`
//   background: linear-gradient(264.47deg, #2E43F0 29.39%, #6677FF 93.49%);
//   height: 820px;
//   padding: 60px 0 70px;  
// `

// export const HeaderWrapper = styled.div`
//   max-width: 1134px;
//   margin: 0 auto;
// `

//Шаблон______________________________________________________________________________________

export const ContainerBlock = styled.div`
display: ${(props) => (props.displayView ? props.displayView : 'flex')};
box-sizing: ${(props) => (props.boxS ? props.boxS : 'border-box')};
${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
${(props) => props.alignI && `align-items: ${props.alignI}`};
${(props) => props.alignC && `align-content: ${props.alignC}`};
${(props) => props.flex && `flex: ${props.flex}`};
${(props) => props.justify && `justify-content: ${props.justify}`};
${(props) => props.positionView && `position: ${props.positionView}`};
${(props) => props.top && `top: ${props.top}`};
${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
${(props) => props.outer && `margin: ${props.outer}`};
${(props) => props.inner && `padding: ${props.inner}`};
${(props) => props.width && `width: ${props.width}`};
${(props) => props.maxW && `max-width: ${props.maxW}`};
${(props) => props.minW && `min-width: ${props.minW}`};
${(props) => props.height && `height: ${props.height}`};
${(props) => props.zIndex && `z-index: ${props.zIndex}`};
${(props) => props.backG && `background: ${props.backG}`};
${(props) => props.border && `border: ${props.border}`};
${(props) => props.borderR && `border-radius: ${props.borderR}`};
${(props) => props.isPointer && 'cursor: pointer'};
${(props) => props.color && `color: ${props.color}`};
${(props) => props.ff && `font-family: ${props.ff}`};
${(props) => props.fz && `font-size: ${props.fz}`};
${(props) => props.fw && `font-weight: ${props.fw}`};
${(props) => props.lh && `line-height: ${props.lh}`};
${(props) => (props.text ? props.text : "")};
`

export const WrapperBlock = styled.div`
display: ${(props) => (props.displayView ? props.displayView : 'flex')};
box-sizing: ${(props) => (props.boxS ? props.boxS : 'border-box')};
${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
${(props) => props.alignI && `align-items: ${props.alignI}`};
${(props) => props.alignC && `align-content: ${props.alignC}`};
${(props) => props.flex && `flex: ${props.flex}`};
${(props) => props.justify && `justify-content: ${props.justify}`};
${(props) => props.positionView && `position: ${props.positionView}`};
${(props) => props.top && `top: ${props.top}`};
${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
${(props) => props.outer && `margin: ${props.outer}`};
${(props) => props.inner && `padding: ${props.inner}`};
${(props) => props.width && `width: ${props.width}`};
${(props) => props.maxW && `max-width: ${props.maxW}`};
${(props) => props.minW && `min-width: ${props.minW}`};
${(props) => props.height && `height: ${props.height}`};
${(props) => props.zIndex && `z-index: ${props.zIndex}`};
${(props) => props.backG && `background: ${props.backG}`};
${(props) => props.border && `border: ${props.border}`};
${(props) => props.borderR && `border-radius: ${props.borderR}`};
${(props) => props.isPointer && 'cursor: pointer'};
${(props) => props.color && `color: ${props.color}`};
${(props) => props.ff && `font-family: ${props.ff}`};
${(props) => props.fz && `font-size: ${props.fz}`};
${(props) => props.fw && `font-weight: ${props.fw}`};
${(props) => props.lh && `line-height: ${props.lh}`};
${(props) => (props.text ? props.text : "")};
`

export const ViewBlock = styled.div`
display: ${(props) => (props.displayView ? props.displayView : 'flex')};
box-sizing: ${(props) => (props.boxS ? props.boxS : 'border-box')};
${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
${(props) => props.alignI && `align-items: ${props.alignI}`};
${(props) => props.alignC && `align-content: ${props.alignC}`};
${(props) => props.flex && `flex: ${props.flex}`};
${(props) => props.justify && `justify-content: ${props.justify}`};
${(props) => props.positionView && `position: ${props.positionView}`};
${(props) => props.top && `top: ${props.top}`};
${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
${(props) => props.outer && `margin: ${props.outer}`};
${(props) => props.inner && `padding: ${props.inner}`};
${(props) => props.width && `width: ${props.width}`};
${(props) => props.maxW && `max-width: ${props.maxW}`};
${(props) => props.minW && `min-width: ${props.minW}`};
${(props) => props.height && `height: ${props.height}`};
${(props) => props.zIndex && `z-index: ${props.zIndex}`};
${(props) => props.backG && `background: ${props.backG}`};
${(props) => props.border && `border: ${props.border}`};
${(props) => props.borderR && `border-radius: ${props.borderR}`};
${(props) => props.isPointer && 'cursor: pointer'};
${(props) => props.color && `color: ${props.color}`};
${(props) => props.ff && `font-family: ${props.ff}`};
${(props) => props.fz && `font-size: ${props.fz}`};
${(props) => props.fw && `font-weight: ${props.fw}`};
${(props) => props.lh && `line-height: ${props.lh}`};
${(props) => props.boxSh && `box-shadow: ${props.boxSh}`};
${(props) => (props.text ? props.text : "")};
`

export const Typography = styled.p`
${(props) => props.color && `color: ${props.color}`};
${(props) => props.ff && `font-family: ${props.ff}`};
${(props) => props.fs && `font-style: ${props.fs}`};
${(props) => props.fz && `font-size: ${props.fz}`};
${(props) => props.fw && `font-weight: ${props.fw}`};
${(props) => props.lh && `line-height: ${props.lh}`};
${(props) => props.ls && `letter-spacing: ${props.ls}`};
${(props) => props.tt && `text-transform: ${props.tt}`};
${(props) => props.op && `opacity: ${props.op}`};
${(props) => (props.text ? props.text : "")};
`

export const UlBlock = styled.ul`
display: ${(props) => (props.displayView ? props.displayView : 'flex')};
box-sizing: ${(props) => (props.boxS ? props.boxS : 'border-box')};
${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
${(props) => props.alignI && `align-items: ${props.alignI}`};
${(props) => props.alignC && `align-content: ${props.alignC}`};
${(props) => props.flex && `flex: ${props.flex}`};
${(props) => props.justify && `justify-content: ${props.justify}`};
${(props) => props.positionView && `position: ${props.positionView}`};
${(props) => props.top && `top: ${props.top}`};
${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
${(props) => props.outer && `margin: ${props.outer}`};
${(props) => props.inner && `padding: ${props.inner}`};
${(props) => props.width && `width: ${props.width}`};
${(props) => props.maxW && `max-width: ${props.maxW}`};
${(props) => props.minW && `min-width: ${props.minW}`};
${(props) => props.height && `height: ${props.height}`};
${(props) => props.zIndex && `z-index: ${props.zIndex}`};
${(props) => props.backG && `background: ${props.backG}`};
${(props) => props.border && `border: ${props.border}`};
${(props) => props.borderR && `border-radius: ${props.borderR}`};
${(props) => props.isPointer && 'cursor: pointer'};
${(props) => props.color && `color: ${props.color}`};
${(props) => props.ff && `font-family: ${props.ff}`};
${(props) => props.fz && `font-size: ${props.fz}`};
${(props) => props.fw && `font-weight: ${props.fw}`};
${(props) => props.lh && `line-height: ${props.lh}`};
${(props) => (props.text ? props.text : "")};
`

export const LiBlock = styled.li`
display: ${(props) => (props.displayView ? props.displayView : 'flex')};
box-sizing: ${(props) => (props.boxS ? props.boxS : 'border-box')};
background: ${(props) => (props.backG ? props.backG : `url(${Romb})center no-repeat`)};
${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
${(props) => props.alignI && `align-items: ${props.alignI}`};
${(props) => props.alignC && `align-content: ${props.alignC}`};
${(props) => props.flex && `flex: ${props.flex}`};
${(props) => props.justify && `justify-content: ${props.justify}`};
${(props) => props.positionView && `position: ${props.positionView}`};
${(props) => props.top && `top: ${props.top}`};
${(props) => props.left && `left: ${props.left}`};
${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
${(props) => props.outer && `margin: ${props.outer}`};
${(props) => props.inner && `padding: ${props.inner}`};
${(props) => props.width && `width: ${props.width}`};
${(props) => props.maxW && `max-width: ${props.maxW}`};
${(props) => props.minW && `min-width: ${props.minW}`};
${(props) => props.height && `height: ${props.height}`};
${(props) => props.zIndex && `z-index: ${props.zIndex}`};
//${(props) => props.backG && `background: ${props.backG}`};
${(props) => props.border && `border: ${props.border}`};
${(props) => props.borderR && `border-radius: ${props.borderR}`};
${(props) => props.isPointer && 'cursor: pointer'};
${(props) => props.color && `color: ${props.color}`};
${(props) => props.ff && `font-family: ${props.ff}`};
${(props) => props.fz && `font-size: ${props.fz}`};
${(props) => props.fw && `font-weight: ${props.fw}`};
${(props) => props.lh && `line-height: ${props.lh}`};
${(props) => (props.text ? props.text : "")};
`

