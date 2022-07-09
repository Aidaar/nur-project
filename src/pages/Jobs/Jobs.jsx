import React from 'react'
import Hero from './Hero/Hero'
import './Jobs.scss'
import Search from './Search/Search'

const Jobs = () => {
	return (
		<section className='jobs'>
			<Hero />
			<Search />
		</section>
	)
}

export { Jobs }