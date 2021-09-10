import React from 'react';

import { ContainerBlock, WrapperBlock, UlBlock, LiBlock, ViewBlock, Typography } from "../../generalElements";




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
		backG="#FFFFFF"
		>
			<WrapperBlock
				justify="center"
				maxW="1134px"
				outer="0 auto"
			>
				<UlBlock
					justify="space-between"
					alignI="center"
					outer="143px 0px 139px"					
				>
					{arrayStatistics.map(item =>
						<LiBlock
							key={item.id}
							justify="center"
							alignI="center"
							outer="10px"
							width="261px"
							height="371px"
							color="black"
						>
							<ViewBlock
								viewDirection="column"
								justify="flex-start"
								alignI="center"
								height="371px"
								inner="90px 0px 0px"								
							>
								<ViewBlock>
									<Typography
										color="#1F37FF"
										fz="55px"
										lh="66px"
										fw="700"
										ff="Inter"
									>
										{item.count}
									</Typography>
								</ViewBlock>
								<ViewBlock>
									<Typography
										color="#05000B"
										fz="20px"
										lh="32px"
										fw="600"
										ff="Inter"
									>
										{item.text}
									</Typography>
								</ViewBlock>
							</ViewBlock>
						</LiBlock>)}
				</UlBlock>
			</WrapperBlock>
		</ContainerBlock>
	);
};

export default Statistics