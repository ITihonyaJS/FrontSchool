import React from 'react';

import PriceItem from './PriceItem';

import {GeneralBlock} from "./elements"
import Fire from "./PriceItem/image/2.png"
import Heart from "./PriceItem/image/3.png"


const data = [
	{
		title: "Standard",
		price: "$29",
		subtitle: "monthly pack",
		icon: Fire,
		description: [
			{
				text: "256 GB SSD STORE"
			},
			{
				text: "FULL UI KIT DOWNLOAD"
			},
			{
				text: "PUBLIC API"
			},
			{
				text: "FULL UI PACK DOWNLOAD"
			},
			{
				text: "24/7 SUPPORT"
			}
		]
	},
	{
		title: "Standard",
		price: "$39",
		subtitle: "monthly pack",
		icon: Heart,
		description: [
			{
				text: "256 GB SSD STORE"
			},
			{
				text: "FULL UI KIT DOWNLOAD"
			},
			{
				text: "PUBLIC API"
			},
			{
				text: "FULL UI PACK DOWNLOAD"
			},
			{
				text: "24/7 SUPPORT"
			}
		]
	}
	
]

const PriceList = () => {
	return (
		<GeneralBlock>
			{data.map(item => <PriceItem
			title={item.title}
			price={item.price}
			subtitle={item.subtitle}
			description={item.description}
			icon={item.icon}
			/>)}
		</GeneralBlock>
	);
};


export default PriceList