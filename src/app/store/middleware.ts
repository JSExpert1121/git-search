import React, { Reducer } from 'react'
import { ActionType, Middleware, PureAction } from './context'


export const functionMiddleWare: Middleware = (dispatch, action) => {
	if (typeof action === 'function') {
		action(dispatch);
	}
}

export function useReducerWithMiddleware<S, A>(reducer: Reducer<S, A>, initialState: S, middlewares: Middleware[]) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const dispatchWithMiddleware = (action: A) => {
		middlewares.forEach(middleware => {
			middleware(dispatch, action as unknown as ActionType)
		})

		dispatch(action)
	}

	return { state, dispatch: dispatchWithMiddleware }
}
