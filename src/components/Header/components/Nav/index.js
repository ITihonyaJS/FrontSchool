import React from 'react';

import ArrayNav from "./arrayNav.json"

import { NavGeneralBlock, NavBlock } from "./elements";



const data = ArrayNav;

const Nav = () => {
	return (
		<NavGeneralBlock>
			{data.map(item =>
				<NavBlock>
					{item.name}
				</NavBlock>)}
		</NavGeneralBlock>
	);
};

export default Nav