import React from 'react';

import { HeaderContainer, HeaderBody,HeaderTopBlock,HeaderBottomBlock, HeaderButtonBlock,HeaderButton } from "./elements";



import Logo from './components/Logo/index';
import Nav from './components/Nav/index';
import About from './components/About/index';
import Image from './components/Image/index';




const Header = () => {
	return (
		<HeaderContainer>
			<HeaderBody>				
					<HeaderTopBlock>
						<Logo/>						
						<Nav />						
						<HeaderButtonBlock>
							<HeaderButton>
								Get Started
							</HeaderButton>
						</HeaderButtonBlock>
					</HeaderTopBlock>
					<HeaderBottomBlock>
						<About />
						<Image />
					</HeaderBottomBlock>				
			</HeaderBody>
		</HeaderContainer>
	);
};

export default Header