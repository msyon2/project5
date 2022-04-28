import React from 'react';
import PropTypes from 'prop-types';

function Single({ title , year, summary , poster , genres , rating }) {
	return (
		<div className='header'>
			<div className='header_movie'>
				<img className='poster'src={poster} alt={title} title={title} />
				<div className='info'>
					<h3 className='info_title'>{title}</h3>
					<span className='info_rating'>{rating}</span>
					<ul className='info_genres'>
						{genres.map((genres,index) => {
							return <li key={index} className='movie_intro_genre'>{genres}</li>
						})}
					</ul>
					<p>{summary.slice(0,150)}...</p>
				</div>
			</div>
		</div>
	)
}

Single.propTypes = {
	year:PropTypes.number.isRequired, 
	title:PropTypes.string.isRequired, 
	summary:PropTypes.string.isRequired, 
	poster:PropTypes.string.isRequired, 
	genres:PropTypes.arrayOf(PropTypes.string).isRequired, 
	rating:PropTypes.number.isRequired, 
	runtime:PropTypes.number.isRequired, 
};

export default Header;