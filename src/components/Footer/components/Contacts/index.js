import React from "react";

import {GeneralContactsBlock,Logo,SocialNetworks,Link,LogoBlock} from "./elements"

import Img1 from "./image/1.png"
import Img2 from "./image/2.png"
import Img3 from "./image/3.png"
import Img4 from "./image/4.png"

const data = [
	{
		icon: Img1
	},
	{
		icon: Img2
	},
	{
		icon: Img3
	},
	{
		icon: Img4
	}
]
const Contacts = () => {
	return (
		<GeneralContactsBlock>
			<LogoBlock><Logo/></LogoBlock>			
			<SocialNetworks>
				{data.map(item => <Link><img src={item.icon} alt="Ой" /></Link>)}
			</SocialNetworks>
		</GeneralContactsBlock>
	);
};


export default Contacts