import React, { useEffect } from 'react'
import { useDispatch, setTitle } from 'app/container'

export const HomePage: React.FC = () => {
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setTitle('Home'))
	}, [dispatch])

	return (
		<div className='home'>
			Home Page
		</div>
	)
}
