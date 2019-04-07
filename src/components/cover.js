import React from 'react';

const Cover = () => {
	return (
		<div className='container-fluid'>
			<div className='header'>
				<div className='row'>
					<h2 className='col-sm-12'>Don't click on any image more than once!</h2>
				</div>
			</div>
			
			<div className='coverImage'>
				<div className="row">
					<div className="col-sm-12 p-0" id='coverGif'>
						<img src='assets/img/crowd.gif' alt='Cover' width="100%" />
					</div>		
				</div>
			</div>
		</div>
	);
};

export default Cover;