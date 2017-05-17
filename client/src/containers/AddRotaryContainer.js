import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { Form } from '../components';
import * as carsActionCreators from '../actions/cars';
import * as filestackActionCreators from '../actions/filestack';

class AddRotaryContainer extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
  }

  submit(event) {
    event.preventDefault();
    this.props.rotaryActions.postCar();
    hashHistory.push('/rotarys');
  }

  uploadPicture() {
    this.props.filestackActions.uploadPicture();
  }

  render() {
    const { picture } = this.props;
    return (
      <Form
        handleSubmit={this.submit}
        picture={picture}
        uploadPicture={this.uploadPicture}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    picture: state.getIn(['filestack', 'url'], '')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    rotaryActions: bindActionCreators(carsActionCreators, dispatch),
    filestackActions: bindActionCreators(filestackActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRotaryContainer);
