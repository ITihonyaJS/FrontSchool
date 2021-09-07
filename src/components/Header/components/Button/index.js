import React from 'react';
import {ButtonBlock} from "../../elements";


const Button = (props) => {	
	
	return (
		<ButtonBlock type_background={props.type_background}  type_border={props.type_border}>
			Get Started
		</ButtonBlock>
	);
};

export default Button