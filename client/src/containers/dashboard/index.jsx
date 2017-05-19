import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getSummary} from './dashboardActions';
import ContentHeader from '../../common/template/content-header';
import Content from '../../common/template/content';
import ValueBox from '../../common/widget/value-box';
import Row from '../../common/layout/row';

class DashBoard extends Component {

  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;
    return (
      <div>
        <ContentHeader title='Dashnoard' small='Versão 1.0'/>
        <Row>
          <Content>
            <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
            <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos" />
            <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor Consolidado" />
          </Content>
        </Row>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    summary: state.dashboard.summary
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getSummary}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);

