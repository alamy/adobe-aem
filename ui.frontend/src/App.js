import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';

class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
