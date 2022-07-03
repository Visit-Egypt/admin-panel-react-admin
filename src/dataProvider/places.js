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
      .get(`${apiUrl}/api/place`, {
        params: {
          page_num: page,
          limit: perPage,
          filters: params.filter,

        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${userData.token_type} ${userData.access_token}`,
        },
      })
      .then((response) => {
        let ValidatedData = response.data.places.map((place) => {
          // count the unique records for pagination
          if (!uniqueRecordIds.has(place.id)) {
            uniqueRecordIds.add(place.id);
          }

          return {
            ...place,
            placeActivities : place.placeActivities ? place.placeActivities : [],
            ticket_prices : place.ticket_prices ? place.ticket_prices : {},
          }
          
        });

        // (ValidatedData);
        return {
          data: ValidatedData,
          total: response.data.has_next
            ? uniqueRecordIds.size + perPage
            : uniqueRecordIds.size,
        };
      })
      .catch((err) => {
        if (err.response.status === 404) {
          return {
            data: [],
            total: 0,
          };
        }
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
        .get(`${apiUrl}/api/place/${params.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userData.token_type} ${userData.access_token}`,
          },
        })
        .then((response) => {
          return {
            data: {
              ...response.data,
              placeActivities : response.data.placeActivities ? response.data.placeActivities : [],
              ticket_prices : response.data.ticket_prices ? response.data.ticket_prices : {},
            },
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
    } else if (params.ids) {
      let ResolvedRequests = await Promise.all(
        params.ids.map((id) => {
          return axios
            .get(`${apiUrl}/api/place/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${userData.token_type} ${userData.access_token}`,
              },
            })
            .then((response) => {
              return response.data;
            });
        })
      );
      // (ResolvedRequests);
      return { data: ResolvedRequests };
    }
  },
  async getMany(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));
    let ResolvedRequests = await Promise.all(
      params.ids.map((id) => {
        return axios
          .get(`${apiUrl}/api/place/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${userData.token_type} ${userData.access_token}`,
            },
          })
          .then((response) => {
            return response.data;
          });
      })
    );
    // (ResolvedRequests);
    return { data: ResolvedRequests };
  },
  delete(resource, params, apiUrl) {
    let userData = JSON.parse(localStorage.getItem("auth"));

    return axios
      .delete(`${apiUrl}/api/place/${params.id}`, {
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
      .post(`${apiUrl}/api/place`, params.data, {
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
      .put(`${apiUrl}/api/place/${params.id}`, params.data, {
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
  getManyReference(resource, params, apiUrl) {
  },

};

export default dataProviderFunctions;
