import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormComment extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    const { id, value } = e.target;
    //gửi dữ liệu lên redux
    const action = {
      type: 'HANDLE_CHANGE',
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };
  render() {
    console.log(this.props);
    let { name, content } = this.props.commentInfo;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input
            value={name}
            id="name"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <p>Content</p>
          <input
            value={content}
            id="content"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-success">Comment</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  commentInfo: state.commentReducer.commentInfo,
});

export default connect(mapStateToProps)(FormComment);
