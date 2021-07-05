import React from 'react';


/**
 * Connects a React component to a Locale Config
 * Inject component props
 *  function __(entry, ...params) : Get translation from dictionary
 *  locale: string
 * @param {*} ComponentToWrap 
 */
declare function locale(ComponentToWrap:any);

/**
 * Inject an react element or string from dictionary
 */
declare class Locale extends React.Component<{entry: string}>{}

/**
 * Make localization api avaliable to @locale decorator 
 */
declare class LocalizeProvider extends React.Component<{dictionary: any, mapStateToProps:function}>{}

declare interface IDictionryEntry{
    lang_id: string,
    label: string,
    data: { [key:string] : any }
}
/**
 * Create an dictionary
 * @param langs 
 */
declare function createDictionary(langs:Array<IDictionryEntry>)