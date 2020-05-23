import React from 'react';

const SearchBox=({searchField, SearchChange})=>{
	return (
			<div className='pa2'>
				<input type='Search' placeholder='Search Robots' className='pa3 ba b--green bg-lightest-blue' onChange={SearchChange}/>
			</div>
		);
}

export default SearchBox;