import React from 'react';

const ImageCard = ({ backgroundColor, selectedCharacter, onImageClick }) => {
	return (
		<div className='col-sm-2 pb-5'>
			<div className={`card ${backgroundColor} `} onClick={() => { onImageClick(selectedCharacter) }}>
				<div className='card-image'>
					<img src={`assets/img/${selectedCharacter}.png`} alt='Characters' width="100%" height="auto" />
				</div>
			</div>
		</div>
	);
};

export default ImageCard;