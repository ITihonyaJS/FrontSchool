import React from 'react';

import {GeneralBlock,Title,TextTitle,SubTitle,TextSubTitle,EmailForm,Email,Button,ButtonText,NearShadow,DistantShadow} from "./elements"


const News = () => {
	return (
		<GeneralBlock>
			<NearShadow></NearShadow>
			<DistantShadow></DistantShadow>
			<Title><TextTitle
			fz="20px"
			lh="32px"
			fw="700"
			color="#FF5A05"
			ls="2px"
			>NEWSLETTER</TextTitle></Title>
			<SubTitle><TextSubTitle
			fz="39px"
			lh="50px"
			fw="600"
			color="#05000B"
			textA="center"			
			>We Offer Every Month 20% Off
			For Our All Subscribers</TextSubTitle></SubTitle>			
			<EmailForm
			padding="10px"
			jastify="space-between"
			alignI="center"			
			>
				<Email
				placeholder="Email Address"
				></Email>
				<Button
				backG="#FF5A05"
				padding="10px 50px"
				borderR="4px"
				margin="0 0 0 10px"				
				>
					<ButtonText
					fz="16px"
					lh="25px"
					fw="500"
					color="#FFFFFF"
					>Subscribe</ButtonText>
				</Button>
			</EmailForm>			
		</GeneralBlock>
	);
};


export default News