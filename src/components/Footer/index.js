import React from "react";

import Contacts from "./components/Contacts";
import Chapters from "./components/Chapters";

import {FooterContainer,FooterBody,GeneralFooterBlock} from "./elements"

const Footer = () => {
	return (
		<FooterContainer>
			<FooterBody>
				<GeneralFooterBlock>
					<Contacts></Contacts>
					<Chapters></Chapters>
				</GeneralFooterBlock>
			</FooterBody>
		</FooterContainer>
	);
};


export default Footer