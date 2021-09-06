import React from 'react';

import {HeaderContainer, HeaderWrapper,HeaderBlock1,HeaderBlock2} from "./elements";


import Logo from './components/Logo/index';
import Nav from './components/Nav/index';
import Button from './components/Button/index';
import About from './components/About/index';
import Image from './components/Image/index';


const Header = () => {
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<HeaderBlock1>
					<Logo></Logo>
					<Nav></Nav>
					<Button primary></Button>
				</HeaderBlock1>
				<HeaderBlock2>
					<About></About>
					<Image></Image>
				</HeaderBlock2>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header