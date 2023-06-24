import { http } from '~/extensions';
import { postParams } from './types';

export class PostService {
  getPost = (postId: postParams) => http.get(`/posts?${postId ? postId : null}`);
}