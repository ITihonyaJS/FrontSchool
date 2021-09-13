import React from 'react';
import { StyledBlock } from '../../../../generalElements';

 import PicturesHeader from "../../image/1.png"


const Image = () => {
	return (
		<StyledBlock
		flex="1 1 60%"				
		backG={`url(${PicturesHeader})center/auto 100% no-repeat`}		
		/>		
		
	);
};

export default Image