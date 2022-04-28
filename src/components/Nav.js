import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import './Nav.css'

function Nav() {
	return (
		<div className='nav'>
			<div className='home'>
				<Link to='/' >
				</Link><FontAwesomeIcon icon={faHouse}/>
			</div>
			
			{/* <Link to='/FAQ'>FAQ</Link> */}
		</div>
	)
}

export default Nav;