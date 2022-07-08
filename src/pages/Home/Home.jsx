import React from 'react'
import About from './About/About'
import Benefits from './Benefits/Benefits'
import Clients from './Clients/Clients'
import Hero from './Hero/Hero'
import Partners from './Partners/Partners'

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Partners />
			<Benefits />
			<Clients />
		</>
	)
}

export { Home }
