import axios from 'axios';
import {FETCH_POSTS} from '../constants/index';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=f4Gj877Sxn3E4prj';

export function fetchPosts() {
const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
