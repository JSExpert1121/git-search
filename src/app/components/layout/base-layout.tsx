import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './header'
import { Footer } from './footer'

export const BaseLayout: React.FC<React.PropsWithChildren<{}>> = (props) => {
	return (
		<Container>
			<Header />
			{props.children}
			<Footer />
		</Container>
	)
}
