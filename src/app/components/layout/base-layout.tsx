import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const BaseLayout: React.FC<React.PropsWithChildren<{}>> = (props) => {
	return (
		<div className='h-100 d-flex flex-column'>
			<Header />
			<main className='flex-fill'>
				{props.children}
			</main>
			<Footer />
		</div>
	)
}
