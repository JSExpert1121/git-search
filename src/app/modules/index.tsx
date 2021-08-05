import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Error404 } from 'app/components/error'
import { BaseLayout } from 'app/components/layout'
import { SearchPage } from './search'
import { HomePage } from './home'


export const AppRouter: React.FC = () => {
	return (
		<Router>
			<BaseLayout>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/search' component={SearchPage} />
					<Route component={Error404} />
				</Switch>
			</BaseLayout>
		</Router>
	)
}
