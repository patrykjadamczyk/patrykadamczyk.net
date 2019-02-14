/**
 * Redux Action
 * @author Patryk Adamczyk <patrykadamczyk@patrykadamczyk.net>
 * @copyright Patryk Adamczyk © 2019
 */

/**
 * Redux Action Interface
 */
export default interface ReduxAction
{
    /**
     * Type of Action
     */
    type: string;
    /**
     * Payload of Action
     */
    payload: any;
}
