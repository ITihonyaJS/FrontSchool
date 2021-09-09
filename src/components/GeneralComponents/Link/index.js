import React from 'react';
import {LinkBlock} from "../../../generalElements";


const Link = (props) => {	
	
	return (
		<LinkBlock >
			<a href="google.com">{props.text_link}</a>
		</LinkBlock>
	);
};

export default Link