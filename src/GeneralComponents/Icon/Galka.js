import React from 'react';
import {ViewBlock} from "../../../generalElements";
import IconGalka from "./image/galka.png"

const Galka = (props) => {	
	
	return (
		<ViewBlock 
		jastify="center"
		alignI="center"
		boxS="border-box"
		>
			<img src={IconGalka} alt="Ой" />
		</ViewBlock>
	);
};

export default Galka