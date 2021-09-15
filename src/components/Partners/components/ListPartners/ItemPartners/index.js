import React from 'react';


import {ItemBlock} from "../../../elements";


const ItemPartners = (props) => {
	
	return (
		<>
			<ItemBlock>
				<img src={props.img} alt="Ой, нет картинки" />
			</ItemBlock>
		</>
	);
};

export default ItemPartners