import React from 'react'
import './Hero.scss'
import ok from '../../../assets/hero/ok.svg'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='content'>
				<p>Ваш выбор - дело нашей техники</p>

				<div className='hero__block'>
					<img src={ok} alt='' className='hero__okicons' />
					<div className=''>
						<p>55 000 + </p>
						<p>Довольных клиентов</p>
					</div>
				</div>
				<div className='hero__block'>
					<img src={ok} alt='' className='hero__okicons' />
					<div className=''>
						<p>No. 1</p>
						<p>Ведущий поставщик компьютерной техники</p>
					</div>
				</div>
				<div className='hero__block'>
					<img src={ok} alt='' className='hero__okicons' />
					<div className=''>
						<p>100 +</p>
						<p>Партнеров по всему миру</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
