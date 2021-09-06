import React from 'react';

import ArrayNav from "../../../../arrayNav.json"
import {NavContainer} from "../../elements";
// import {Button, ViewBlock, Wrapper} from "../elements";

const Nav = () => {
	const data = ArrayNav
	console.log(data);
	
	return (
		<>
			<NavContainer>
				{data.map(item => <li key={item.id}>{item.name}</li>)}
			</NavContainer>
		</>
	);
};

export default Nav