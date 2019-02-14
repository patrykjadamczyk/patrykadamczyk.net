/**
 * Redux Store
 * @author Patryk Adamczyk <patrykadamczyk@patrykadamczyk.net>
 * @copyright Patryk Adamczyk © 2019
 */
import { createStore } from 'redux';
import config from '../config';

/**
 * Redux Store
 */
export default createStore(
    config.redux.reducers,
    config.redux.initialState,
    config.redux.middlewares
);
