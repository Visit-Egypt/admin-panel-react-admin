import { stringify } from "query-string";
import { fetchUtils, DataProvider } from "ra-core";
import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpError } from "react-admin";
import { User, UsersPageResponse } from "../types";

let dataProviderFunctions = {
  async getList(resource: string, params: any, apiUrl: string) {
    console.log(params);
    console.log(
      Object.entries(params.filter).map(([key, value]) => {
        return { [key]: value };
      })
    );

    try {
      const { page, perPage } = params.pagination;
      let userData = JSON.parse(localStorage.getItem("auth") as string);
      let response: AxiosResponse<UsersPageResponse> = await axios.get(
        `${apiUrl}/api/user/all`,
        {
          params: {
            page_num: page,
            limit: perPage,
            // filters: Object.entries(params.filter).map(([key, value]) => {
            //   return {[key]:value};
            // }),
            filters: params.filter,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userData.token_type} ${userData.access_token}`,
          },
        }
      );
      console.log(response);
      return {
        data: response.data.users,
        total: response.data.content_range,
      };
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 404) {
        return {
          data: [],
          total: 0,
        };
      }

      return Promise.reject(
        new HttpError(
          error.response.data?.errors[0] || "Error",
          error.response.data?.status_code,
          error.response.data
        )
      );
    }
  },
  async getOne(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    try {
      let response: AxiosResponse<UsersPageResponse> = await axios.get(
        `${apiUrl}/api/user`,
        {
          params: {
            user_id: params.id,
            user_email: params.email,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userData.token_type} ${userData.access_token}`,
          },
        }
      );

      return {
        data: response.data,
      };
    } catch (error: any) {
      return Promise.reject(
        new HttpError(
          error.response.data?.errors[0] || "Error",
          error.response.data?.status_code,
          error.response.data
        )
      );
    }
  },
  async getMany(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    try {
      let response: AxiosResponse<UsersPageResponse>[] = await Promise.all(
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

      return { data: response };
    } catch (error: any) {
      return Promise.reject(
        new HttpError(
          error.response.data?.errors[0] || "Error",
          error.response.data?.status_code,
          error.response.data
        )
      );
    }
  },
  async delete(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    try {
      let response: AxiosResponse<User> = await axios.delete(
        `${apiUrl}/api/user/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userData.token_type} ${userData.access_token}`,
          },
        }
      );

      return {
        data: response.data,
      };
    } catch (error: any) {
      return Promise.reject(
        new HttpError(
          error.response.data?.errors[0] || "Error",
          error.response.data?.status_code,
          error.response.data
        )
      );
    }
  },
  async create(resource: string, params: any, apiUrl: string) {
    let userData = JSON.parse(localStorage.getItem("auth") as string);

    try {
      let response: AxiosResponse<UsersPageResponse> = await axios.post(
        `${apiUrl}/api/user/register`,
        params.data,
        {
          params: {
            user_id: params.id,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userData.token_type} ${userData.access_token}`,
          },
        }
      );

      return {
        data: { ...params.data, ...response.data },
      };
    } catch (error: any) {
      return Promise.reject(
        new HttpError(
          error.response.data?.errors[0] || "Error",
          error.response.data?.status_code,
          error.response.data
        )
      );
    }
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
