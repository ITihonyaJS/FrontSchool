import React from 'react';

import {AboutContainer} from "../../elements";

import Button from '../Button/index';

const About = () => {
	return (
		<AboutContainer>
			<div>
				<p>Inspiration Technology.</p>
			</div>
			<div>
				<p>Runs faster.
					Costs less
					and never breaks.
				</p>
			</div>
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat </p>
			</div>
			<div>
				<Button  primary/>
				<Button />
				
			</div>
		</AboutContainer>
	);
};

export default About