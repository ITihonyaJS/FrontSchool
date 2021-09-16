import React from 'react';

import Image1 from "./image/1.png"
import Image2 from "./image/2.png"
import Image3 from "./image/3.png"
import Image4 from "./image/4.png"
import Image5 from "./image/5.png"
import Image6 from "./image/6.png"
import Image7 from "./image/7.png"

import {
	ReviewsContainer, ReviewsBody, ReviewsTitleBlock, TitleText,
	SubTitleText, ReviewsBlock, TextBlock, TitleReviews, NameUsers,
	TextReviews, RatingRevievs, ImageBlock, QuotesBlock, UsersBlock,
	SliderBlock, ArrowBlock,QuotesItem
} from "./elements";

import { StyledTypography } from "../../generalElements"






const Reviews = () => {
	return (
		<ReviewsContainer>
			<ReviewsBody>
				<ReviewsTitleBlock>
					<TitleText
						color="#05000B"
						fz="49px"
						lh="58px"
						lw="bold"
					>
						User’s Review
					</TitleText>
					<SubTitleText
						color="#05000B"
						fz="16px"
						lh="25px"
						lw="400"
						op="0.7"
					>
						Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow
					</SubTitleText>
				</ReviewsTitleBlock>
				<ReviewsBlock>
					<TextBlock>
						<TitleReviews
							color="#05000B;"
							fz="31px"
							fw="600"
							lh="49px"
						>What People Say About Us</TitleReviews>
						<TextReviews>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl, tincidunt commodo sit. Et, purus lectus odio cursus placerat leo, non etiam. Neque at leo risus orci,
							<NameUsers>
								<StyledTypography
									fs="normal"
									color="#05000B;"
									fz="25px"
									fw="600"
									lh="40px"
								>
									Davit millar
								</StyledTypography>
								<StyledTypography
									fs="normal"
									color="#05000B;"
									fz="20px"
									fw="400"
									lh="32px"
								>
									CEO, PParkivew int, Ltd
								</StyledTypography>
							</NameUsers>
							<RatingRevievs>
								<img src={Image6} alt="Ой" />
								<img src={Image6} alt="Ой" />
								<img src={Image6} alt="Ой" />
								<img src={Image6} alt="Ой" />
								<img src={Image7} alt="Ой" />
							</RatingRevievs>
						</TextReviews>
						<SliderBlock>
							<img src={Image4} alt="Ой" />
							<ArrowBlock>
								<img src={Image5} alt="Ой" />
							</ArrowBlock>
						</SliderBlock>

					</TextBlock>
					<ImageBlock>
						<UsersBlock>
							<img src={Image1} alt="Ой" />
							<QuotesItem>
								<img src={Image3} alt="Ой" />								
							</QuotesItem>
							<QuotesBlock>
								<img src={Image2} alt="Ой" />								
							</QuotesBlock>
						</UsersBlock>

					</ImageBlock>
				</ReviewsBlock>
			</ReviewsBody>
		</ReviewsContainer>
	);
};

export default Reviews