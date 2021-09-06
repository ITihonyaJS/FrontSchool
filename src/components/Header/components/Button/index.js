import React from 'react';
import {ButtonBlock, Butt} from "../../elements";


const Button = (props) => {
	return (
		<ButtonBlock primary={props.primary}>
			Get Started
		</ButtonBlock>
	);
};

export default Button