import React from "react";

import Chapter from "./components/Chapter";

import {GeneralChaptersBlock} from "./elements"

const data= [
	{
		title: "SHORT LINKS",
		link: [
			{
				name: "Home"
			},
			{
				name: "Services"
			},
			{
				name: "Screenshots"
			},
			{
				name: "contact"
			},
		]
	},
	{
		title: "HELP LINK",
		link: [
			{
				name: "How to download"
			},
			{
				name: "How it work"
			},
			{
				name: "Video tutorial"
			},
			{
				name: "FAQ"
			},
		]
	},
	{
		title: "SHORT LINKS",
		link: [
			{
				name: "Google Play Store"
			},
			{
				name: "Apple App Store"
			},
			{
				name: "Download Directly"
			},
		]
	}	
]
const Chapters = () => {
	return (
		<GeneralChaptersBlock>
			{data.map(item => <Chapter chapter={item}/>)}			
		</GeneralChaptersBlock>
	);
};


export default Chapters