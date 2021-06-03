import axios from "axios";

class APIRequester {
  constructor() {
    this.cancelRequest = null;
  }

  async getBooks(title, numberOfBooks, index) {
    if (this.cancelRequest) {
      this.cancelRequest.cancel();
    }
    this.cancelRequest = axios.CancelToken.source();

    const requestURL = `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=${numberOfBooks}&startIndex=${index}`;

    try {
      const {
        data: { items },
      } = await axios.get(requestURL, {
        cancelToken: this.cancelRequest.token,
      });

      return items;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new APIRequester();
