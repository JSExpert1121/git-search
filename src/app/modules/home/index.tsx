import React, { useEffect } from 'react'
import { useDispatch, setTitle } from 'app/container'

export const HomePage: React.FC = () => {
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setTitle('Home'))
		// eslint-disable-next-line
	}, [])

	return (
		<div className='home'>
			Home Page
		</div>
	)
}
