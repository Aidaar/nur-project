import React from 'react'
import './Hero.scss'

import ok from '../../../assets/hero/ok.svg'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='content'>
				<p>ВАКАНСИИ</p>

				<div className='hero__block'>
					<img src={ok} alt='' className='hero__okicons' />
					<div className=''>
						<p>699</p>
						<p>Проектов</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
