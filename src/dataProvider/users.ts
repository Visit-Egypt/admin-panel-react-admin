import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import axios, { AxiosResponse } from "axios";
import { HttpError } from "react-admin";
import { User, UsersPageResponse } from "../types";

let dataProviderFunctions = {
  getList(resource: string, params: any, apiUrl: string) {
    const { page, perPage } = params.pagination;
    // const { field, order } = params.sort;
    let userData = JSON.parse(localStorage.getItem("auth") as string);

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
      .then((response: AxiosResponse<UsersPageResponse>) => {
        console.log(response);
        return {
          data: response.data.users,
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
  async getOne(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);
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
      .then((response: AxiosResponse<User>) => {
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
  async getMany(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    let ResolvedRequests = await Promise.all(
      params.ids.map((id: string) => {
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
          .then((response: AxiosResponse<User>) => {
            return response.data;
          });
      })
    );
    return { data: ResolvedRequests };
  },
  delete(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);
    return axios
      .delete(`${apiUrl}/api/user/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response: AxiosResponse<User>) => {
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
      .then((response: AxiosResponse<User>) => {
        return {
          data: { ...params.data, ...response.data },
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
      .then((response: AxiosResponse<User>) => {
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
  updateUserRole(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

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
      .then((response: AxiosResponse<User>) => {
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
  async getManyReference(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);
  },
};

export default dataProviderFunctions;
