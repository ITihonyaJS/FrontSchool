import React from 'react';

import { AboutGeneralBlock, AboutTextBlock, AboutTypography, AboutButtonBlock,ButtonBlock } from "./elements";




const About = (props) => {
	return (
		<AboutGeneralBlock>
			<AboutTextBlock>
				<AboutTypography
					fz="16px"
					color="white"
					tt="uppercase"
					fw="600"
					lh="32px"
					ls="5px"
				>
					Inspiration Technology.
				</AboutTypography>
				<AboutTypography
					fz="61px"
					color="white"				
					fw="700"
					lh="73px"
					padding="15px 0px 0px"					
				>
					Runs faster.
				</AboutTypography>
				<AboutTypography
					fz="50px"
					color="white"					
					fw="500"
					lh="60px"
					padding="0px 0px 41px"					
				>
					Costs less and never breaks.
				</AboutTypography>
				<AboutTypography
					fz="16px"
					color="white"				
					fw="500"
					lh="25px"
					op="0.7"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat
				</AboutTypography>
			</AboutTextBlock>
			<AboutButtonBlock>
				<ButtonBlock
					backG="#FF5A05"
					isPointer					
					borderR="4px"
					padding="15px 30px"					
				>
					<AboutTypography
					color="#FFFFFF"
					fz="20px"
					fw="500"
					>Get Started</AboutTypography>
				</ButtonBlock>
				<ButtonBlock
					backG="transparent"
					border="1px solid #808080"					
					isPointer					
					borderR="4px"
					padding="15px 30px"				
				>
					<AboutTypography
					color="#FFFFFF"
					fz="20px"
					fw="500"
					>Free Trail</AboutTypography>
				</ButtonBlock>
			</AboutButtonBlock>
		</AboutGeneralBlock>
	);
};

export default About