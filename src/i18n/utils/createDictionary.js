import getTranslationImpl from './_get_translation_impl';

/**
 * Create a dictionary for Localize
 * @param {*} languages
 */
export const createDictionary = (languages) => {
    let languageDicts = {};

    languages.forEach(lang => {
        Object.assign(languageDicts, {
            [lang.lang_id]: lang.data
        });
    });

    return {
        locale: 'pt-BR',
        dictionary: languageDicts,
        getTranslation: function (entry, ...args) {
            let { locale, dictionary } = this;
            return getTranslationImpl(dictionary, locale, entry, args);
        }
    };
};
