import React from "react";

import {GeneralChapterBlock,TextBlock,TextTitle,LinkBlock,Link} from "./elements"


const Chapter = (props) => {
	const data = props.chapter.link;
	return (
		<GeneralChapterBlock>
			<TextBlock>
				<TextTitle
				fz="20px"
				fw="500"
				lh="32px"
				color="#FFFFFF"
				textA="center"
				>
					{props.chapter.title}
				</TextTitle>
			</TextBlock>
			<LinkBlock>
				{data.map(item => <Link
				href="https://mail.ru/"
				target="_blank"
				>{item.name}</Link>)}	
			</LinkBlock>
		</GeneralChapterBlock>
	);
};


export default Chapter