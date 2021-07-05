
/**
 * Action types
 */
export const actionTypes = {
    SET_LANGUAGE : '@wimdental/i18n/SET_LANGUAGE'
}

/**
 * Se language action creator
 * @param {*} language 
 */
export function setLanguage(language){
    return {
        type: types.SET_LANGUAGE,
        payload: language
    }
}