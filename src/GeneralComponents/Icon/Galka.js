import React from 'react';
import {StyledBlock} from "../../generalElements";
import IconGalka from "./image/galka.png"

const Galka = (props) => {	
	
	return (
		<StyledBlock 
		jastify="center"
		alignI="center"
		boxS="border-box"
		>
			<img src={IconGalka} alt="Ой" />
		</StyledBlock>
	);
};

export default Galka