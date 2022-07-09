import React from 'react'
import img1 from '../../../assets/about/img1.jpg'
import img2 from '../../../assets/about/img2.jpg'
import img3 from '../../../assets/about/img3.jpg'

import './About.scss'

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='container'>
				<span className='line'></span>
				<div className='content'>
					<div className='card'>
						<img src={img1} alt='img1' />
						<p>
							<span>
								Честность перед собой и перед нашими клиентами наш главный
								принцип.
							</span>
						</p>
					</div>
					<div className='card'>
						<img src={img2} alt='img2' />
						<p>
							<span>
								Команда профессионалов и 20 лет успешной работы на рынке,
								говорит о нашей компетенции.
							</span>
						</p>
					</div>
					<div className='card'>
						<img src={img3} alt='img3' />
						<p>
							<span>
								Крупнейший поставщик компьютерной техники, оргтехники и
								комплектующих на рынке Кыргызстана
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
