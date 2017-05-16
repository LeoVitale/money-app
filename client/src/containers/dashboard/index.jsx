import React, { Component } from 'react';
import ContentHeader from '../../common/template/content-header';
import Content from '../../common/template/content';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashnoard' small='Versão 1.0' />
        <Content>
          <h1>opa</h1>
        </Content>
      </div>
    );
  }
}

export default DashBoard;
