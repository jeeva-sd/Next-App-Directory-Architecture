import { http } from '~/services';
import { postParams } from './types';

export class PostService {
  getPost = (postId: postParams) => http.get(`/posts?${postId ? postId : null}`);
}