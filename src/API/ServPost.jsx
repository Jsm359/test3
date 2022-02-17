import axios from "axios";

export class ServPost  {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    })
    return response
  }
}
