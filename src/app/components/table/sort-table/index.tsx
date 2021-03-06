import React from 'react'
import { Table } from 'react-bootstrap'
import { SortColumn } from './sort-column'

type TableColumn = {
	title: string;
	key: string;
	sortable: boolean;
}
type SortTableProps = {
	columns: TableColumn[];
	sort: string;
	onSort: (title: string, up: boolean) => void;
	colgroups?: string[];
	children: React.ReactNode;
}
export const SortTable: React.FC<SortTableProps> = (props) => {

	const { columns, children, onSort, sort, colgroups } = props

	return (
		<Table className='w-100'>
			{colgroups && (
				<colgroup>
					{colgroups.map((col, idx) => (
						<col span={1} width={col} key={`col-${idx}`}></col>
					))}
				</colgroup>
			)}
			<thead>
				<tr>
					{columns.map(col => {
						if (col.sortable) {
							return <SortColumn key={col.title} title={col.title} sort={col.key} active={sort === col.key} onChange={onSort} />
						} else {
							return <th key={col.title}>{col.title}</th>
						}
					})}
				</tr>
			</thead>
			{children}
		</Table>
	)
}
