import React from 'react';
import {connect} from 'react-redux'
import {removeFeature} from '../actions/carSalesActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {() => {
        props.dispatch(removeFeature(props.feature))
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ...state,
    feature: props.feature
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
