import React from 'react';

import ListPartners from './components/ListPartners/index';

import { PartnersContainer, PartnersWrapper } from "./elements";


//import Logo from './components/Logo/index';



const Partners = () => {
	return (
		<PartnersContainer>
			<PartnersWrapper>
				<ListPartners />				
			</PartnersWrapper>
		</PartnersContainer>
	);
};

export default Partners