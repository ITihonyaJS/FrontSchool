import React from 'react';
import styled from "styled-components";
import {StyledBlock,StyledButton} from "../../generalElements";



const Button = (props) => {	
	
	return (		
		<StyledBlock>
			<StyledButton {...props}/>	
		</StyledBlock>
			
	);
};

export default Button