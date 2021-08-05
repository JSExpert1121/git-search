import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Header: React.FC = () => {
	return (
		<Navbar bg="dark" variant="dark" className='px-3'>
			<Navbar.Brand href="/">Home</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="/search">Search</Nav.Link>
			</Nav>
		</Navbar>
	)
}
