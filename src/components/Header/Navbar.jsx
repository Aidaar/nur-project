import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.scss'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)
	return (
		<div className='header'>
			<nav className='navbar'>
				<a href='/' className='logo'>
					LOGO
				</a>
				<div className='hamburger' onClick={handleClick}>
					{click ? (
						<FaTimes size={30} style={{ color: '#191a1b' }} />
					) : (
						<FaBars size={30} style={{ color: '#191a1b' }} />
					)}
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to='/' onClick={closeMenu}>
							Главное
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='projects'>Проекты</Link>
					</li>
					<li className='nav-item'>
						<Link to='warehouse'>Клиенты</Link>
					</li>
					<li className='nav-item'>
						<Link to='news'>Новости</Link>
					</li>
					<li className='nav-item'>
						<Link to='jobs'>Вакансии</Link>
					</li>
					<li className='nav-item'>
						<Link to='recruiting'>Контакты</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
