import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <strong>{post.title}</strong>
            <span className="post-category">{post.categories}</span>
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary new-post-btn">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
