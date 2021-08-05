import React, { useEffect } from 'react'
import { useDispatch, setTitle } from 'app/container'

export const SearchPage: React.FC = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setTitle('Git-Search'))
	}, [dispatch])

	return (
		<div>
			
		</div>
	)
}

