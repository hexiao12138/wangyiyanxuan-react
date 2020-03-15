import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Lazy from './components/Lazy'
import routes from './config/routes'
export default function App() {
	return (
		<Router>
			<Suspense fallback={<Lazy />}>
				<Switch>
					{routes.map((route, index) => (
						<Route {...route} key={index}></Route>
					))}
				</Switch>
			</Suspense>
			<Footer />
		</Router>
	)
}
