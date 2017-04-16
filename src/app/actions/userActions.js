
/*
 * action types
 */
 export const ADD_USER_DATA = 'ADD_USER_DATA';


export function addUserData(data) {
    return {
        type: 'ADD_USER_DATA',
        data
    };
};
