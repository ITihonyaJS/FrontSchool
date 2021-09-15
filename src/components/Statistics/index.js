import React from 'react';

import { ContainerBlock, WrapperBlock, StatisticsBlock, StatisticsItem, Typography, TextBlock,AbsoluteBlock } from "./elements";

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
			backG="#FFFFFF"
		>
			<WrapperBlock>
				<StatisticsBlock>
					{arrayStatistics.map(item =>
						<StatisticsItem
							backG={`url(${Romb})center/no-repeat`}
							flexD="column"
							justify="center"
							alignI="center"
							position="relative"													
						>
							<img src={Romb} alt="Ой" />
							<AbsoluteBlock>
								<TextBlock>
									<Typography
										color="#1F37FF"
										fz="55px"
										lh="66px"
										fw="700"
									>
										{item.count}
									</Typography>
								</TextBlock>
								<TextBlock>
									<Typography
										color="#05000B"
										fz="20px"
										lh="32px"
										fw="600"
									>
										{item.text}
									</Typography>
								</TextBlock>
							</AbsoluteBlock>
						</StatisticsItem>)}
				</StatisticsBlock>
			</WrapperBlock>
		</ContainerBlock>
	);
};

export default Statistics