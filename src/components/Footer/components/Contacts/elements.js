import styled from "styled-components";

import ImageLogo from "./image/Logo.png"

export const GeneralContactsBlock = styled.div`
display: flex;
flex: 0 0 30%;
flex-direction: column;
margin: 0 70px 0 0;
`
export const LogoBlock = styled.div`
display: flex;
justify-content: flex-start;
padding:0 10px;
`
export const Logo = styled.div`
width: 165px;
height: 45px;
background: url(${ImageLogo});
`
export const SocialNetworks = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 20px 0;
`
export const Link = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #FFFFFF4A;
border-radius: 50%;
width: 41px;
height: 41px;
margin: 0 10px;
`