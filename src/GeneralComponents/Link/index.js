import React from 'react';
import {StyledBlock} from "../../generalElements";


const Link = (props) => {	
	
	return (
		<StyledBlock {...props}>
			<a href="google.com">{props.children}</a>
		</StyledBlock>
	);
};

export default Link