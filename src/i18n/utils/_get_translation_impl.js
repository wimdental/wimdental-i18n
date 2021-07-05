import React from 'react';
/**
 * Implement function translation
 */
export default (dictionary, locale, entry, args) => {
    let currentLocale = dictionary['en-US'];
    
    if (dictionary && dictionary[locale] !== undefined) {
        currentLocale = dictionary[locale];
    } else {
        console.warn(`Locale ${locale} not found on dictionary.`);
    }
    
    let entryValue = currentLocale[entry];

    if (entryValue === undefined) {
        console.error(`Key ${entry} not found on locale ${currentLocale}.`);
        return entry;
    }

    if (typeof entryValue === 'function') {
        let result = entryValue.call({}, args);
        return result;
    } else if (typeof entryValue === 'string') {
        return entryValue;
    } else if (React.isValidElement(entryValue)) {
        return entryValue;
    } else {
        throw new Error(`Locale entry ${locale}.data.${entry} must be a string or function.`);
    }
};
