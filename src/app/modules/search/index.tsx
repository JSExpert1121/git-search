import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, setTitle } from 'app/container'
import { Container } from 'react-bootstrap'
import { SearchInputBar } from 'app/components/form/search-bar'
import { SortTable } from 'app/components/table'
import './scss/search.scss'

export const SearchPage: React.FC = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setTitle('Git-Search'))
		// eslint-disable-next-line
	}, [])

	const [query, setQuery] = useState('')
	const [sortKey, setSortKey] = useState('')
	const [sortUp, setSortUp] = useState(false)

	const onSearch = useCallback((query: string) => {
		setQuery(query)
	}, [])

	const onSort = useCallback((key: string, up: boolean) => {
		setSortKey(key)
		setSortUp(up)
	}, [])

	useEffect(() => {
		console.log(query, sortKey, sortUp)
	}, [query, sortKey, sortUp])

	return (
		<Container fluid className='m-4 search-page'>
			<h1>Git Search Page</h1>
			<section className='my-3'>
				<SearchInputBar onSearch={onSearch} className='search-bar' />
				<SortTable
					onSort={onSort}
					sort={sortKey}
					columns={[
						{ title: 'Name', key: 'name', sortable: true },
						{ title: 'Owner', key: 'owner', sortable: true },
						{ title: 'Stars', key: 'stars', sortable: true },
						{ title: 'Created at', key: 'created', sortable: true }
					]}
				>

				</SortTable>
			</section>

		</Container>
	)
}
