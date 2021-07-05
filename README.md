# @wimdental/i18n

Simple module to localize the React using simple tools.

# Example

```javascript
import { LocalizeProvider, createDictionary, Locale } from '@wimdental/i18n';
import React from 'react';

const ptBR = {
    lang_id: 'pt-BR',
    label: 'Portugês Brasileiro',
    data: {
        lang_a : 'Language A',
        lang_x : x => `Language ${x}`,
        lang_react: ({lang}) => <div>React {lang}</div>
    }
};

class AppComponent extends React.Component{
  
  render(){
    const { __ } = this.props;
    return(
        <div>
          <div>{__('lang_a')}</div>
          <div>{__('lang_x', 'EN')}</div>
          <Locale entry="lang_react" x="BR"/>
        </div>
    )
  }
}

export default class Store extends React.Component {
    render () {
        return (
            <Provider ... >
                <LocalizeProvider dictionary={createDictionary([ptBR])} mapStateToProps={state => state.lang}>
                    <AppComponent />
                </LocalizeProvider>
            </Provider>
        );
    }
}


```
