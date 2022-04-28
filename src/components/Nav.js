import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import './Nav.css'

function Nav() {
	return (
		<div className='nav'>
			<Link to='/' >Home<FontAwesomeIcon icon={ faHouse}/>
			</Link>
			<FontAwesomeIcon icon={ faHouse}/>
			{/* <Link to='/FAQ'>FAQ</Link> */}
		</div>
	)
}

export default Nav;