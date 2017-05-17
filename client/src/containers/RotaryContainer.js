import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { Modal, RotaryList } from '../components';
import * as carsActionCreators from '../actions/cars';

class RotaryContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount() {
    this.getCars();
  }

  toggleModal(index) {
    this.props.rotarysActions.showSelectedCar(this.props.rotarys[index]);
    $('#game-modal').modal();
  }

  getCars() {
    this.props.rotarysActions.getCars();
  }

  deleteCar(id) {
    this.props.rotarysActions.deleteCar(id)
  }

  setSearchBar(e) {
    this.props.rotarysActions.setSearchBar(e.target.value.toLowerCase());
  }

  render() {
    const { rotarys, searchBar, selectedCar } = this.props;
    console.log(rotarys);
    return (
      <div>
        <Modal car={selectedCar} />
        <RotaryList
          rotarys={rotarys}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteCar={this.deleteCar}
        />
      </div>
    )
  }
}

// mapStateToProps is a function with the state as parameter. it returns an
// object that gives our container access to the state information as props.
// in this case rotarys list is availabe through this.props.rotarys.
function mapStateToProps(state) {
  return {
    // we get all the cars to list in the page.
    rotarys: state.getIn(['cars', 'list'], Immutable.List()).toJS(),
    searchBar: state.getIn(['cars', 'searchBar'], ''),     //we retrieve the searchbar content.
    selectedCar: state.getIn(['cars', 'selectedCar'], Immutable.List()).toJS()
  }
}

// mapDispatchToProps allow our container to dispatch actions. we need bindActionCreators
// which makes our action creators wrapped into a dispatch call. through rotarysActions
// object, rotary continer can now call getGames action creator.
function mapDispatchToProps(dispatch) {
  return {
    rotarysActions: bindActionCreators(carsActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RotaryContainer);
