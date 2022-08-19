//rcredux
/**
 + xoá export trên component
 + xoá DispatchToProps
 
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class DemoChonXe extends Component {
  changeColor = (color) => {
    //tạo action chứa dữ liệu thay đổi state
    const action = {
      type: 'CHANGE_COLOR',
      payload: `./img/products/${color}-car.jpg`,
    };
    //b2: dùng this.props.dispatch để đưa action lên store
    this.props.dispatch(action);
  };
  render() {
    let { imgCar } = this.props;
    return (
      <div className="container">
        <h3>Demo chọn xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={imgCar} alt="car" className="w-100" />
          </div>
          <div className="col-6 d-flex">
            <div className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.changeColor('red');
                }}
              >
                Red
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  this.changeColor('silver');
                }}
              >
                Silver
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.changeColor('black');
                }}
              >
                Black
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-warning"
                onClick={() => {
                  this.changeColor('steel');
                }}
              >
                Steel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imgCar: state.imgCar,
});

export default connect(mapStateToProps)(DemoChonXe);
