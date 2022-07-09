import React from 'react'

import './HeroProjects.scss'
import partners1 from '../../../assets/logo/img1.png'
import partners2 from '../../../assets/logo/img2.png'
import partners3 from '../../../assets/logo/img3.png'

import clients1 from '../../../assets/logo/img8.png'

const HeroProjects = () => {
	return (
		<div className='hero__projects' id='hero__projects'>
			<div className='container'>
				<span className='line'></span>
				<h2>Проекты</h2>
				<div className='content'>
					<div className='card'>
						<div className='project__img-block'>
							<img
								src={clients1}
								alt='clients1'
								className='project__img-clients'
							/>
							<div className='project__img-partners'>
								<img src={partners1} alt='img1' />
								<img src={partners2} alt='img1' />
								<img src={partners3} alt='img1' />
							</div>
						</div>
						<div className='project__desc'>
							<p>
								<span>
									МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА И МЕЛИОРАЦИИ КР В РАМКАХ
									ЕВРАЗИЙСКОГО СОЮЗА ОКАЗАНИЕ ОТ РОССИЙСКОЙ СТОРОНЫ ТЕХНИЧЕСКОГО
									СОДЕЙСТВИЯ
								</span>
							</p>
							<p>
								Крупная поставка оборудования: 550 персональных компьютеров; 1
								000 ноутбуков; 1 000 защищенных смартфонов; серверное
								оборудование, ИБП.
							</p>
						</div>
					</div>
					<div className='card'>
						<div className='project__img-block'>
							<img
								src={clients1}
								alt='clients1'
								className='project__img-clients'
							/>
							<div className='project__img-partners'>
								<img src={partners1} alt='img1' />
								<img src={partners2} alt='img1' />
								<img src={partners3} alt='img1' />
							</div>
						</div>
						<div className='project__desc'>
							<p>
								<span>
									МИНИСТЕРСТВО ТРУДА И СОЦИАЛЬНОГО РАЗВИТИЯ КЫРГЫЗСКОЙ
									РЕСПУБЛИКИ ПРОЕКТ ЗДРАВООХРАНЕНИЯ И СОЦИАЛЬНОЙ ЗАЩИТЫ SWAP-II
								</span>
							</p>
							<p>
								Крупная поставка оборудования: 380 персональных компьютеров; 380
								ИБП; 240 МФУ.
							</p>
						</div>
					</div>
					<div className='card'>
						<div className='project__img-block'>
							<img
								src={clients1}
								alt='clients1'
								className='project__img-clients'
							/>
							<div className='project__img-partners'>
								<img src={partners1} alt='img1' />
								<img src={partners2} alt='img1' />
								<img src={partners3} alt='img1' />
							</div>
						</div>
						<div className='project__desc'>
							<p>
								<span>
									МИНИСТЕРСТВО ТРУДА И СОЦИАЛЬНОГО РАЗВИТИЯ КЫРГЫЗСКОЙ
									РЕСПУБЛИКИ ПРОЕКТ ЗДРАВООХРАНЕНИЯ И СОЦИАЛЬНОЙ ЗАЩИТЫ SWAP-II
								</span>
							</p>
							<p>
								Крупная поставка оборудования: 380 персональных компьютеров; 380
								ИБП; 240 МФУ.
							</p>
						</div>
					</div>
					<div className='card'>
						<div className='project__img-block'>
							<img
								src={clients1}
								alt='clients1'
								className='project__img-clients'
							/>
							<div className='project__img-partners'>
								<img src={partners1} alt='img1' />
								<img src={partners2} alt='img1' />
								<img src={partners3} alt='img1' />
							</div>
						</div>
						<div className='project__desc'>
							<p>
								<span>
									МИНИСТЕРСТВО ТРУДА И СОЦИАЛЬНОГО РАЗВИТИЯ КЫРГЫЗСКОЙ
									РЕСПУБЛИКИ ПРОЕКТ ЗДРАВООХРАНЕНИЯ И СОЦИАЛЬНОЙ ЗАЩИТЫ SWAP-II
								</span>
							</p>
							<p>
								Крупная поставка оборудования: 380 персональных компьютеров; 380
								ИБП; 240 МФУ.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroProjects
