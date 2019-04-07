import React from 'react';

const Nav = ({ score, topScore, message }) => {
	return (
		
				<ul className='nav py-5'>
					<li className='nav-item col-sm-5'>
						<a href="/"><b>Clicky Game</b></a>
					</li>
					<li className='nav-item col-sm-5'>
						<span><b> {message} </b></span>
					</li>
					<li className='nav-item'>
						<span><b>Score: {score} | Top Score: {topScore}</b></span>
					</li>
				</ul>
		
	);
};

export default Nav;