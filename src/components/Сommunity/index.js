import React from 'react';
import Img1 from './image/plug.png';



import { CommunityContainer, CommunityWrapper, CommunityBlock, CommunityBlockСhapter1, CommunityBlockСhapter2, TextBlock,TypographyBlock, Typography, LinkBox } from "./elements";

import Link from '../GeneralComponents/Link';
import Button from '../GeneralComponents/Button';
import Galka from '../GeneralComponents/Icon/Galka';


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
							type_padding="yes"
							>
								<Typography
									type_fz="17px"
									type_color="#FF5A05"
									type_tt="uppercase"
									type_fw="average"
									type_lh="average"
									type_ls="yes"
								>
									Lorem ipsum dolor sit ame
								</Typography>
							</TypographyBlock>
							<TypographyBlock 
							type_margin="12px 0px 25px"
							type_padding="yes"
							>
								<Typography
									type_fz="big"
									type_color="#05000B"
									type_lh="big"
								>
									Simple Solutions for Complex Connections
								</Typography>
							</TypographyBlock>
							<TypographyBlock
							type_padding="yes"
							>
								<Typography
									type_fz="16px"
									type_color="#05000B"
									type_op="yes"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi odio a velit feugiat sapien.
								</Typography>
							</TypographyBlock>
						</TextBlock>
						<LinkBox>
							<Galka/>
							<Link text_link="High Analysis" />
							<Galka/>
							<Link text_link="Certified Institute" />
						</LinkBox>
						<Button 
						text="Learn More"
						backG="#FF5A05"
						/>
					</CommunityBlockСhapter2>
				</CommunityBlock>
			</CommunityWrapper>
		</CommunityContainer>
	);
};

export default Community