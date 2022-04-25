import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title , year, summary , poster , genres , rating }) {
	return (
		<div className='movie'>
			<div className='movie_card'>
				<img src={poster} alt={title} title={title} />
				<div className='movie_label'>
					<span className='movie_title'>{title}</span>
					<span className='movie_year'>| {year}</span>
					<span className='movie_rating'>{rating}</span>
				</div>
			</div>
		</div>
	)
}

Movie.propTypes = {
	year:PropTypes.number.isRequired, 
	title:PropTypes.string.isRequired, 
	summary:PropTypes.string.isRequired, 
	poster:PropTypes.string.isRequired, 
	genres:PropTypes.arrayOf(PropTypes.string).isRequired, 
	rating:PropTypes.number.isRequired, 
	runtime:PropTypes.number.isRequired, 
};

export default Movie;