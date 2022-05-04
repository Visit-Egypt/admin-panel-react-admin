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
      .get(`${apiUrl}/api/user/all`, {
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
        // uniqueRecordCount += 1;
        response.data.users.map((user) => {
          if (!uniqueRecordIds.has(user.id)) {
            uniqueRecordIds.add(user.id);
          }
        });
        return {
          data: response.data.users,
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
  async getOne(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    if (params.id) {
      return axios
        .get(`${apiUrl}/api/user`, {
          params: {
            user_id: params.id,
            user_email: params.email,
          },
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
    } else {
      let ResolvedRequests = await Promise.all(
        params.ids.map((id) => {
          return axios
            .get(`${apiUrl}/api/user`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${userData.token_type} ${userData.access_token}`,
              },
              params: {
                user_id: id,
              },
            })
            .then((response) => {
              return response.data;
            });
        })
      );
      return { data: ResolvedRequests };
    }
  },
  async getMany(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    let ResolvedRequests = await Promise.all(
      params.ids.map((id) => {
        return axios
          .get(`${apiUrl}/api/user`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${userData.token_type} ${userData.access_token}`,
            },
            params: {
              user_id: id,
            },
          })
          .then((response) => {
            return response.data;
          });
      })
    );
    return { data: ResolvedRequests };
  },
  delete(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    return axios
      .delete(`${apiUrl}/api/user/${params.id}`, {
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
      .post(`${apiUrl}/api/user/register`, params.data, {
        params: {
          user_id: params.id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
        data: params.data,
      })
      .then((response) => {
        return {
          data: { ...params.data, id: response.data.user_id },
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
      .put(`${apiUrl}/api/user/${params.id}`, params.data, {
        params: {
          user_id: params.id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
        data: params.data,
      })
      .then((response) => {
        return {
          data: { ...params.data, id: response.data.user_id },
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
  updateUserRole(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .put(
        `${apiUrl}/api/user/role/${params.id}?updated_user_role=${params.role}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userData.token_type} ${userData.access_token}`,
          },
        }
      )
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
  async getManyReference(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
  },
};

export default dataProviderFunctions;
