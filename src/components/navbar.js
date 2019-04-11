import React from 'react';

const Nav = ({ score, topScore, message }) => {
	return (
		
				<ul className='nav py-2'>
					<li className='nav-item float-left pl-5'>
						<a href="/"><h4><b>Clicky Game</b></h4></a>
					</li>
					<li className='nav-item mx-auto text-danger'>
						<span><h3><b> {message} </b></h3></span>
					</li>
					<li className='nav-item float-right pr-5'>
						<span><h4><b>Score: {score} | Top Score: {topScore}</b></h4></span>
					</li>
				</ul>
		
	);
};

export default Nav;