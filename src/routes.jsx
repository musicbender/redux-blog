import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import PostsIndex from './components/posts_index.jsx';
import PostsNew from './components/posts_new.jsx';
import PostsShow from './components/posts_show.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
