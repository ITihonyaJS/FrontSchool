import React from 'react';

import { StyledTypography, StyledButton } from "../../generalElements"

import { PaymentContainer, PaymentBody, PaymentGeneralBlock, TextBlock, ButtonBlock } from "./elements"

const FormOfPayment = () => {
	return (
		<PaymentContainer>
			<PaymentBody>
				<PaymentGeneralBlock>
					<TextBlock>
						<StyledTypography
							fz="31px"
							fw="700"
							lh="49px"
							color="#05000B"
							textA="center"
						>
							Without Extra Charge Choose
							Your Best Plan
						</StyledTypography>
					</TextBlock>
					<ButtonBlock>
						<StyledButton
						backG="#FF5A05"
						borderR="4px"
						textA="center"
						padding="15px 30px"
						margin="0 20px 0 0"
						>
							<StyledTypography							
							fz="20px"
							fw="600"
							lh="32px"
							color="#FFFFFF"							
							>
								Monthly
							</StyledTypography>
						</StyledButton>					
					<StyledButton
					backG="rgba(255, 90, 5, 0.1);"
					borderR="4px"
					textA="center"
					padding="15px 30px"
					>
						<StyledTypography						
						fz="20px"
						fw="600"
						lh="32px"
						color="#FF5A05"						
						>
							Yearly
						</StyledTypography>
					</StyledButton>					
				</ButtonBlock>
			</PaymentGeneralBlock>
		</PaymentBody>
		</PaymentContainer >				
	);
};

export default FormOfPayment