import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Notfound } from './pages/Notfound/Notfound'
import { Business } from './pages/Projects/Business'
import { Home } from './pages/Home/Home'
import { Recruiting } from './pages/Jobs/Recruiting'
import { Warehouse } from './pages/News/News'
import Excursion from './pages/Excursion/Excursion'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				{/* <Route path='business' element={<Business />} />
				<Route path='recruiting' element={<Recruiting />} />
				<Route path='warehouse' element={<Warehouse />} />
				<Route path='excursion' element={<Excursion />} /> */}
				<Route path='*' element={<Notfound />} />
			</Route>
		</Routes>
	)
}

export default App
