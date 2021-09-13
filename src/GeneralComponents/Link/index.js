import React from 'react';
import {ViewBlock} from "../../generalElements";


const Link = (props) => {	
	
	return (
		<ViewBlock {...props}>
			<a href="google.com">{props.children}</a>
		</ViewBlock>
	);
};

export default Link