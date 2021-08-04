import React, { Reducer, useState } from 'react'
import { ActionType, StoreType } from './context'
import { useReducerWithMiddleware, functionMiddleWare } from './middleware'

type ContainerProps<S> = {
	initial: S;
	reducer: Reducer<S, ActionType>;
	context: React.Context<StoreType<S>>;
	children: React.ReactNode;
}
export function Container<S>(props: ContainerProps<S>) {
	const { initial, reducer, children, context } = props
	const {state, dispatch} = useReducerWithMiddleware(reducer, initial, [functionMiddleWare]);

	return (
		<context.Provider value={{ state, dispatch }}>
			{children}
		</context.Provider>
	)
}
