import React, { useEffect } from 'react'
import { useDispatch, setTitle } from 'app/container'
import { Container } from 'react-bootstrap'
import { DataTable } from './components/data-table/data-table'
import { searchGit } from './service'
import './scss/search.scss'
import './scss/data-table.scss'

export const SearchPage: React.FC = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setTitle('Git-Search'))
		// eslint-disable-next-line
	}, [])

	return (
		<Container fluid className='p-4 search-page'>
			<DataTable
				title='Git Search'
				fetchFn={searchGit}
			/>
		</Container>
	)
}
