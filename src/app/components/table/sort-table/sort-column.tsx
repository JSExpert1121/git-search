import React, { useState } from 'react'

type SortColumnProps = {
	onChange: (title: string, up: boolean) => void;
	title: string;
	sort: string;
	active: boolean;
}
export const SortColumn: React.FC<SortColumnProps> = (props) => {

	const { onChange, title, sort, active } = props
	const [up, setUp] = useState(false)

	const toggle = () => {
		setUp(!up)
		onChange(sort, !up)
	}

	return (
		<th className={active ? 'cursor-pointer active-column' : 'cursor-pointer'} onClick={toggle}>
			{title} &nbsp;
			{up ? <i className={'fa fa-arrow-up' + (active ? '' : ' invisible')} /> 
					: <i className={'fa fa-arrow-down' + (active ? '' : ' invisible')} />}
		</th>
	)
}

