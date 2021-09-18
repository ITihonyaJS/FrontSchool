import React from 'react';

import PriceList from './PriceList';
import News from './News';

import {BlockContainer,BlockBody} from "./elements"

const PriceAndNews = () => {
	return (
		<BlockContainer>
			<BlockBody>
				<PriceList></PriceList>
				<News></News>
			</BlockBody>
		</BlockContainer>
	);
};


export default PriceAndNews