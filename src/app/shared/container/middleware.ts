import React, { Reducer, useCallback } from 'react'
import { ActionType, Middleware, PureAction } from 'app/shared/container/context'


export const functionMiddleWare: Middleware = (dispatch, action) => {
	if (typeof action === 'function') {
		action(dispatch);
		return true
	}

	return false
}

export function useReducerWithMiddleware<S>(reducer: Reducer<S, PureAction>, initialState: S, middlewares: Middleware[]) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const dispatchWithMiddleware = useCallback((action: ActionType) => {
		let done = false
		for (const middleware of middlewares) {
			done = middleware(dispatch, action)
			if (done) break
		}

		if (!done) dispatch(action as PureAction)
	}, [middlewares, dispatch])

	return { state, dispatch: dispatchWithMiddleware }
}
