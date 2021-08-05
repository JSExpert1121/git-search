import React from 'react'

export const Footer: React.FC = () => {
	return (
		<footer className='d-flex p-3 align-items-center justify-content-center'>
			<span>
				Written by Alejandro Lopez at {`${new Date().toLocaleDateString()}`}
			</span>
		</footer>
	)
}
