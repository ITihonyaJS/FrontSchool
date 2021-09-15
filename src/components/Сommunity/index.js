import React from 'react';
import Img1 from './image/plug.png';



import { CommunityContainer, CommunityWrapper, CommunityBlock, CommunityBlockСhapter1, CommunityBlockСhapter2, TextBlock, TypographyBlock, Typography, LinkBox, CommunityButtonBlock,CommunityButton } from "./elements";

import Link from '../../GeneralComponents/Link';
import Galka from '../../GeneralComponents/Icon/Galka';


const Community = () => {
	return (
		<CommunityContainer>
			<CommunityWrapper>
				<CommunityBlock>
					<CommunityBlockСhapter1>
						<img src={Img1} alt="Ой, картинки нет" />
					</CommunityBlockСhapter1>
					<CommunityBlockСhapter2>
						<TextBlock>
							<TypographyBlock
								padding="10px 0px 10px 0px"
							>
								<Typography
									fz="17px"
									color="#FF5A05"
									tt="uppercase"
									fw="600"
									lh="32px"
									ls="3px"
								>
									Lorem ipsum dolor sit ame
								</Typography>
							</TypographyBlock>
							<TypographyBlock
								margin="12px 0px 25px"
								padding="10px 0px 10px 0px"
							>
								<Typography
									fz="49px"
									fw="700"
									color="#05000B"
									lh="60px"
								>
									Simple Solutions for Complex Connections
								</Typography>
							</TypographyBlock>
							<TypographyBlock
								padding="10px 0px 10px 0px"
							>
								<Typography
									fz="16px"
									color="#05000B"
									op="0.7"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi odio a velit feugiat sapien.
								</Typography>
							</TypographyBlock>
						</TextBlock>
						<LinkBox>
							<Galka />
							<Link
								justify="center"
								alignI="center"
								isPointer
								borderR="4px"
								color="#05000B"
								fz="20px"
								fw="600"
								lh="32px"
								padding="0px 35px 0px 15px"
							>
								High Analysis
							</Link>
							<Galka />
							<Link
								justify="center"
								alignI="center"
								isPointer
								borderR="4px"
								color="#05000B"
								fz="20px"
								fw="600"
								lh="32px"
								padding="0px 35px 0px 15px"
							>
								Certified Institute
							</Link>
						</LinkBox>
						<CommunityButtonBlock>
							<CommunityButton
							backG="#FF5A05"
							isPointer
							padding="15px 30px"
							borderR="4px"
							>
								<Typography
									color="#FFFFFF"
									fz="20px"
									fw="500"
								>
									Learn More
								</Typography>
							</CommunityButton>
						</CommunityButtonBlock>
					</CommunityBlockСhapter2>
				</CommunityBlock>
			</CommunityWrapper>
		</CommunityContainer>
	);
};

export default Community