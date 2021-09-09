import React from 'react';

import { ContainerBlock,WrapperBlock,UlBlock,LiBlock,ViewBlock,Typography  } from "../../generalElements";

import Romb from "./image/romb.png"




const Statistics = () => {
	const arrayStatistics = [
		{
			id: 1,
			count: "50 +",
			text: "Happy  Clients"
		},
		{
			id: 2,
			count: "550 +",
			text: "Projects Completed"
		},
		{
			id: 3,
			count: "250",
			text: "Dedicated Members"
		},
		{
			id: 4,
			count: "30 +",
			text: "Awards Won"
		}
	]
	return (
		<ContainerBlock
		color="#FFFFFF"
		>
			<WrapperBlock
			maxW="1134px"
			outer="0 auto"			
			inner="40px"
			>
				<UlBlock
				justify="space-around"
				alignI="center"				
				outer="143px 0px 139px"
				>
					{arrayStatistics.map(item => 
					<LiBlock 
					key={item.id}
					justify="center"
					alignI="center"					
					width="261px"
					height="371px"
					color="black"
					positionView="relative"
					outer="15px"										
					>
						<ViewBlock
						viewDirection="column"
						positionView="absolute"	
						justify="center"
						alignI="center"					
						top="20%"
						left="50%"
						ff="Inter"
						>
							<Typography
							color="#1F37FF"
							fz="55px"
							lh="66px"
							fw="700"
							>
								{item.count}
							</Typography>
							<Typography
							color="#05000B"
							fz="20px"
							lh="32px"
							fw="600"
							>
								{item.text}
							</Typography>							
						</ViewBlock>						
						<ViewBlock
						justify="center"
						alignI="center"						
						>
							<img src={Romb} alt="Ой" />							
						</ViewBlock>
					</LiBlock>)}
				</UlBlock>
			</WrapperBlock>
		</ContainerBlock>
	);
};

export default Statistics