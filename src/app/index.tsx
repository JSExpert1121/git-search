import React from 'react'
import { AppRouter } from './modules';
import { GlobalContainer } from './container';
import 'assets/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App: React.FC = () => {
	return (
		<GlobalContainer>
			<AppRouter />
		</GlobalContainer>
	);
}

export default App;
