import React from 'react';
import {Link} from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaThLarge } from 'react-icons/fa';

import './Nav.css'

function Nav() {
	return (
		<div className='nav'>
			<div className='icons'>
				<Link to='/' >
					< FaThLarge className='icon_home' size="28" color='white'  />
				</Link>
				<Link to='/' >
					< FaUserCircle className='icon_user' size="32" color='white' />
				</Link>
			</div>
			
  
			
			{/* <Link to='/FAQ'>FAQ</Link> */}
		</div>
	)
}

export default Nav;