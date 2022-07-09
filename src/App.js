import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Notfound } from './pages/Notfound/Notfound'
import { Home } from './pages/Home/Home'
import { Jobs } from './pages/Jobs/Jobs'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='jobs' element={<Jobs />} />
				<Route path='*' element={<Notfound />} />
			</Route>
		</Routes>
	)
}

export default App
