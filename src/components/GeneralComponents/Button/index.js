import React from 'react';
import {ViewBlock} from "../../../generalElements";


const Button = (props) => {	
	
	return (
		<ViewBlock 
		backG={props.backG}  
		border={props.border}
		justify="center"
		alignI="center"
		isPointer
		width="172px"
		height="62px"
		outer="0px 40px 0px 0px"
		inner="15px 30px"
		borderR="4px"
		color="#FFFFFF"
		fz="20px"
		fw="500"
		boxS="border-box"
		>
			{props.text}
		</ViewBlock>
	);
};

export default Button