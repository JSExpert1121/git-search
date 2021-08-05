import React, { useEffect } from 'react'
import { useDispatch, setTitle } from 'app/container'

export const SearchPage: React.FC = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setTitle('Git-Search'))
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			
		</div>
	)
}

