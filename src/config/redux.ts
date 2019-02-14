/**
 * Redux Configuration
 * @author Patryk Adamczyk <patrykadamczyk@patrykadamczyk.net>
 * @copyright Patryk Adamczyk © 2019
 */
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
import debugConfig from './debug';

/**
 * Base Configuration
 */
const config = {
    reducers: rootReducer,
    middleware: [
        thunk
    ],
    initialState: {
    }
};
/**
 * Middlewares
 * This function generates middlewares with Redux DevTools
 * @function middlewares
 * @returns Middlewares with Redux DevTools or without based on config
 */
function middlewares()
{
    const reduxDevTools = (
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__({
            name: "patrykadamczyk.net",
            trace: true
        })
    ) || null;
    if(reduxDevTools !== null && debugConfig.reduxDevTools)
    {
        return compose(
            applyMiddleware(...config.middleware),
            reduxDevTools
        );
    }
    else
    {
        return applyMiddleware(...config.middleware);
    }
}

export default {
    ...config,
    middlewares: middlewares()
}
