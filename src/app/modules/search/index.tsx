import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, setTitle } from 'app/container'
import { Container } from 'react-bootstrap'
import { SearchInputBar } from 'app/components/form/search-bar'
import './scss/search.scss'

export const SearchPage: React.FC = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setTitle('Git-Search'))
		// eslint-disable-next-line
	}, [])

	const [query, setQuery] = useState('')

	const onSearch = useCallback((query: string) => {
		setQuery(query)
	}, [])

	useEffect(() => {
		console.log(query)
	}, [query])

	return (
		<Container fluid className='m-4 search-page'>
			<h1>Git Search Page</h1>
			<section className='my-3'>
				<SearchInputBar onSearch={onSearch} className='search-bar' />
			</section>
		</Container>
	)
}
