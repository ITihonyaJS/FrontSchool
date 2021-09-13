import React from 'react';

import { HeaderContainer, HeaderBody, HeaderGeneralBlock, HeaderTopBlock,HeaderBottomBlock,HeaderTypography, HeaderButtonBlock,ButtonBlock } from "./elements";



import Logo from './components/Logo/index';
import Nav from './components/Nav/index';
import About from './components/About/index';
import Image from './components/Image/index';
import {Wrapper} from "../../generalElements";

const Header = () => {
	return (
		<HeaderContainer>
			<Wrapper>
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
			</Wrapper>
		</HeaderContainer>
	);
};

export default Header