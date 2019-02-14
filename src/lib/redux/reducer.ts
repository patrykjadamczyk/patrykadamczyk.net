/**
 * Redux Base Reducer
 * @author Patryk Adamczyk <patrykadamczyk@patrykadamczyk.net>
 * @copyright Patryk Adamczyk © 2019
 */
import ReduxAction from '../../types/redux/ReduxAction';
import ReduxReducer from '../../types/redux/ReduxReducer';
/**
 * Redux Base Reducer
 * @param {string} actionType Type of Action which this reducer is for
 * @param {object} state Base State
 * @param {ReduxAction} action Action
 * @param {ReduxReducer} reducer Reducer function to process data
 * @returns {any} New State
 */
export default function(actionType: string, state: object, action: ReduxAction, reducer: ReduxReducer) : any {
    switch(action.type)
    {
        case actionType:
            return reducer(state, action);
        default:
            return state;
    }
};
