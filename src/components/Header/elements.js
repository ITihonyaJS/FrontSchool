import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: linear-gradient(264.47deg, #2E43F0 29.39%, #6677FF 93.49%);
  padding: 60px 0 160px;
`
export const HeaderWrapper = styled.div`
  max-width: 1134px;
  margin: 0 auto;
`

export const HeaderBlock1 = styled.div`
	display: flex;	
	justify-content:space-between;
	align-items:center;	
	margin: 0px 0px 82px 0px;
	font-family: "Inter"
`

export const HeaderBlock2 = styled.div`
	display: flex;	
	margin: 0px 0px 82px 0px
`

export const ButtonBlock = styled.div`
	cursor: pointer;
  	background: ${props => props.primary ? '#FF5A05' : props.secondary ? 'rgba(255, 90, 5, 0,1)' : 'transparent' };
	padding: 15px 30px 15px 30px;
	width: 172px;
	height: 62px;	
	border-radius: 4px;
	color: #FFFFFF;
	font-size: 20px;
	text-align: center;
	font-weight: 500;
`
export const NavContainer = styled.ul`
	display: flex;
	width: 495px;
	height: 32px;
	justify-content:space-between;
	font-size: 20px;
	color: #FFFFFF;
	font-weight: 500;			
`
