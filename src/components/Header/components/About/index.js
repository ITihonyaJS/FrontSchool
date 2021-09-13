import React from 'react';

import { AboutGeneralBlock, AboutTextBlock, AboutTypography, AboutButtonBlock } from "./elements";

import Button from '../../../../GeneralComponents/Button/index';


const About = (props) => {
	return (
		<AboutGeneralBlock
			flex="1 1 40%"
			viewDirection="column"
		>
			<AboutTextBlock>
				<AboutTypography
					type_fz="average"
					type_color="white"
					type_tt="uppercase"
					type_fw="average"
					type_lh="average"
					type_ls="yes"
				>
					Inspiration Technology.
				</AboutTypography>
				<AboutTypography
					type_fz="super big"
					type_color="white"
					type_fw="big"
					type_lh="super big"
				>
					Runs faster.
				</AboutTypography>
				<AboutTypography
					type_fz="big"
					type_color="white"
					type_lh="big"
				>
					Costs less and never breaks.
				</AboutTypography>
				<AboutTypography
					type_color="white"
					type_op="yes"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat
				</AboutTypography>
			</AboutTextBlock>
			<AboutButtonBlock>
				<Button
					backG="#FF5A05"
					isPointer
					//outer="0px 40px 0px 0px"
					//inner="15px 30px"
					borderR="4px"
					color="#FFFFFF"
					//fz="20px"
					//fw="500"
					//boxS="border-box"
				>
					<AboutTypography>Get Started</AboutTypography>
				</Button>
				<Button
					border="1px solid #808080"
					justify="center"
					alignI="center"
					isPointer
					outer="0px 40px 0px 0px"
					inner="15px 30px"
					borderR="4px"
					color="#FFFFFF"
					fz="20px"
					fw="500"
					boxS="border-box"
				>
					<AboutTypography>Free Trail</AboutTypography>
				</Button>
			</AboutButtonBlock>
		</AboutGeneralBlock>
	);
};

export default About