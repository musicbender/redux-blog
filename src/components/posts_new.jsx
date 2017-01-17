import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a username';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, mapDispatchToProps)(PostsNew);

//reduxForm is a lot like the connect function from react-redux
//in fact, is IS the same as connect and can connect our action creators for us, too
//connect has two arguments: 1.) mapStateToProps 2.) mapDispatchToProps
//reduxForm has THREE: 1.) form config 2.) mapStateToProps 3.) mapDispatchToProps
//redux form has same arguments only it puts form config as the first argument
