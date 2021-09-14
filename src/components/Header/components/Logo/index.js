import React from 'react';

import {LogoBlock} from "./elements"
import LogoHeader from "./image/logo.png"

//почему не работает без img?
const Logo = () => {	
	return (
		<LogoBlock>
			<img src={LogoHeader} alt="ой" />
		</LogoBlock>
	);
};

export default Logo