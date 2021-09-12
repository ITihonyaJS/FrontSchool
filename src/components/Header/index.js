import React from 'react';

import {HeaderContainer, HeaderWrapper,HeaderBlock1,HeaderBlock2} from "./elements";


import Logo from './components/Logo/index';
import Nav from './components/Nav/index';
import Button from '../GeneralComponents/Button/index';
import About from './components/About/index';
import Image from './components/Image/index';


const Header = () => {
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<HeaderBlock1>
					<Logo></Logo>
					<Nav></Nav>
					<Button
					backG="#FF5A05"					
					justify="center"
					alignI="center"
					isPointer
					width="172px"
					height="62px"
					outer="0px 40px 0px 0px"
					inner="15px 30px"
					borderR="4px"
					color="#FFFFFF"
					fz="20px"
					fw="500"
					boxS="border-box"										
					>
						Get Started
					</Button>
				</HeaderBlock1>
				<HeaderBlock2>
					<About />
					<Image></Image>
				</HeaderBlock2>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header