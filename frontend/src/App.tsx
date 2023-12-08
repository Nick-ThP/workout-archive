import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Workout } from './pages/Workout'

export function App() {
	return (
		<>
			<Router>
				<div>
					<Header />
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/workout/:id' element={<Workout />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}
