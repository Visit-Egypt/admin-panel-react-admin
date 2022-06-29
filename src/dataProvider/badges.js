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
      .get(`${apiUrl}/api/badge`, {
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
        response.data.badges.map((badge) => {
          if (!uniqueRecordIds.has(badge.id)) {
            uniqueRecordIds.add(badge.id);
          }
        });
        return {
          data: response.data.badges,
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
      .get(`${apiUrl}/api/badge`, {
        params: {
          page_num: 1,
          limit: 1,
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
        return {
          data: response.data.badges[0],
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
  async getMany(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    let ResolvedRequests = await Promise.all(
      params.ids.map((id) => {
        return axios
          .get(`${apiUrl}/api/badge`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${userData.token_type} ${userData.access_token}`,
            },
            params: {
              page_num: 1,
              limit: 1,
              filters: {
                id: params.id,
              },
            },
          })
          .then((response) => {
            return response.data.badges[0];
          });
      })
    );

    return { data: ResolvedRequests };
  },
  delete(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .delete(`${apiUrl}/api/badge/${params.id}`, {
        // params:{},
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
      .post(`${apiUrl}/api/badge`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: { ...params.data, id: response.data.id },
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
      .put(`${apiUrl}/api/badge/${params.id}`, params.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        return {
          data: { ...params.data, id: response.data.id },
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
};

export default dataProviderFunctions;
