import React from 'react';
import { StyledBlock } from '../../../../generalElements';

 import PicturesHeader from "../../image/1.png"


const Image = () => {
	return (
		<StyledBlock
		flex="1 1 55%"		
		position="relative"		
		>
			<StyledBlock
			position="absolute"
			>
				<img src={PicturesHeader} alt="Ой" />
			</StyledBlock>
		</StyledBlock>		
		
	);
};

export default Image