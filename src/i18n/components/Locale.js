import React, { Component, Children } from "react";
import PropTypes from 'prop-types';
import getTranslationImpl from '../utils/locale_get_translation_impl';
import { DictionaryShape } from '../shapes/DictionaryShape';


/**
 * Inject an react element or string from dictionary
 */
export class Locale extends Component {
  static propTypes = {
      /**
   * Entry name on current locale dictionary
   */
      entry: PropTypes.string
  };
  constructor (props, context) {
      super(props, context);
  }

  static contextTypes = {
      dictionary: DictionaryShape
  };
  /**
   * Render the component
   */
  render = () => {
      const { dictionary } = this.context;
      let { entry } = this.props;
      return getTranslationImpl(dictionary.dictionary, dictionary.locale, entry, this.props);
  }
}
