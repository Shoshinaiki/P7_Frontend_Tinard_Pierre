import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:3000/api/posts/";

class PostService {
  createPost(data) {
    return axios.post(API_URL, data, { users: authHeader() });
  }

  getAllPost() {
    return axios.get(API_URL, { users: authHeader() });
  }

  getPostById(id) {
    return axios.get(API_URL + id, { users: authHeader() });
  }

  deletePost(id) {
    return axios.delete(API_URL + id, { users: authHeader() });
  }

  modifyPost(id, data) {
    return axios.put(API_URL + id, data, { users: authHeader() });
  }
}

export default new PostService();
