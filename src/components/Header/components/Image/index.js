import React from 'react';
import { StyledBlock } from '../../../../generalElements';

 import PicturesHeader from "../../image/1.png"


const Image = () => {
	return (
		<StyledBlock
		flex="1 1 55%"				
		backG={`url(${PicturesHeader})center/90% 90% no-repeat`}		
		/>		
		
	);
};

export default Image