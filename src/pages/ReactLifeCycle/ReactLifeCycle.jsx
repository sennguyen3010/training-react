import React, { Component } from 'react';
import Child from './Child';

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
    };
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDerivedStateFromProps');
    // currentState.number = 20;
    //return về state mới, nếu giữ state cũ thì return null
    // return currentState
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  render() {
    console.log('render');

    return (
      <div className="container">
        <h3>Number: {this.state.number} </h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <h3>Like: {this.state.like}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
        >
          Like
        </button>
        <Child number={this.state.number} />
      </div>
    );
  }

  componentDidMount() {
    console.log('componentdidmount');
    //tương tự window.onload
  }
}

/**
 Lifecycle
 + Mouting: 
   + các hàm sẽ tự kích hoạt khi sử dụng 1 component. 
   dùng để can thiệp vào quá trình trước or sau khi render nhầm mục đích xử lý state và props
   + can thiệp thay đổi state trước render (sử dụng getDriveStateFromProps)
   + can thiệp thay đổi state sau render sử dụng componentDidMount()
   + componentDiDMount chỉ chạy 1 lần duy nhất khi component load lần đầu tiên (thường dùng để call api)

 */
