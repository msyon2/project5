import React from 'react';
import {Link} from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FaThLarge } from 'react-icons/fa';

import './Nav.css'

function Nav() {
	return (
		<div className='nav'>
			<div className='icons'>
				<Link to='/' >
					< FaThLarge className='icon_home' size="28" color='#9a9ba9'  />
				</Link>
				<Link to='/myPage' >
					< FaUserCircle className='icon_user' size="32" color='#9a9ba9' />
				</Link>
			</div>
		</div>
	)
}

export default Nav;