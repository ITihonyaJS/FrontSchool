import React from 'react';


import { ContainerBlock, BodyBlock, ViewBlock, Typography, UlBlock, LiBlock } from "../../generalElements";

import Img1 from '../../icon/skills/1.png';
import Img2 from '../../icon/skills/2.png';
import Img3 from '../../icon/skills/3.png';
import Img4 from '../../icon/skills/4.png';
import Img5 from '../../icon/skills/5.png';



// const Slills = () => {
// 	const arraySkills = [
// 		{
// 			id: 1,
// 			icon: Img1,
// 			title: "Creative Ideas",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
// 			backGr: "4252CF"
// 		},
// 		{
// 			id: 2,
// 			icon: Img2,
// 			title: "Beautiful Blog",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
// 			backGr: "FFFFFF"
// 		},
// 		{
// 			id: 3,
// 			icon: Img3,
// 			title: "User Friendly",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
// 			backGr: "FFFFFF"
// 		},
// 		{
// 			id: 4,
// 			icon: Img4,
// 			title: "Perfect Showcase",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
// 			backGr: "FFFFFF"
// 		},
// 		{
// 			id: 5,
// 			icon: Img5,
// 			title: "Easy to Use",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida ",
// 			backGr: "FFFFFF"
// 		}
// 	]
// 	return (
// 		<ContainerBlock
// 			backG="#FFF9F5"
// 		>
// 			<BodyBlock
// 				maxW="1134px"
// 				outer="0 auto"
// 			>
// 				<ViewBlock
// 				height="579px"
// 				outer="84px 0px 74px"
// 				justify="center"
// 				alignI="center"
// 				>
// 					<UlBlock
// 						wrap="wrap"
// 						justify="center"
// 						alignI="center"
// 						outer="0px -15px"						
// 					>
// 						<ViewBlock
// 							viewDirection="column"
// 							width="358px"
// 							height="265px"							
// 							outer="15px 15px"
// 						>
// 							<ViewBlock
// 								outer="0px 0px 15px"
// 							>
// 								<Typography
// 									color="#FF5A05"
// 									tt="uppercase"
// 									fz="20px"
// 									fw="600"
// 									lh="32px"
// 								>
// 									Your Vision, Our Future.
// 								</Typography>
// 							</ViewBlock>
// 							<ViewBlock
// 								outer="0px 0px 20px"
// 							>
// 								<Typography
// 									color="#05000B"
// 									fz="31px"
// 									fw="700"
// 									lh="40px"
// 								>
// 									Committed to People, Committed
// 								</Typography>
// 							</ViewBlock>
// 							<ViewBlock>
// 								<Typography
// 									color="#05000B"
// 									fz="16px"
// 									fw="600"
// 									lh="25px"
// 								>
// 									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// 								</Typography>
// 							</ViewBlock>
// 						</ViewBlock>
// 						{arraySkills.map(item =>
// 							<LiBlock
// 								key={item.id}
// 								viewDirection="column"
// 								inner="35px 69px 35px 35px"
// 								outer="15px 15px"																					
// 								width="358px"
// 								height="265px"
// 								justify="space-between"
// 								backG="#FFFFFF"
// 								border="2px solid rgba(66, 82, 207, 0.1)"
// 								borderR="10px"
// 								//backG={item.backGr}
// 							>
// 								<ViewBlock>
// 									<img src={item.icon} alt="Ой" />
// 								</ViewBlock>
// 								<ViewBlock>
// 									<Typography
// 										color="#05000B"
// 										fz="20px"
// 										fw="600"
// 										lh="32px"
// 									>
// 										{item.title}
// 									</Typography>
// 								</ViewBlock>
// 								<ViewBlock>
// 									<Typography
// 										color="#05000B"
// 										fz="16px"
// 										fw="600"
// 										lh="25px"
// 									>
// 										{item.text}
// 									</Typography>
// 								</ViewBlock>

// 							</LiBlock>
// 						)}
// 					</UlBlock>
// 				</ViewBlock>
// 			</BodyBlock>
// 		</ContainerBlock>
// 	);
// };

// export default Slills