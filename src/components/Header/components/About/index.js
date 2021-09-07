import React from 'react';

import { AboutTypographyContainer, AboutButtonContainer, AboutBlock, Typography } from "../../elements";

import Button from '../Button/index';

const About = (props) => {
	return (
		<AboutBlock>
			<AboutTypographyContainer>
				<div>
					<Typography
						type_fz="average"
						type_color="white"
						type_tt="uppercase"
						type_fw="average"
						type_lh="average"
						type_ls="yes"
					>
						Inspiration Technology.
					</Typography>
				</div>
				<div>
					<Typography
						type_fz="super big"
						type_color="white"
						type_fw="big"
						type_lh="super big"
					>
						Runs faster.
					</Typography>
					<Typography
						type_fz="big"
						type_color="white"						
						type_lh="big"
					>
						Costs less and never breaks.
					</Typography>
				</div>
				<div>
					<Typography						
						type_color="white"
						type_op="yes"						
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat 
					</Typography>
				</div>
			</AboutTypographyContainer>
			<AboutButtonContainer>
				<Button type_background="primary" />
				<Button type_border="border" />
			</AboutButtonContainer>
		</AboutBlock>

	);
};

export default About