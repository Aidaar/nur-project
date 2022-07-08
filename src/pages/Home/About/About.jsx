// import React from 'react'
// import sanjar from '../../../assets/about/sanjar.jpeg'
// import './About.scss'

// const About = () => {
// 	return (
// 		<div className='about' id='about'>
// 			<div className='container'>
// 				<div className='col-2'>
// 					<img src={sanjar} alt='john' className='about__img' />
// 				</div>
// 				<div className='col-2'>
// 					<h2>О нас</h2>
// 					<span className='line'></span>
// 					<p>
// 						Key Skills - опытная, динамично развивающаяся компания. Специалисты
// 						нашей компании, используя свой более чем 10-летний опыт, постоянно
// 						внедряют новые инструменты и методы, позволяющие совершенствовать
// 						рабочий процесс и дающие возможность получения качественного и
// 						быстрого результата с соблюдением принципов конфиденциальности и
// 						справедливости.
// 					</p>
// 					<p>
// 						Я Санжар Абакиров, основатель и генеральный директор компании Key
// 						Skills, имея собственную основательную базу данных по рынку
// 						промышленных предприятий, готов дать Вам необходимую консультацию о
// 						тенденциях его изменения.
// 					</p>
// 					{/* <button className='button'>Explore More</button> */}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default About

import React from 'react'
import img1 from '../../../assets/about/img1.jpg'
import img2 from '../../../assets/about/img2.jpg'
import img3 from '../../../assets/about/img3.jpg'

import './About.scss'

const About = () => {
	return (
		<div className='testimonials' id='testimonials'>
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
