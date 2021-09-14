import React from 'react';

import { HeaderContainer, HeaderBody, HeaderGeneralBlock, HeaderTopBlock,HeaderBottomBlock,HeaderTypography, HeaderButtonBlock,ButtonBlock } from "./elements";



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
							<ButtonBlock>
								Get Started
							</ButtonBlock>
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