import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './Movie.css'

function Movie({ title , year, summary , poster , genres , rating,  background }) {
	return (
		<div className='movie'>
			<div className='movie_card pr'>
				<Link to={{pathname:"/detail", state:{year,title,summary,poster,background,rating,genres} }}>
					<img src={poster} alt={title} title={title} />
					<div className='movie_label pa'>
						{/* <span className='movie_title'>{title}</span><br /> */}
						<div className='movie_info flex'>
							<span className='movie_year'>{year}</span>
							<span className='rating '>{rating}</span>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

Movie.propTypes = {
	year:PropTypes.number.isRequired, 
	title:PropTypes.string.isRequired, 
	summary:PropTypes.string.isRequired, 
	poster:PropTypes.string.isRequired, 
	largePoster:PropTypes.string.isRequired,
	genres:PropTypes.arrayOf(PropTypes.string).isRequired, 
	rating:PropTypes.number.isRequired, 
	background:PropTypes.string.isRequired
};

export default Movie;