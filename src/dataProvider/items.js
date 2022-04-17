import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import axios from "axios";
import { HttpError } from "react-admin";

let httpClient = fetchUtils.fetchJson;
let uniqueRecordIds = new Set();

let dataProviderFunctions = {
  getList(resource, params, apiUrl) {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .get(`${apiUrl}/api/item`, {
        params: {
          page_num: page,
          limit: perPage,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        response.data.items.map((item) => {
          if (!uniqueRecordIds.has(item.id)) {
            uniqueRecordIds.add(item.id);
          }
        });
        return {
          data: response.data.items,
          total: response.data.has_next
            ? uniqueRecordIds.size + perPage
            : uniqueRecordIds.size,
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  getOne(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .get(`${apiUrl}/api/item`, {
        params: {
          page_num: 1,
          limit: 2,
          filters: {
            id: params.id,
          },
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        // let item = response.data.items.find((item) => {
        //   return item.id === params.id;
        // });
        return {
          data: response.data.items[0],
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  delete(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .delete(`${apiUrl}/api/item/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: response.data,
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  create(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .post(`${apiUrl}/api/item`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: { ...params.data, id: response.data.item_id },
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  update(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .put(`${apiUrl}/api/item/${params.id}`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: { ...params.data, id: response.data.item_id },
        };
      })
      .catch((err) => {
        return Promise.reject(
          new HttpError(
            (err.response.data && err.response.data.errors[0]) || "Error",
            err.response.data.status_code,
            err.response.data
          )
        );
      });
  },
  getManyReference(resource, params, apiUrl){
    // console.log(resource, params);
  },
  getMany(resource, params, apiUrl){
    // console.log(resource, params);
  }
};

export default dataProviderFunctions;
