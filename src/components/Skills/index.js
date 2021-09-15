import React from 'react';


import { SkillsContainer, SkillsBody, SkillsGeneralBlock, SkillsTextBlock, TextBlock, IconBlock, Typography, SkillsBlock } from "./elements";

import Img1 from '../../icon/skills/1.png';
import Img2 from '../../icon/skills/2.png';
import Img3 from '../../icon/skills/3.png';
import Img4 from '../../icon/skills/4.png';
import Img5 from '../../icon/skills/5.png';



const Skills = () => {
	const arraySkills = [
		{
			id: 1,
			icon: Img1,
			title: "Creative Ideas",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
			backGr: "4252CF"
		},
		{
			id: 2,
			icon: Img2,
			title: "Beautiful Blog",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
			backGr: "FFFFFF"
		},
		{
			id: 3,
			icon: Img3,
			title: "User Friendly",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
			backGr: "FFFFFF"
		},
		{
			id: 4,
			icon: Img4,
			title: "Perfect Showcase",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
			backGr: "FFFFFF"
		},
		{
			id: 5,
			icon: Img5,
			title: "Easy to Use",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
			backGr: "FFFFFF"
		}
	]
	return (
		<SkillsContainer>
			<SkillsBody>
				<SkillsGeneralBlock
					wrap="wrap"
					justify="center"
					alignI="center"
					margin="5% -15px"
				>
					<SkillsTextBlock
						flexD="column"
						width="100%"
						maxW="358px"
						margin="15px 15px"
					>
						<TextBlock
							margin="0px 0px 15px"
						>
							<Typography
								color="#FF5A05"
								tt="uppercase"
								fz="20px"
								fw="600"
								lh="32px"
							>
								Your Vision, Our Future.
							</Typography>
						</TextBlock>
						<TextBlock
							margin="0px 0px 20px"
						>
							<Typography
								color="#05000B"
								fz="31px"
								fw="700"
								lh="40px"
							>
								Committed to People, Committed
							</Typography>
						</TextBlock>
						<TextBlock>
							<Typography
								color="#05000B"
								fz="16px"
								fw="600"
								lh="25px"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</Typography>
						</TextBlock>
					</SkillsTextBlock>
					{arraySkills.map(item =>
						<SkillsBlock
							width="100%"
							maxW="358px"
							flexD="column"
							padding="35px 69px 35px 35px"
							margin="15px 15px"
							// width="358px"
							// height="265px"
							justify="space-between"
							backG="#FFFFFF"
							border="2px solid rgba(66, 82, 207, 0.1)"
							borderR="10px"
						>
							<IconBlock>
								<img src={item.icon} alt="Ой" />
							</IconBlock>
							<TextBlock>
								<Typography
									color="#05000B"
									fz="20px"
									fw="600"
									lh="32px"
								>
									{item.title}
								</Typography>
							</TextBlock>
							<TextBlock>
								<Typography
									color="#05000B"
									fz="16px"
									fw="600"
									lh="25px"
								>
									{item.text}
								</Typography>
							</TextBlock>
						</SkillsBlock>
					)}
				</SkillsGeneralBlock>
			</SkillsBody>
		</SkillsContainer>
	);
};

export default Skills