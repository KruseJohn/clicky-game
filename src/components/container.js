import React from 'react';
import ImageCards from './image';

const Container = ({ colors, characters, onImageClick }) => {
	const Colors = colors.map((color, index) => {
		return (
			<ImageCards
				key={color}
				backgroundColor={color}
				selectedCharacter={characters[index]}
				onImageClick={onImageClick}
			/>
		)
	})
	return (
		<div className='container' id="main">
			<div className='row'>
				{Colors}
			</div>
		</div>
	);
};

export default Container;