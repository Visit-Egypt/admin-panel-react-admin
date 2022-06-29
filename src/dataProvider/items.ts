import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import axios, { AxiosResponse } from "axios";
import { HttpError } from "react-admin";
import { Item, ItemsPageResponse } from "./../types";

let dataProviderFunctions = {
  getList(resource: string, params: any, apiUrl: string) {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    let userData = JSON.parse(localStorage.getItem("auth") as string);

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
      .then((response: AxiosResponse<ItemsPageResponse>) => {
        return {
          data: response.data.items,
          total: response.data.content_range,
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
  getOne(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

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
      .then((response: AxiosResponse<ItemsPageResponse>) => {
        return {
          data: response.data.items ? response.data.items[0] : null,
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
  delete(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    return axios
      .delete(`${apiUrl}/api/item/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response: AxiosResponse<Item>) => {
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
  create(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    return axios
      .post(`${apiUrl}/api/item`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response: AxiosResponse<Item>) => {
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
  update(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    return axios
      .put(`${apiUrl}/api/item/${params.id}`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response: AxiosResponse<Item>) => {
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
  getManyReference(resource: string, params: any, apiUrl: string) {},
  getMany(resource: string, params: any, apiUrl: string) {},
};

export default dataProviderFunctions;
