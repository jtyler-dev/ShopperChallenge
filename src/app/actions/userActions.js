/*
 * action types
 */
 export const SET_USER_DATA = 'SET_USER_DATA';


export function setUserData(data) {
    return {
        type: SET_USER_DATA,
        data
    };
};
