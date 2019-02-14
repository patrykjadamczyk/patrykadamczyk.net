/**
 * Redux Action
 * @author Patryk Adamczyk <patrykadamczyk@patrykadamczyk.net>
 * @copyright Patryk Adamczyk © 2019
 */
import ReduxAction from './ReduxAction';
/**
 * Redux Reducer Interface
 */
export default interface ReduxReducer
{
    /**
     * Redux Reducer Function
     * @param {object} state State
     * @param {ReduxAction} action Redux Action
     * @returns {any} Changed State
     */
    (state: object, action: ReduxAction): any
}
