import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import {addFeature, removeFeature} from './actions/carSalesActions'

const App = (state) => {
  console.log(state)
  return (
    <div className="boxes">
      <div className="box">
        <Header car = {state.car}/>
        <AddedFeatures car = {state.car} dispatch = {state.props.dispatch}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures = {state.additionalFeatures} dispatch = {state.props.dispatch}/>
        <Total car = {state.car} additionalPrice = {state.additionalPrice}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}
export default connect(mapStateToProps, {addFeature, removeFeature})(App);