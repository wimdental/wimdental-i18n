import { actionTypes as types } from "../actions";

/**
 * Find local storage language or get it from browser
 */
const getLocalLanguage = () => {
    let lsLang = localStorage.getItem('app.lang.id');
    if (!lsLang) {
        let lsLang = navigator.languages ? navigator.languages[0] :
            (navigator.language || navigator.userLanguage);
        localStorage.setItem('app.lang.id', lsLang);
    }
    return lsLang;
};

const initialState = {
    locale: getLocalLanguage()
};

export function reducer (state = initialState, action = { type: '', payload: {} }) {
    switch (action.type) {
        case types.SET_LANGUAGE:
            return {
                ... state,
                locale: action.payload
            };
        default:
            return state;
    }
}
