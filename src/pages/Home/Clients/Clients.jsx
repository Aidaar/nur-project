import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import './Clients.scss'

import img1 from '../../../assets/logo/img1.png'
import img2 from '../../../assets/logo/img2.png'
import img3 from '../../../assets/logo/img3.png'
import img4 from '../../../assets/logo/img4.png'
import img5 from '../../../assets/logo/img5.png'
import img6 from '../../../assets/logo/img1.png'
import img7 from '../../../assets/logo/img7.png'
import img8 from '../../../assets/logo/img8.png'

const Clients = () => {
	return (
		<div className='partners'>
			<div className='container'>
				<h2>КЛИЕНТЫ</h2>
				<OwlCarousel className='owl-theme' loop margin={10} items='5' autoplay>
					<div className='item'>
						<img src={img1} alt='img' />
					</div>
					<div className='item'>
						<img src={img2} alt='img' />
					</div>
					<div className='item'>
						<img src={img3} alt='img' />
					</div>
					<div className='item'>
						<img src={img4} alt='img' />
					</div>
					<div className='item'>
						<img src={img5} alt='img' />
					</div>
					<div className='item'>
						<img src={img6} alt='img' />
					</div>
					<div className='item'>
						<img src={img7} alt='img' />
					</div>
					<div className='item'>
						<img src={img8} alt='img' />
					</div>
				</OwlCarousel>
			</div>
		</div>
	)
}

export default Clients
