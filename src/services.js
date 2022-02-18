const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=25759508-93fa8cc89324fe436e2a6213b';
const axios = require('axios');

class Api {
  constructor() {
    this.page = 1;
    this.searchValue = '';
  }

  async fetchImages() {
    const response = await axios.get(
      `${BASE_URL}?${API_KEY}&q=${this.searchValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`,
    );

    this.page += 1;
    return response;
  }

  resetPage() {
    this.page = 1;
  }

  setSearchValue(inputValue) {
    this.searchValue = inputValue;
  }

  resetSearchValue() {
    this.searchValue = '';
  }
}

export default Api;
