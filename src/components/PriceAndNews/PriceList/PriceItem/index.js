import React from 'react';

import {GeneralBlock,TextBlock,Title,Price,SubTitle,DescriptionBlock,Description,ButtonBlock,Icon} from "./elements"
import {StyledButton,StyledTypography} from "../../../../generalElements"






const PriceItem = (props) => {
	const data = props.description;
	return (
		<GeneralBlock>
			<TextBlock>
				<Icon><img src={props.icon} alt="Ой" /></Icon>
				<Title
				fz="31px"
				lh="49px"
				fw="600"
				textA="center"
				color="#05000B"
				>{props.title}</Title>
				<Price
				fz="96px"
				lh="115px"
				fw="700"
				textA="center"
				color="#1F37FF"
				>{props.price}</Price>
				<SubTitle
				fz="20px"
				lh="32px"
				fw="400"
				textA="center"
				color="#05000B"
				>{props.subtitle}</SubTitle>
			</TextBlock>
			<DescriptionBlock>
				{data.map(item => <Description
				fz="16px"
				lh="25px"
				fw="500"				
				color="#05000B"
				>{item.text}</Description>)}
			</DescriptionBlock>
			<ButtonBlock>
				<StyledButton
				backG="#FF5A05"
				padding="5% 30%"
				borderR="10px"
				>
					<StyledTypography
					fz="18px"
					fw="700"
					lh="28px"
					textA="center"
					color="#FFFFFF"					
					>
						Install Pack
					</StyledTypography>
				</StyledButton>
			</ButtonBlock>
		</GeneralBlock>
	);
};


export default PriceItem