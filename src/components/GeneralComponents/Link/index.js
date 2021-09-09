import React from 'react';
import {ViewBlock} from "../../../generalElements";


const Link = (props) => {	
	
	return (
		<ViewBlock 
		justify="center"
		alignI="center"
		isPointer
		borderR="4px"
		color="#05000B"
		fz="20px"
		fw="600"
		lh="32px"
		inner="0px 35px 0px 15px"

		>
			<a href="google.com">{props.text_link}</a>
		</ViewBlock>
	);
};

export default Link