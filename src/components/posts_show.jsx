import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostsShow extends Component {
componentWillMount() {
  this.props.fetchPost(this.props.params.id);
}

  render() {
    const { post } = this.props;

    if (!post) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPost}, dispatch);
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);

//this is a good shorthand if you only have one action
//don't need to use bindActionCreators or map DispatchToprops
