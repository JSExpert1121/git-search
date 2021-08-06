import React, { useCallback, useEffect } from 'react'
import { useDispatch, setTitle } from 'app/container'
import { Container } from 'react-bootstrap'
import { DataTable } from './components/data-table/data-table'
import { searchGit } from './service'
import './scss/search.scss'
import './scss/data-table.scss'
import { useCache } from 'app/shared/cache'
import { SearchParam } from './types'

export const SearchPage: React.FC = () => {

	const dispatch = useDispatch()
	const cache = useCache()

	useEffect(() => {
		dispatch(setTitle('Git-Search'))
	}, [dispatch])

	const search = useCallback((param: SearchParam) => {
		return searchGit(param, cache)
	}, [cache])

	return (
		<Container fluid className='p-4 search-page'>
			<DataTable
				title='Git Search'
				fetchFn={search}
			/>
		</Container>
	)
}
