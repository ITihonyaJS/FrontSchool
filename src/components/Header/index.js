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
				<HeaderGeneralBlock>
					<HeaderTopBlock>
						<Logo>
							Logo
						</Logo>
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
				</HeaderGeneralBlock>
			</HeaderBody>
		</HeaderContainer>
	);
};

export default Header