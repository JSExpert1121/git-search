import { Dispatch } from 'react'

export type PureAction = {
	type: string;
	payload?: any;
}
export type ActionType = PureAction | CallableFunction

export interface StoreType<StateType> {
	state: StateType;
	dispatch: Dispatch<ActionType>;
}

export type Middleware = (dispatch: CallableFunction, action: ActionType) => void
