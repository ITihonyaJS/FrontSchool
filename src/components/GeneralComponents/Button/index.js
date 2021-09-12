import React from 'react';
import {ViewBlock} from "../../../generalElements";


const Button = (props) => {	
	console.log(props);
	return (		
		<ViewBlock {...props}/>		
	);
};

export default Button