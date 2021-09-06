import styled from "styled-components";



export const ViewBlock = styled.div`
  display: ${(props) => (props.displayView ? props.displayView : 'flex')};
  ${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.positionView && `position: ${props.positionView}`};
  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
  ${(props) => props.outer && `margin: ${props.outer}`};
  ${(props) => props.inner && `padding: ${props.inner}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.zIndex && `z-index: ${props.zIndex}`};
  ${(props) => props.isPointer && 'cursor: pointer'};
  ${(props) => props.boxSizing && `box-sizing: ${props.boxSizing}`};
`

export const Button = styled.div`
  cursor: pointer;
  background: ${props => props.primary ? '#FF5A05' : props.secondary ? 'rgba(255, 90, 5, 0,1)' : 'transparent' };
`