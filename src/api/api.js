import axios from 'axios'

const BASIC_URL = 'https://conduit.productionready.io/api';

const METHOD = {
  GET() {
    return {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem("jwt") || ""
      }
    }
  },
  POST(data, name) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem("jwt") || ""
      },
      data: {
        [name]: { ...data }
      }
    }
  },
  PUT(data, name) {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem("jwt") || ""
      },
      data: {
        [name]: { ...data }
      }
    }
  },
  DELETE() {
    return {
      method: 'DELETE'
    }
  }
}

const USER_METHOD = {
  POST(data) {
    return METHOD.POST(data, "user");
  },
  PUT(data) {
    return METHOD.PUT(data, "user");
  }
}

const api = (() => {
  const request = (url, config) => axios(url, config);

  const article = {
    getAll() {
      return request(`${BASIC_URL}/articles`, METHOD.GET())
    }
  }

  const user = {
    login(loginInfo) {
      return request(`${BASIC_URL}/users/login`, USER_METHOD.POST(loginInfo));
    },
    create(userInfo) {
      return request(`${BASIC_URL}/users`, USER_METHOD.POST(userInfo));
    },
    get() {
      return request(`${BASIC_URL}/user`, METHOD.GET());
    },
    update(userInfo) {
      return request(`${BASIC_URL}/user`, USER_METHOD.PUT(userInfo));
    }
  };

  return {
    user,
    article
  };
})();

export default api;